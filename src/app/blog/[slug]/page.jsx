import AutoCrousel from "../../../components/article/AutoCrousel";

export const dynamic = "force-dynamic";

// ⛳️ Dynamic metadata
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await fetch(`http://localhost:5000/blogs/${slug}`, {
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
  const { slug } = params;
  let blog = null;

  try {
    const res = await fetch(`http://localhost:5000/blogs/${slug}`, {
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
    <section className="max-w-7xl mx-auto px-4 my-10 text-white">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Special Offers */}
        <aside className="flex flex-col gap-6 w-full max-w-xs">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-amber-600 shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
            >
              <img
                src="https://cdn.logojoy.com/wp-content/uploads/20250107124119/nike-shoe-logo.webp"
                alt="Special Offer"
                className="aspect-video object-cover rounded-lg"
              />
              <h3 className="text-white font-semibold text-base mt-3">
                Special Offer
              </h3>
              <button className="text-white text-sm bg-gray-900 px-3 py-1.5 rounded hover:bg-gray-800 mt-3 transition">
                Buy now
              </button>
            </div>
          ))}
        </aside>

        {/* Center Column: Blog Detail */}
        <main className="w-full lg:w-[60%] bg-white text-gray-800 rounded-2xl p-6 md:p-10 shadow-lg space-y-6">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          {blog.image?.url && (
            <img
              src={blog.image.url}
              alt={blog.title}
              className="w-full h-72 object-cover rounded-xl mb-6"
            />
          )}

          <div className="text-sm text-gray-500 mb-6 space-y-2">
            <p>
              <strong>Posted:</strong>{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <strong>Category:</strong>{" "}
              {blog.categories?.length > 0
                ? blog.categories.map((cat, i) => (
                    <span key={i} className="text-blue-600 mr-2">
                      {cat.name}
                    </span>
                  ))
                : "Uncategorized"}
            </p>
            <p>
              <strong>Tags:</strong>{" "}
              {blog.tags?.length > 0
                ? blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block bg-amber-100 text-amber-700 px-2 py-1 text-xs rounded mr-2"
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

          <div className="overflow-hidden rounded-xl mt-8">
            <AutoCrousel />
          </div>
        </main>

        {/* Right Column: New Arrivals */}
        <aside className="flex flex-col gap-6 w-full max-w-xs">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-amber-800 shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
            >
              <img
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt="New Arrival"
                className="aspect-video object-cover rounded-lg"
              />
              <h3 className="text-white font-semibold text-base mt-3">
                New Arrival
              </h3>
              <button className="text-white text-sm bg-gray-900 px-3 py-1.5 rounded hover:bg-gray-800 mt-3 transition">
                Shop now
              </button>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
