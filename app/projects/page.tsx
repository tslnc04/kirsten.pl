import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import kplImage from "@/public/images/kirsten.pl.png";
import agentSimImage from "@/public/images/agent_sim.webp";
import covidImage from "@/public/images/covid_wave_predictor.webp";

export default function Projects() {
  const projects = [
    {
      name: "kirsten.pl",
      description: "This website! Built using Next.js and Tailwind CSS.",
      href: "https://github.com/tslnc04/kirsten.pl",
      image: kplImage,
      imageAlt: "The kirsten.pl homepage",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      year: "2023",
    },
    {
      name: "agent-sim",
      description:
        "An agent-based simulation of disease spread. I used this mostly as an opportunity to explore a dynamic quadtree to handle collision detection between agents.",
      href: "https://github.com/tslnc04/agent-sim",
      image: agentSimImage,
      imageAlt: "agent-sim running in the terminal",
      techStack: ["Rust"],
      year: "2022",
    },
    {
      name: "Covid Wave Predictor",
      description:
        "Made for the 2021 UniHacks hackathon, this project predicts the likelihood of a Covid wave in a given area using a custom neural network.",
      href: "https://github.com/tslnc04/covid-wave-predictor",
      image: covidImage,
      imageAlt:
        "The Covid Wave Predictor homepage, with a map of Covid in the US broken down by county",
      techStack: ["Tensorflow", "d3.js", "TopoJSON"],
      year: "2021",
    },
    {
      name: "lasko.ski",
      description:
        "A website for my LLC. Currently doesn't exist, but I'm working on it!",
      href: "/projects/",
      image: kplImage,
      imageAlt: "The lasko.ski homepage",
      techStack: ["React", "Next.js", "Tailwind CSS"],
      year: "2023",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl p-12 pt-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-xl">
        These are some of my side projects. I&apos;m pretty bad about finishing
        them though.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}

function Project({
  name,
  description,
  href,
  image,
  imageAlt,
  techStack,
  year,
}: {
  name: string;
  description: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
  techStack: string[];
  year: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg p-4 shadow hover:ring-2 hover:ring-slate-200"
    >
      <Image
        src={image}
        alt={imageAlt}
        className="aspect-[16/9] overflow-hidden object-cover"
      />
      <h2 className="mt-2 text-2xl font-medium">{name}</h2>
      <p className="mb-4 mt-2 text-lg">{description}</p>
      <ul className="mt-auto flex items-center gap-2">
        <li>{year} &middot;</li>
        {techStack.map((tech) => (
          <li
            key={tech}
            className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-gray-800"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}
