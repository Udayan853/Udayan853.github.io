import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function About() {
  return (
    <section className="max-w-3xl mx-auto leading-relaxed text-base">
      <h1 className="mb-8 text-2xl font-medium">About Me</h1>
      <p className="mb-4">
        I’m <strong>Udayan Kulkarni</strong>, a software developer who enjoys building <strong>robust systems that scale efficiently</strong>. My work spans <strong>cloud computing, backend engineering, and machine learning</strong>, where I focus on solving challenging problems and creating <strong>effective, maintainable solutions</strong>.
      </p>
      <p className="mb-4">
        In my free time, I like <strong>writing blogs, exploring new technologies, going on treks, and playing chess</strong>. I also love music, and I’m currently <strong>learning to play the piano</strong>.
      </p>
      <p className="mb-4">
        At the moment, I’m honing my backend development skills by <strong>contributing to open-source projects</strong>, while also participating in <strong>competitive programming challenges</strong> on platforms like <strong>LeetCode</strong> and <strong>Codeforces</strong>. You can check out my work on <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/yourusername/" className="text-blue-600 hover:underline">LinkedIn</a>.
      </p>
    </section>
  );
}
