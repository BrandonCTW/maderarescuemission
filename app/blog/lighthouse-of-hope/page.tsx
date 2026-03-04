import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "A Lighthouse of Hope - 38 Years of Serving Madera County",
  description:
    "On January 5, 1987, Jesse Chavez opened a small soup kitchen with a big vision. Thirty-eight years later, the Mission is stronger than ever.",
};

export default function LighthousePost() {
  return (
    <>
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
            On January 5, 1987, Jesse Chavez opened a small soup kitchen with a big vision: to serve the least, the last, and the lost with radical hospitality. Thirty-eight years later, the Mission continues that calling at a scale none could have imagined at the beginning.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            What started as a humble meal service has grown into a 147-bed campus at 1305 Clinton Street, Madera - offering emergency overnight shelter, 9-12 month discipleship programs, behavioral health housing in partnership with Madera County, vocational training, and comprehensive case management.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            In its inaugural year as a full shelter (1990), the Mission served 19,500 meals and provided 12,775 bed stays. Today, the Mission serves up to 147 guests every night with a team of 15 staff members and a growing network of community partners.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The lighthouse has always been the Mission&apos;s symbol - a beacon of hope in the dark for those who have lost their way. That imagery is as true today as it was in 1987.
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
