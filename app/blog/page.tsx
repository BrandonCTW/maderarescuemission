import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog - Madera Rescue Mission",
  description:
    "Stories, updates, and reflections from the Madera Rescue Mission - faith in action in Madera County since 1987.",
};

const posts = [
  {
    slug: "triage-center-groundbreaking",
    title: "Triage Center Groundbreaking - A New Chapter for Madera's Homeless Community",
    date: "December 4, 2023",
    excerpt:
      "On a crisp December morning, the Madera Rescue Mission gathered with city officials, county leaders, and community supporters to break ground on six tiny homes that will provide rapid-rehousing for Madera County's most vulnerable residents.",
    image: "/assets/gallery/gallery_01_1000004823.jpg",
    category: "Ministry News",
  },
  {
    slug: "lighthouse-of-hope",
    title: "A Lighthouse of Hope - 38 Years of Serving Madera County",
    date: "January 5, 2025",
    excerpt:
      "On January 5, 1987, Jesse Chavez opened a small soup kitchen with a big vision: to serve the least, the last, and the lost with radical hospitality. Thirty-eight years later, the Mission continues that calling at a scale none could have imagined.",
    image: "/assets/gallery/blog_pexels_lighthouse.jpg",
    category: "Mission Story",
  },
  {
    slug: "working-mens-ministry-spotlight",
    title: "Building Futures - The Working Men's Ministry in Action",
    date: "October 5, 2023",
    excerpt:
      "What happens when men without a home get handed a set of tools and the chance to build something? Greg Belmontez and Jose Martinez have spent years answering that question through the Working Men's Ministry.",
    image: "/assets/gallery/gallery_06_20231005_182440.jpg",
    category: "Program Spotlight",
  },
  {
    slug: "connection-ministry-one-year",
    title: "One Year of Connection Ministry - Bridging Guests to Resources",
    date: "September 26, 2023",
    excerpt:
      "When the Connection Ministry launched in 2022, its mission was simple: help guests navigate the complicated world of documents, agencies, and resources. One year in, the impact is clear.",
    image: "/assets/gallery/gallery_11_20230926_081504.jpg",
    category: "Program Spotlight",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog and Stories</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Stories of transformation, ministry updates, and reflections from the Madera Rescue Mission.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-xs px-2 py-1 rounded text-white font-semibold"
                      style={{ backgroundColor: "#8B1A1A" }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-xs mb-2">{post.date}</p>
                  <h2 className="font-bold text-lg mb-3 leading-snug" style={{ color: "#2E3192" }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ color: "#2E3192" }}
                    className="text-sm font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook CTA */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#2E3192" }}>More Stories on Facebook</h2>
          <p className="text-gray-600 mb-6">Follow the Mission on Facebook for regular updates, photos, and prayer requests.</p>
          <a
            href="https://www.facebook.com/profile.php?id=100072569882694"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#2E3192" }}
            className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Follow on Facebook
          </a>
        </div>
      </section>
    </>
  );
}
