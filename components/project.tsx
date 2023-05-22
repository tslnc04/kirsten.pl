import Image, { StaticImageData } from "next/image";

export default function Project({
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
    <a
      href={href}
      className="group p-4 hover:ring-2 hover:ring-slate-200 rounded-lg flex flex-col shadow"
    >
      <Image
        src={image}
        alt={imageAlt}
        className="aspect-[16/9] object-cover overflow-hidden"
      ></Image>
      <h2 className="font-medium text-2xl mt-2">{name}</h2>
      <p className="mt-2 mb-4 text-lg">{description}</p>
      <ul className="flex gap-2 mt-auto items-center">
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
    </a>
  );
}
