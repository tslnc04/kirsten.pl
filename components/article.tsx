import Image from "next/image";

// probably should move Post to its own file but whatever
import { Post } from "@/app/blog/page";

export default function Article({
  meta,
  children,
}: {
  meta: Post;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-5xl p-12 pt-6">
      <article className="prose min-w-full">
        <time
          dateTime={meta.datetime}
          className="mb-2 block text-lg text-gray-800"
        >
          {meta.date}
        </time>
        <h1>{meta.title}</h1>
        <p>{meta.description}</p>
        <div className="mb-8 aspect-[2/1] overflow-hidden lg:aspect-[16/9]">
          <Image
            src={meta.image}
            alt={meta.imageAlt}
            className="my-0 h-full w-full rounded-lg object-cover"
          />
        </div>
        {children}
        <p></p>
      </article>
    </main>
  );
}
