import { getBlogs, getBlogsPlaylist } from "@/sanity/actions";
import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ searchParams }: Props) => {
  const blogs = await getBlogs({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  const blogsPlaylist = await getBlogsPlaylist();

  console.log(blogsPlaylist)
  
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            My Blogs
          </h1>
        </div>
        <SearchForm />
      </section>

      <Filters />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {blogs?.length > 0 ? (
              blogs.map((blog: any) => (
                <BlogCard
                  key={blog.slug}
                  title={blog.title}
                  id={blog._id}
                  image={blog.coverImage}
                  views={blog.views}
                  originalLink={blog.originalLink}
                  author={blog.author}
                  publishedDate={blog.publishedDate}
                  excerpt={blog.excerpt}
                />
              ))
            ) : (
              <p className="body-regular text-white-400">No blogs found</p>
            )}
          </div>
        </section>
      )}

      {blogsPlaylist.map((item: any) => (
        <section
          key={item._id}
          className="flex-center mt-6 w-full flex-col sm:mt-20"
        >
          <h1 className="heading3 self-start text-white-800">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.blogs.map((blog: any) => (
              <BlogCard
                key={blog.slug}
                title={blog.title}
                id={blog._id}
                image={blog.coverImage}
                views={blog.views}
                originalLink={blog.originalLink}
                author={blog.author}
                publishedDate={blog.publishedDate}
                excerpt={blog.excerpt}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;
