import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Building Futures - The Working Men's Ministry in Action",
  description:
    "Greg Belmontez and Jose Martinez lead the Working Men's Ministry, equipping men with real trade skills and employment readiness.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Building Futures - The Working Men's Ministry in Action",
  description:
    "Greg Belmontez and Jose Martinez lead the Working Men's Ministry, equipping men with real trade skills and employment readiness.",
  image: "https://maderarescuemission.org/assets/gallery/gallery_06_20231005_182440.jpg",
  datePublished: "2023-10-05",
  dateModified: "2023-10-05",
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
  url: "https://maderarescuemission.org/blog/working-mens-ministry-spotlight",
  mainEntityOfPage: "https://maderarescuemission.org/blog/working-mens-ministry-spotlight",
};

export default function WorkingMensPost() {
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
            Building Futures - The Working Men&apos;s Ministry in Action
          </h1>
          <p className="text-blue-300 text-sm">October 5, 2023</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md mb-10">
            <Image
              src="/assets/gallery/gallery_06_20231005_182440.jpg"
              alt="Working Men's Ministry"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Most people who arrive at the Madera Rescue Mission don&apos;t lack the willingness to work. They lack credentials, contacts, and in many cases the skills that employers can verify. The Working Men&apos;s Ministry is built around that gap.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Launched in 2021 and led by Greg Belmontez and Jose Martinez, the Ministry runs hands-on vocational training in eight trades - landscaping, painting, flooring, concrete, carpentry, light electrical, plumbing, and facility maintenance. Participants also learn tool safety, basic math, and how to communicate in a professional setting. Men leave with real hours in real trades.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Belmontez has been at the Mission for over 15 years. He knows the difference between a man who has completed a program and a man who can show up to a job site on day one and be useful. The Ministry trains for the latter.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The women&apos;s side has a different track for now - volunteers at the Madera Food Bank, building routine and community alongside their time at the Mission. The goal is expanding vocational training to include women.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            A man with a paycheck, a schedule, and a trade is a man who doesn&apos;t need the shelter floor. That&apos;s the point.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/gallery/gallery_05_20231005_183711.jpg" alt="Ministry activity" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/gallery/gallery_08_20231005_183701.jpg" alt="Ministry activity" fill className="object-cover" />
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
