import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "One Year of Connection Ministry - Madera Rescue Mission Blog",
  description:
    "The Connection Ministry launched in 2022 to help guests navigate documents, agencies, and resources. One year in, the impact is clear.",
};

export default function ConnectionMinistryPost() {
  return (
    <>
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs bg-red-800 text-white px-2 py-1 rounded mb-4 inline-block">Program Spotlight</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-2">
            One Year of Connection Ministry - Bridging Guests to Resources
          </h1>
          <p className="text-blue-300 text-sm">September 26, 2023</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md mb-10">
            <Image
              src="/assets/gallery/gallery_11_20230926_081504.jpg"
              alt="Connection Ministry"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            When the Connection Ministry launched in 2022, its mission was straightforward but vital: help guests navigate the complicated world of documents, agencies, and resources. One year in, the impact is clear.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Connection Ministry staff work alongside every guest to help them obtain vital documents, work through legal paperwork, and access personal needs. The ministry coordinates directly with the Community Action Partnership of Madera County (CAPMC), Behavioral Health, and the Department of Social Services.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            One of the Ministry&apos;s most impactful partnerships has been with Camerena Health, coordinating mobile medical services that come directly to the Mission&apos;s campus. The Ministry also handles HMIS data entry - contributing to county-wide tracking of guests served and resources used.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            For many guests, the Connection Ministry is the bridge between a first night at the shelter and a path toward stability. That bridge is what makes the difference.
          </p>

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
