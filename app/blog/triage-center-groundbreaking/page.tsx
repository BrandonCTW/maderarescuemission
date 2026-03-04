import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Triage Center Groundbreaking - Madera Rescue Mission Blog",
  description:
    "On December 4, 2023, the Madera Rescue Mission broke ground on six tiny homes for rapid rehousing in partnership with the City of Madera and Madera County.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Triage Center Groundbreaking - A New Chapter for Madera's Homeless Community",
  description:
    "On December 4, 2023, the Madera Rescue Mission broke ground on six tiny homes for rapid rehousing in partnership with the City of Madera and Madera County.",
  image: "https://maderarescuemission.org/assets/gallery/gallery_01_1000004823.jpg",
  datePublished: "2023-12-04",
  dateModified: "2023-12-04",
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
  url: "https://maderarescuemission.org/blog/triage-center-groundbreaking",
  mainEntityOfPage: "https://maderarescuemission.org/blog/triage-center-groundbreaking",
};

export default function TriageCenterPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs bg-red-800 text-white px-2 py-1 rounded mb-4 inline-block">Ministry News</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
            Triage Center Groundbreaking - A New Chapter for Madera&apos;s Homeless Community
          </h1>
          <p className="text-blue-300 text-sm">December 4, 2023</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md mb-10">
            <Image
              src="/assets/gallery/gallery_01_1000004823.jpg"
              alt="Triage Center Groundbreaking Ceremony"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Six tiny homes. That&apos;s what the Madera Rescue Mission broke ground on December 4, 2023, and in Madera County - where emergency shelter capacity has long outpaced available pathways to permanent housing - six homes matters.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The ceremony on Clinton Street brought together city officials, county supervisors, state partners, and community supporters. All of them gathered around a patch of ground that will soon hold the Mission&apos;s Triage Center - a rapid-rehousing campus built to move people out of crisis, not just hold them through the night.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The project is a joint effort with the City of Madera, Madera County, and state organizations. Each of the six 2-bedroom tiny homes will house individuals or small families in a low-barrier setting with dedicated case management. When complete, the Triage Center adds 12 beds to the Mission&apos;s campus - and a fundamentally different kind of bed than emergency shelter.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            &quot;This is a step forward for all of Madera County,&quot; said Executive Director Jesse Chavez. &quot;We are grateful for the partnership with the city, the county, and all who made this possible.&quot;
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The Mission has operated emergency overnight shelter since 1990 and a discipleship recovery program for years. Rapid rehousing with wraparound case management is a different kind of work - moving people out rather than holding space. The Triage Center is built for exactly that.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/gallery/gallery_04_20231204_145727.jpg" alt="Triage Center construction" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/gallery/gallery_09_20231204_150413.jpg" alt="Triage Center construction" fill className="object-cover" />
            </div>
          </div>

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
