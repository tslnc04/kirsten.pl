import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import agentSimImage from "@/public/images/agent_sim.webp";
import covidImage from "@/public/images/covid_wave_predictor.webp";
import kplImage from "@/public/images/kirsten.pl.png";
import nombriloImage from "@/public/images/nombrilo.png";
import serveImage from "@/public/images/serve.png";
import smathClassesImage from "@/public/images/smath_classes.png";
import translationImage from "@/public/images/improved_translation.webp";

export default function Projects() {
  const projects = [
    {
      name: "Nombrilo",
      description: "Generate block distributions for Minecraft worlds. Uses custom serde support for NBT data.",
      href: "https://github.com/tslnc04/nombrilo",
      image: nombriloImage,
      imageAlt: "Nombrilo README on GitHub",
      techStack: ["Rust", "serde"],
      year: "2024",
    },
    {
      name: "serve",
      description: "Simple file server with firewalld integration.",
      href: "https://github.com/tslnc04/serve",
      image: serveImage,
      imageAlt: "serve README on GitHub",
      techStack: ["Go", "firewalld"],
      year: "2023",
    },
    {
      name: "kirsten.pl",
      description: "This website! Built using Next.js and Tailwind CSS.",
      href: "https://github.com/tslnc04/kirsten.pl",
      image: kplImage,
      imageAlt: "The kirsten.pl homepage",
      techStack: ["React", "Next.js", "Tailwind CSS", "Docker"],
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
      name: "smath-classes",
      description: "Unofficial course catalog for the North Carolina School of Science and Mathematics.",
      href: "https://github.com/tslnc04/smath-classes",
      image: smathClassesImage,
      imageAlt: "smath-classes homepage without classes loaded",
      techStack: ["JavaScript", "Python"],
      year: "2022",
    },
    {
      name: "Research in ML-based Translation",
      description:
        "Modified transformer model to show improvement in machine translation by using joint part of speech tagging.",
      href: "https://docs.google.com/presentation/d/1d4kQMvbibbChr8m0QDW8ZPpK1D_hq7qyLnSneGN_TsQ/edit?usp=sharing",
      image: translationImage,
      imageAlt: "Slide discussing Transformer model and changes",
      techStack: ["Tensorflow", "NumPy", "Python"],
      year: "2021",
    },
    {
      name: "Covid Wave Predictor",
      description:
        "Made for the 2021 UniHacks hackathon, this project predicts the likelihood of a Covid wave in a given area using a custom neural network.",
      href: "https://github.com/tslnc04/covid-wave-predictor",
      image: covidImage,
      imageAlt:
        "The Covid Wave Predictor homepage, with a map of Covid in the US broken down by county",
      techStack: ["Tensorflow", "Python", "d3.js", "TopoJSON"],
      year: "2021",
    },
    // {
    //   name: "lasko.ski",
    //   description:
    //     "A website for my LLC. Currently doesn't exist, but I'm working on it!",
    //   href: "/projects/",
    //   image: kplImage,
    //   imageAlt: "The lasko.ski homepage",
    //   techStack: ["React", "Next.js", "Tailwind CSS"],
    //   year: "2023",
    // },
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
      <ul className="mt-auto flex flex-wrap items-center gap-2">
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
