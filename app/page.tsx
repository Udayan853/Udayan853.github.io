import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/pfp.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale-0 hover:grayscale"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hi...👋</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I’m a software developer with a focus on building clean, efficient, and scalable applications.
        </p>
        <p>
         I enjoy working across backend systems and cloud-native technologies, 
         and I’m always exploring ways to create impactful digital experiences.
          <a
            target="_blank"
            href={socialLinks.github}
          >
            [more]
          </a>
          .
        </p>
        <p>
        This portfolio is where I document my projects, share experiments, and occasionally <a
        target = "_blank"
        href = {socialLinks.medium}
        >
        [write] 
        </a> about what I’ve been learning.
        </p>
        <p>
        It’s both a showcase of my work and a place to reflect on my journey as a developer.
        </p>
        <p>
        I’d love to connect with like-minded people, so don’t hesitate to reach out.
        </p>
      </div>
    </section>
  );
}
