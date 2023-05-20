import Button from "@/components/button";

export default function Home() {
  const links = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kirsten-laskoski-363241112/" },
    { name: "GitHub", href: "https://github.com/tslnc04" },
    { name: "GitLab", href: "https://gitlab.com/tslnc04" },
    { name: "Email", href: "mailto:kirsten@lasko.ski" },
    { name: "KLR Holdings LLC", href: "https://lasko.ski" },
  ];

  return (
    <>
      <main className="p-12 pt-6 max-w-5xl mx-auto">
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
          Though I&apos;m studying math, I do software engineering, with compiler design and machine
          learning being favorite subjects of mine.
        </p>
        <p className="mt-4 text-xl">
          I freelance for{" "}
          <a href="https://www.switchframe.co/" className="underline">
            SwitchFrame
          </a>{" "}
          using Rust (plus some React) and work as a{" "}
          <a href="https://its.unc.edu/resource/resnet/" className="underline">
            ResNet Community Coordinator
          </a>{" "}
          at UNC.
        </p>
        <h2 className="mt-6 mb-2 text-3xl font-bold">Links</h2>
        <div className="grid gird-cols-1 xl:grid-cols-2 gap-y-2 gap-x-4">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              <Button size="xl" className="w-full m-2">
                {link.name}
              </Button>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
