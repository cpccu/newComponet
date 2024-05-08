import BlogMainCard from "./BlogMainCard";

export default function BlogPostLayout() {
  return (
    <main className="py-20 md:py-28 lg:py-32 padding grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-11 lg:gap-12">
      <BlogMainCard />
      <BlogMainCard />
      <BlogMainCard />
      <BlogMainCard />
    </main>
  );
}
