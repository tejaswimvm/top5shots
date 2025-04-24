import AutoCrousel from "../../../components/article/AutoCrousel";
import base_url from "@/components/helper/baseurl";
export const dynamic = "force-dynamic";

// ⛳️ Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(`${base_url}/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) return { title: "Blog Not Found | Top5Shots" };

    const blog = await res.json();

    return {
      title: `${blog.title} | Top5Shots`,
      description: blog.metaDescription || blog.body?.slice(0, 160),
      openGraph: {
        title: blog.title,
        description: blog.metaDescription || blog.body?.slice(0, 160),
        url: `https://top5shots.com/blogs/${slug}`,
        type: "article",
        images: [
          {
            url: blog.image?.url || "/images/default-banner.png",
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.metaDescription || blog.body?.slice(0, 160),
        images: [blog.image?.url || "/images/default-banner.png"],
      },
    };
  } catch {
    return {
      title: "Error Loading Blog | Top5Shots",
    };
  }
}

// 📰 Page content
export default async function Article({ params }) {
  const { slug } = await params;
  let blog = null;

  try {
    const res = await fetch(`${base_url}/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Blog not found");

    blog = await res.json();
  } catch (error) {
    return (
      <div className="p-6 text-center text-white">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
        <p className="text-gray-300">{error.message}</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 text-white">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Special Offers */}
        <aside className="flex flex-col gap-6 w-full max-w-xs">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-600 to-yellow-500 shadow-xl rounded-2xl p-5 text-center transition hover:scale-[1.03] duration-300"
            >
              <img
                src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp"
                alt="Special Offer"
                className="aspect-video object-cover rounded-lg shadow-md"
              />
              <h3 className="text-white font-semibold text-base mt-4 tracking-wide">
                Special Offer
              </h3>
              <button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Buy now
              </button>
            </div>
          ))}
        </aside>

        {/* Center Column: Blog Content */}
        <main className="w-full lg:w-[60%] bg-white text-gray-900 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-900">
            {blog.title}
          </h1>

          {blog.image?.url && (
            <img
              src={blog.image.url}
              alt={blog.title}
              className="w-full h-80 object-cover rounded-xl shadow-lg mb-8"
            />
          )}

          <div className="text-sm text-gray-600 mb-6 space-y-2 leading-relaxed">
            <p>
              <strong className="text-gray-700">Posted:</strong>{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <strong className="text-gray-700">Category:</strong>{" "}
              {blog.categories?.length > 0
                ? blog.categories.map((cat, i) => (
                    <span
                      key={i}
                      className="text-blue-600 font-medium mr-2"
                    >
                      {cat.name}
                    </span>
                  ))
                : "Uncategorized"}
            </p>
            <p>
              <strong className="text-gray-700">Tags:</strong>{" "}
              {blog.tags?.length > 0
                ? blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-amber-100 text-amber-700 px-2 py-1 text-xs rounded-full mr-2 shadow-sm"
                    >
                      #{tag.name}
                    </span>
                  ))
                : "No tags"}
            </p>
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />

          <div className="overflow-hidden rounded-2xl mt-10 shadow-lg">
            <AutoCrousel />
          </div>
        </main>

        {/* Right Column: New Arrivals */}
        <aside className="flex flex-col gap-6 w-full max-w-xs">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-800 to-yellow-700 shadow-xl rounded-2xl p-5 text-center transition hover:scale-[1.03] duration-300"
            >
              <img
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt="New Arrival"
                className="aspect-video object-cover rounded-lg shadow-md"
              />
              <h3 className="text-white font-semibold text-base mt-4 tracking-wide">
                New Arrival
              </h3>
              <button className="mt-4 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                Shop now
              </button>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
