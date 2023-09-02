import Button from "@/components/button";

export default function Home() {
  const links = [
    {
      name: "Résumé",
      href: "https://drive.google.com/file/d/1UQN-JvgAQKE13iXdi4LYdUMPsjskUEKf/view?usp=sharing",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kirsten-laskoski-363241112/",
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
        I&apos;m currently a student at{" "}
        <a href="https://unc.edu" className="underline">
          UNC Chapel Hill
        </a>{" "}
        studying mathematics, graduating in Decemeber 2023.
      </p>
      <p className="mt-4 text-xl">
        Though I&apos;m studying math, I do software engineering, with compiler
        design and machine learning being favorite subjects of mine.
      </p>
      <p className="mt-4 text-xl">
        I work for{" "}
        <a href="https://zectonal.com" className="underline">
          Zectonal
        </a>{" "}
        as a Rust developer and freelance for{" "}
        <a href="https://www.switchframe.co/" className="underline">
          SwitchFrame
        </a>{" "}
        using Rust (plus some React).
      </p>
      <h2 className="mb-2 mt-6 text-3xl font-bold">Links</h2>
      <div className="gird-cols-1 grid gap-x-4 gap-y-2 md:grid-cols-2">
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            <Button size="xl" className="m-2 w-full">
              {link.name}
            </Button>
          </a>
        ))}
      </div>
    </main>
  );
}
