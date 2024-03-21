import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "Résumé",
      href: "https://drive.google.com/file/d/1UQN-JvgAQKE13iXdi4LYdUMPsjskUEKf/view?usp=sharing",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kirsten-laskoski/",
    },
    { name: "GitHub", href: "https://github.com/tslnc04" },
    { name: "GitLab", href: "https://gitlab.com/tslnc04" },
    { name: "Email", href: "mailto:kirsten@lasko.ski" },
    // { name: "KLR Holdings LLC", href: "https://lasko.ski" },
  ];

  return (
    <main className="mx-auto max-w-5xl p-12 pt-6">
      <h1 className="text-4xl font-bold">
        Hey! I&apos;m <span className="text-fuchsia-600">Kirsten</span>
      </h1>
      <p className="mt-4 text-xl">
        I work as a software quality engineer at Red Hat on the Telco
        verification team.
      </p>
      <p className="mt-4 text-xl">
        Previously I was a full stack software engineer at{" "}
        <a href="https://switchframe.ai" className="underline">
          SwitchFrame
        </a>
        .
      </p>
      <p className="mt-4 text-xl">
        I also recently graduated from{" "}
        <a href="https://unc.edu" className="underline">
          UNC Chapel Hill
        </a>{" "}
        with a bachelor&apos;s in mathematics.
      </p>
      <h2 className="mb-2 mt-6 text-3xl font-bold">Links</h2>
      <div className="gird-cols-1 grid gap-x-4 gap-y-2 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-md m-2 w-full rounded px-3.5 py-2.5 text-center font-medium text-fuchsia-600 shadow-sm outline outline-2 outline-fuchsia-600 hover:bg-fuchsia-500 hover:text-white`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
