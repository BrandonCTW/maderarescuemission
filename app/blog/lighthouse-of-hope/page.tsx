import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "A Lighthouse of Hope - 38 Years of Serving Madera County",
  description:
    "On January 5, 1987, Jesse Chavez opened a small soup kitchen with a big vision. Thirty-eight years later, the Mission is stronger than ever.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "A Lighthouse of Hope - 38 Years of Serving Madera County",
  description:
    "On January 5, 1987, Jesse Chavez opened a small soup kitchen with a big vision. Thirty-eight years later, the Mission is stronger than ever.",
  image: "https://maderarescuemission.org/assets/gallery/blog_pexels_lighthouse.jpg",
  datePublished: "2025-01-05",
  dateModified: "2025-01-05",
  author: {
    "@type": "Organization",
    name: "Madera Rescue Mission",
    url: "https://maderarescuemission.org",
  },
  publisher: {
    "@type": "Organization",
    name: "Madera Rescue Mission",
    logo: {
      "@type": "ImageObject",
      url: "https://maderarescuemission.org/assets/logos/MRM-logo.png",
    },
  },
  url: "https://maderarescuemission.org/blog/lighthouse-of-hope",
  mainEntityOfPage: "https://maderarescuemission.org/blog/lighthouse-of-hope",
};

export default function LighthousePost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs bg-red-800 text-white px-2 py-1 rounded mb-4 inline-block">Mission Story</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
            A Lighthouse of Hope - 38 Years of Serving Madera County
          </h1>
          <p className="text-blue-300 text-sm">January 5, 2025</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md mb-10">
            <Image
              src="/assets/gallery/blog_pexels_lighthouse.jpg"
              alt="Lighthouse - A beacon of hope"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            January 5, 1987. Jesse Chavez opened a soup kitchen in Madera with enough conviction to feed a few dozen people and enough stubbornness to believe it wouldn&apos;t stop there.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            It didn&apos;t. By 1990 the Mission had grown into a full emergency shelter. That first year it served 19,500 meals and provided 12,775 bed stays - numbers that were remarkable for a community-run operation that had started with donated groceries and borrowed tables.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Thirty-eight years later the Mission operates a 147-bed campus at 1305 Clinton Street. The count includes 66 men&apos;s overnight beds, 28 women&apos;s beds, behavioral health housing in partnership with Madera County, a 9-12 month discipleship recovery program, vocational training through the Working Men&apos;s Ministry, and a tiny homes rapid-rehousing project underway since December 2023.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The lighthouse has always been the Mission&apos;s symbol. What makes it apt isn&apos;t just that lighthouses guide ships home - it&apos;s that they operate in the dark, without applause, night after night. The Mission has done that work for 38 years.
          </p>

          <blockquote className="border-l-4 pl-6 italic text-gray-700 my-8" style={{ borderColor: "#2E3192" }}>
            &quot;It was at my deepest point in life, in a homeless shelter, that the Lord began to minister to me... this was a highly productive time in my life.&quot;
            <cite className="block text-gray-500 text-sm mt-2 not-italic">- Anonymous Resident</cite>
          </blockquote>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link href="/blog" style={{ color: "#2E3192" }} className="text-sm font-semibold hover:underline">
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
