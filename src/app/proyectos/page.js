import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
  title: "Proyectos | Circo Raíz",
  description:
    "Conoce los proyectos y procesos artísticos, culturales y comunitarios de Circo Raíz.",
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsGrid />
    </main>
  );
}