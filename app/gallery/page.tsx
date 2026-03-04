import Image from "next/image";

export const metadata = {
  title: "Gallery - Madera Rescue Mission",
  description:
    "Photos from Madera Rescue Mission - ministry activities, the Triage Center groundbreaking, community events, and daily life at the Mission.",
};

const images = [
  { src: "gallery_01_1000004823.jpg", alt: "Groundbreaking ceremony with group in hard hats - Triage Center" },
  { src: "gallery_02_20231214_074827.jpg", alt: "Ministry activity - December 2023" },
  { src: "gallery_03_20231216_100805.jpg", alt: "Ministry activity - December 2023" },
  { src: "gallery_04_20231204_145727.jpg", alt: "Triage Center construction - December 2023" },
  { src: "gallery_05_20231005_183711.jpg", alt: "Ministry activity - October 2023" },
  { src: "gallery_06_20231005_182440.jpg", alt: "Ministry activity - October 2023" },
  { src: "gallery_07_1000004757.jpg", alt: "Mission activity" },
  { src: "gallery_08_20231005_183701.jpg", alt: "Ministry activity - October 2023" },
  { src: "gallery_09_20231204_150413.jpg", alt: "Triage Center construction - December 2023" },
  { src: "gallery_10_20231204_150937.jpg", alt: "Triage Center construction - December 2023" },
  { src: "gallery_11_20230926_081504.jpg", alt: "Ministry activity - September 2023" },
  { src: "gallery_12_20231216_110611.jpg", alt: "Ministry activity - December 2023" },
  { src: "gallery_13_20231010_101444.jpg", alt: "Ministry activity - October 2023" },
  { src: "gallery_14_20230925_094647.jpg", alt: "Ministry activity - September 2023" },
  { src: "gallery_15_1000004741.jpg", alt: "Mission activity" },
  { src: "gallery_16_20231005_172035.jpg", alt: "Ministry activity - October 2023" },
  { src: "gallery_17_20230927_084816.jpg", alt: "Ministry activity - September 2023" },
  { src: "gallery_18_20231216_115143.jpg", alt: "Ministry activity - December 2023" },
  { src: "gallery_19_20231204_133403.jpg", alt: "Triage Center area - December 2023" },
  { src: "gallery_20_20231216_115850.jpg", alt: "Ministry activity - December 2023" },
  { src: "gallery_21_20230927_084423.jpg", alt: "Ministry activity - September 2023" },
  { src: "gallery_22_20231214_121634.jpg", alt: "Ministry activity - December 2023" },
  { src: "gallery_23_20231216_092948.jpg", alt: "Ministry activity - December 2023" },
  { src: "homepage_20230329.jpg", alt: "Ministry photo - March 2023" },
  { src: "homepage_20230327.jpg", alt: "Ministry photo - March 2023" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From the December 2023 Triage Center groundbreaking to daily work on Clinton Street, this is what 147 beds looks like in practice.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-lg break-inside-avoid">
                <Image
                  src={`/assets/gallery/${img.src}`}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section style={{ backgroundColor: "#f5f5f5" }} className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#2E3192" }}>Current Photos on Facebook</h2>
          <p className="text-gray-600 mb-6">
            This gallery covers 2023 and 2024. This week&apos;s meals, today&apos;s activities, and recent updates are on Facebook.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=100072569882694"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#2E3192" }}
            className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Visit Our Facebook Page
          </a>
        </div>
      </section>
    </>
  );
}
