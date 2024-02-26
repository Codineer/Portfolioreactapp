"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Next.js",
    description: "I am proficient in Next.js, a React framework renowned for its server-side rendering capabilities and seamless integration with React. My expertise extends to building optimized and performant web applications, implementing dynamic routing, and utilizing advanced features such as server-side rendering (SSR), static site generation (SSG), and API routes for data fetching.",
  },
  {
    title: "Tailwind CSS",
    description: "I am proficient in Tailwind CSS, a utility-first CSS framework that enables rapid development and consistent styling. My expertise includes crafting responsive layouts, customizing design systems, and optimizing styles for performance and maintainability.",
  },
  {
    title: "React.js",
    description: "I excel in React.js, the frontend library renowned for its component-based architecture and declarative programming paradigm. My expertise encompasses crafting sophisticated user interfaces, managing application state efficiently using Redux or Context API, and optimizing performance through memoization and virtual DOM rendering.",
  },
  {
    title: "Express.js",
    description: "I am adept at utilizing Express.js, a minimalist Node.js web application framework, to develop robust and scalable server-side applications. My skill set includes architecting RESTful APIs, implementing middleware for request handling, and integrating various authentication strategies for secure communication.",
  },
  {
    title: "Node.js",
    description: "I possess in-depth knowledge of Node.js, the JavaScript runtime environment revered for its event-driven and non-blocking I/O capabilities. My experience spans developing scalable server-side applications, leveraging npm packages and modules for enhanced functionality, and implementing real-time communication using WebSocket and server-sent events.",
  },
  {
    title: "MongoDB",
    description: "I possess extensive expertise in MongoDB, a NoSQL database renowned for its flexibility and scalability. My proficiency extends to designing optimized database schemas, crafting complex queries, and implementing efficient indexing strategies to ensure optimal performance.",
  },
  {
    title: "MySQL",
    description: "I am skilled in MySQL, a relational database management system known for its reliability and robustness. My expertise includes designing normalized database schemas, optimizing SQL queries for performance, and implementing advanced features such as transactions and stored procedures.",
  }
];


const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
