"use server";

import Event from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { IEvent } from "@/database";

export const getSimilarEventsBySlug = async (
  slug: string
): Promise<IEvent[]> => {
  try {
    await connectDB();

    // findOne returnează un singur obiect
    const event = await Event.findOne({ slug }).lean<IEvent>();
    if (!event) return [];

    // find returnează un array
    const similarEvents = await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    })
      .limit(3)
      .lean<IEvent[]>(); // lean<IEvent[]>() → TypeScript știe că rezultatul e IEvent[]

    return similarEvents;
  } catch {
    return [];
  }
};
