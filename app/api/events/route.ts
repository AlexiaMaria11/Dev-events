import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    let event: Record<string, any> = Object.fromEntries(formData.entries());

    let tags: string[] = [];
    let agenda: string[] = [];

    try {
      tags = JSON.parse(formData.get("tags") as string);
    } catch {}
    try {
      agenda = JSON.parse(formData.get("agenda") as string);
    } catch {}

    const fileOrUrl = formData.get("image");

    if (!fileOrUrl)
      return NextResponse.json(
        { message: "Image is required" },
        { status: 400 }
      );

    let imageUrl: string;

    // Dacă e File → urcă la Cloudinary
    if (fileOrUrl instanceof File) {
      const arrayBuffer = await fileOrUrl.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { resource_type: "image", folder: "DevEvent" },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          )
          .end(buffer);
      });

      imageUrl = (uploadResult as { secure_url: string }).secure_url;
    } else if (typeof fileOrUrl === "string") {
      // Dacă e string → folosește direct ca URL
      imageUrl = fileOrUrl;
    } else {
      return NextResponse.json(
        { message: "Invalid image data" },
        { status: 400 }
      );
    }

    event.image = imageUrl;

    const createdEvent = await Event.create({
      ...event,
      tags,
      agenda,
    });

    return NextResponse.json(
      { message: "Event created successfully", event: createdEvent },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Event Creation Failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { message: "Events fetched successfully", events },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Event fetching failed", error: e },
      { status: 500 }
    );
  }
}
