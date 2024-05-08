import Data from "./../../../data/GallaryCard.json";
import BlogMainCard from "./BlogMainCard";

export default function BlogPostLayout() {
  return (
    <main className="bg-responsibility py-20 md:py-28 lg:py-32 padding grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-7">
      {Data.map((item, index) => (
        <BlogMainCard Data={item} />
      ))}
    </main>
  );
}
