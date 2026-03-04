import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nine Months, One Floor at a Time - Inside the Discipleship Recovery Program",
  description:
    "The Madera Rescue Mission's 9-12 month Discipleship Recovery Program is voluntary, structured, and led by Greg and Lynda Belmontez - who have been doing this work for over 15 years.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Nine Months, One Floor at a Time - Inside the Discipleship Recovery Program",
  description:
    "The Madera Rescue Mission's 9-12 month Discipleship Recovery Program is voluntary, structured, and led by Greg and Lynda Belmontez - who have been doing this work for over 15 years.",
  image: "https://maderarescuemission.org/assets/gallery/gallery_14_20230925_094647.jpg",
  datePublished: "2026-03-04",
  dateModified: "2026-03-04",
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
  url: "https://maderarescuemission.org/blog/discipleship-program-inside-look",
  mainEntityOfPage: "https://maderarescuemission.org/blog/discipleship-program-inside-look",
};

export default function DiscipleshipPost() {
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
            Nine Months, One Floor at a Time - Inside the Discipleship Recovery Program
          </h1>
          <p className="text-blue-300 text-sm">March 4, 2026</p>
        </div>
      </section>

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md mb-10">
            <Image
              src="/assets/gallery/gallery_14_20230925_094647.jpg"
              alt="Madera Rescue Mission discipleship program"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Nobody enrolls in a 9-to-12-month residential program on their first night. The first night, you need a bed. Enrollment in the Discipleship Recovery Program happens later - voluntarily, after the emergency has passed and the question becomes what comes next.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The program runs on a structured daily schedule. Bible teaching. Church attendance twice a week, Wednesday and Sunday. Assigned responsibilities around the campus. Regular mentorship from pastors and working professionals who drive in from Madera County churches. It isn&apos;t a clinic or a classroom. It&apos;s closer to a household with expectations.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Greg and Lynda Belmontez have led it for more than fifteen years. That kind of continuity is rare in social services, and it matters in practice. Participants aren&apos;t handed off between staff rotations. Relationships build over time, which is roughly how people change.
          </p>

          <blockquote className="border-l-4 pl-6 italic text-gray-700 my-8" style={{ borderColor: "#2E3192" }}>
            &quot;It was at my deepest point in life, in a homeless shelter, that the Lord began to minister to me... this was a highly productive time in my life.&quot;
            <cite className="block text-gray-500 text-sm mt-2 not-italic">- Anonymous Resident</cite>
          </blockquote>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The Mission runs 15 discipleship beds for men and 4 for women - small by design. After completing the program, graduates can stay on campus for up to six additional months in transitional housing while they find work and stable footing. That bridge period matters. Moving from structure back to nothing is where recoveries tend to break.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The capacity is limited. The program takes people who are ready. If you know someone in Madera County who is - or if you are - the number is (559) 675-8321.
          </p>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/gallery/gallery_17_20230927_084816.jpg" alt="Ministry activity" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/gallery/gallery_21_20230927_084423.jpg" alt="Ministry activity" fill className="object-cover" />
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
