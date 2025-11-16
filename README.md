<div align="center">
  <br />
    <a href="https://youtu.be/I1V9YWqRIeI" target="_blank">
      <img src="public/readme/readme-hero.webp" alt="Project Banner">    
    </a>
  <br />

  <div>
<img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logo=Next.js&logoColor=white" /> 
<img src="https://img.shields.io/badge/-Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" /> 
<img src="https://img.shields.io/badge/-Tailwind-06B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white" />
<img src="https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" /><br/>

  </div>

  <h3 align="center">Dev Event Platform</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)


## <a name="introduction">✨ Introduction</a>

Event Platform built to manage and showcase events seamlessly. It features a dynamic home page displaying upcoming events, robust API routes for CRUD operations and detailed event pages with registration and similar event suggestions.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[MongoDB](https://www.mongodb.com/products/platform/atlas-database)** is a flexible, document-oriented NoSQL database that stores data in JSON-like format. It is ideal for modern applications that require scalability, high performance, and schema flexibility.

- **[Mongoose](https://mongoosejs.com/)** is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward schema-based solution to model application data, validate inputs, and manage database interactions efficiently.

- **[Next.js](https://nextjs.org/docs)** is a powerful React framework for building full-stack web applications. It simplifies development with features like server-side rendering, static site generation, and API routes, enabling developers to focus on building products and shipping quickly.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to quickly build custom user interfaces with minimal custom CSS. It promotes consistency, responsiveness, and faster styling without leaving the HTML.

- **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers. It is ideal for building large-scale applications and enhances the development experience.


## <a name="features">🔋 Features</a>

👉 **Home Page**: Displays a dynamic list of events, allowing users to browse upcoming and featured events easily.  

👉 **API Routes**: Create, update, delete, and fetch events from the database with fully functional endpoints.  

👉 **Event Details Page**: Shows event information with the ability to register and view a list of similar events.  

👉 **Next.js 16 Caching**: Implements a completely new approach to caching for improved performance and faster page loads.  


And many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/AlexiaMaria11/Dev-events.git
cd Dev-events
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000/

MONGODB_URI=

```

Replace the placeholder values with your real credentials. You can get these here: [**MongoDB**](https://www.mongodb.com/products/platform/atlas-database).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
