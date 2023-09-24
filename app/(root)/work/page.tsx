import { getProjects, getProjectsPlaylist } from "@/sanity/actions";
import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const projectLinks = ["all", "fullstack", "frontend", "backend", "blockchain", "ai", "other"];

const Page = async ({ searchParams }: Props) => {
  const projects = await getProjects({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const projectsPlaylist = await getProjectsPlaylist();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            My Projects
          </h1>
        </div>
        <SearchForm />
      </section>

      <Filters filterLinks={projectLinks} />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {projects?.length > 0 ? (
              projects.map((project: any) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  id={project._id}
                  image={project.image}
                  views={project.views}
                  githubLink={project.githubLink}
                />
              ))
            ) : (
              <p className="body-regular text-white-400">No projects found</p>
            )}
          </div>
        </section>
      )}

      {projectsPlaylist.map((item: any) => (
        <section
          key={item._id}
          className="flex-center mt-6 w-full flex-col sm:mt-20"
        >
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.projects.map((project: any) => (
              <ProjectCard
                key={project._id}
                title={project.title}
                id={project._id}
                image={project.image}
                views={project.views}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
