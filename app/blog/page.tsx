import Image, { StaticImageData } from "next/image";

import speedrunImage from "@/public/images/speedrunning_college.webp";
import Link from "next/link";

export type Post = {
  title: string;
  href: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  date: string;
  datetime: string;
  tags: string[];
};

export default function Blog() {
  const posts = [
    {
      title: "Speedrunning College",
      href: "/blog/post/speedrunning-college",
      description: "Or how I'm completing a 4-year degree in 3 semesters.",
      image: speedrunImage,
      imageAlt: "spreadsheet of college courses broken down by semester",
      date: "May 23, 2023",
      datetime: "2023-05-23",
      tags: ["College"],
    },
  ];

  return (
    <main className="mx-auto max-w-5xl p-12 pt-6">
      <h1 className="text-4xl font-bold">Blog</h1>
      <ul className="mt-6 space-y-20 lg:mt-8 lg:space-y-20">
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} />
        ))}
      </ul>
    </main>
  );
}

function PostPreview({ post }: { post: Post }) {
  return (
    <li>
      <article>
        <Link
          href={post.href}
          className="group flex flex-col gap-4 rounded-xl shadow hover:ring-2 hover:ring-slate-200 md:flex-row"
        >
          <div className="aspect-[16/6] overflow-hidden md:aspect-square md:w-64 md:shrink-0">
            <Image
              src={post.image}
              alt={post.imageAlt}
              className="h-full w-full rounded-t-xl bg-gray-50 object-cover md:rounded-xl"
            />
          </div>
          <div className="px-4 pb-6 md:px-0">
            <div className="text-md flex items-center gap-x-4">
              <time dateTime={post.datetime} className="text-gray-800">
                {post.date}
              </time>
              <div className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {post.tags[0]}
              </div>
            </div>
            <div className="max-w-xl md:mt-1">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="mt-2 text-xl leading-6 text-gray-800 md:mt-4">
                {post.description}
              </p>
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
}
