import Image from "next/image";

export const metadata = {
  title: "Doors of Hope - Madera Rescue Mission",
  description:
    "Doors of Hope is an affiliated ministry of Madera Rescue Mission offering parenting and pregnancy support. Learn more at doorsofhope.org.",
};

export default function DoorsOfHopePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Doors of Hope Ministry</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            An affiliated ministry for parents and expectant mothers in Madera County - rooted in the same community as the Mission.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/gallery/gallery_05_20231005_183711.jpg"
                alt="Community support at Madera Rescue Mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2E3192" }}>
                Parenting and Pregnancy Support
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Doors of Hope is a separate ministry, but it grew from the same conviction that started the Madera Rescue Mission in 1987 - that people in crisis deserve more than a handout and a closed door behind them.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                The ministry focuses on parents and expectant mothers in Madera County. Pregnancy resources, parenting support, and practical help during the months when everything feels uncertain. It operates independently at doorsofhope.org, but the connection to the Mission runs deep - same community, same commitment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                If you are navigating a pregnancy or parenting challenge in Madera County, Doors of Hope is a place to start. If you are looking for ways to support that work, the Mission can connect you.
              </p>
              <a
                href="https://doorsofhope.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#2E3192" }}
                className="text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
              >
                Visit doorsofhope.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Jesse Quote */}
      <section style={{ backgroundColor: "#f5f5f5" }} className="py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-xl italic text-gray-700 leading-relaxed border-l-4 pl-6 text-left" style={{ borderColor: "#2E3192" }}>
            "We here at the Madera Rescue Mission are always looking at serving our guests, disciples, and the community the best way we can."
          </blockquote>
          <p className="text-gray-500 mt-3 text-right pr-6">- Jesse Chavez, Executive Director</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Questions About Doors of Hope?</h2>
          <p className="text-blue-200 mb-6">Contact the Madera Rescue Mission and we will connect you to the right people.</p>
          <a
            href="tel:5596758321"
            style={{ backgroundColor: "#8B1A1A" }}
            className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Call (559) 675-8321
          </a>
        </div>
      </section>
    </>
  );
}
