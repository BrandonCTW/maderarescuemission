import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Building Futures - The Working Men's Ministry in Action",
  description:
    "Greg Belmontez and Jose Martinez lead the Working Men's Ministry, equipping men with real trade skills and employment readiness.",
};

export default function WorkingMensPost() {
  return (
    <>
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
            What happens when men without a home get handed a set of tools and the chance to build something real? Greg Belmontez and Jose Martinez have spent years answering that question through the Working Men&apos;s Ministry at the Madera Rescue Mission.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Launched in 2021, the Ministry provides hands-on vocational training in landscaping, painting, flooring, concrete, carpentry, light electrical, plumbing, and facility maintenance. Beyond the trades themselves, participants also learn tool safety, basic mathematics, and workplace communication skills.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            The result is men who leave the Mission with not just a place to sleep, but a set of skills that can open employment doors. The Ministry reflects the Mission&apos;s core conviction that holistic transformation includes practical readiness for life and work.
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
