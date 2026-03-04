import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "One Year of Connection Ministry - Madera Rescue Mission Blog",
  description:
    "The Connection Ministry launched in 2022 to help guests navigate documents, agencies, and resources. One year in, the impact is clear.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "One Year of Connection Ministry - Bridging Guests to Resources",
  description:
    "The Connection Ministry launched in 2022 to help guests navigate documents, agencies, and resources. One year in, the impact is clear.",
  image: "https://maderarescuemission.org/assets/gallery/gallery_11_20230926_081504.jpg",
  datePublished: "2023-09-26",
  dateModified: "2023-09-26",
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
  url: "https://maderarescuemission.org/blog/connection-ministry-one-year",
  mainEntityOfPage: "https://maderarescuemission.org/blog/connection-ministry-one-year",
};

export default function ConnectionMinistryPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            Most people leaving a shelter don&apos;t know how to get a state ID if they&apos;ve never had a permanent address. They may have a court date, a lapsed benefit, or a medical appointment that nobody has helped them schedule. That&apos;s the gap the Connection Ministry was built to close.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Launched in 2022, the Ministry works alongside every guest at the Madera Rescue Mission to tackle the paperwork, agencies, and personal needs that don&apos;t get handled by a warm bed and a hot meal. Staff coordinate directly with CAPMC, Behavioral Health, and the Department of Social Services.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            One of the Ministry&apos;s most concrete wins has been the mobile medical services partnership with Camerena Health, which brings care directly to the Mission&apos;s campus on Clinton Street. No transit required. No appointment navigation for guests who don&apos;t have a phone. The clinic comes to them.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The Ministry also manages HMIS data entry - contributing to county-wide tracking of guests served and resources used. Unglamorous work, but it&apos;s what connects the Mission&apos;s individual cases to the larger picture of homelessness response across Madera County.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            For many guests, the Connection Ministry is the first time someone has helped them navigate a system rather than just pointing them toward it. That difference, one case at a time, is what the ministry has built over three years.
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
