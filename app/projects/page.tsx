import Button from "@/components/button";

export default function Projects() {
  const projects = [
    {
      name: "kirsten.pl",
      description: "This website! Built using Next.js and Tailwind CSS.",
      codeUrl: "https://github.com/tslnc04/kirsten.pl",
    },
  ];

  return (
    <main className="p-12 pt-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-xl">
        These are some of my side projects, though my curiosity often exceeds my desire to finish a
        project.
      </p>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mt-4">
        {projects.map((project) => (
          <Button key={project.name} size="xl">
            <a href={project.codeUrl}>{project.name}</a>
          </Button>
        ))}
      </div>
    </main>
  );
}
