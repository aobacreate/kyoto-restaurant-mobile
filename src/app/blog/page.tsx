
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { blogItems } from "@/lib/blog-data";

export default function Blog() {
  return (
    <>
      <Header title="Blog" />

      {/* blog list */}
      <div className="mt-10 flex flex-col gap-16">
        {blogItems.map((item) => (
          <BlogCard
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10">
        <Footer showMap={false} />
      </div>
    </>
  );
}
