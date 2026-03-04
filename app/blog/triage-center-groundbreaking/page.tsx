import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Triage Center Groundbreaking - Madera Rescue Mission Blog",
  description:
    "On December 4, 2023, the Madera Rescue Mission broke ground on six tiny homes for rapid rehousing in partnership with the City of Madera and Madera County.",
};

export default function TriageCenterPost() {
  return (
    <>
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
            On a crisp December morning, the Madera Rescue Mission gathered with city officials, Madera County supervisors, state organization representatives, and community supporters to break ground on six tiny homes that will provide rapid-rehousing for Madera County&apos;s most vulnerable residents.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The Triage Center project - a joint initiative with the City of Madera, Madera County, and state partners - represents a major expansion of the Mission&apos;s capacity to move people from the shelter floor to stable housing with wraparound support.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Each of the six 2-bedroom tiny homes will house individuals or small families in a low-barrier setting, supported by dedicated case management services. The project will add 12 beds to the Mission&apos;s campus, bringing the total capacity to well over 147 nightly guests when completed.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            &quot;This is a step forward for all of Madera County,&quot; said Executive Director Jesse Chavez. &quot;We are grateful for the partnership with the city, the county, and all who made this possible.&quot;
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
