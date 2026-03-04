import Image from "next/image";

export const metadata = {
  title: "Our Story - Madera Rescue Mission",
  description:
    "Learn how the Madera Rescue Mission grew from a humble soup kitchen in 1987 to a 147-bed campus serving Madera County's most vulnerable residents.",
};

const milestones = [
  {
    year: "1987",
    title: "A Humble Beginning",
    description:
      "Jesse Chavez founded what would become the Madera Rescue Mission, starting with a simple soup kitchen on January 5, 1987. A community was born out of a call to serve.",
  },
  {
    year: "1990",
    title: "Full Shelter Opens",
    description:
      "The Mission was formally dedicated as a full emergency shelter in July 1990. That inaugural year, the Mission served 19,500 meals and recorded 12,775 bed stays.",
  },
  {
    year: "1992",
    title: "501(c)(3) Nonprofit Status",
    description:
      "The Madera Rescue Mission was officially incorporated as a 501(c)(3) nonprofit organization in December 1992, formalizing its commitment to the community.",
  },
  {
    year: "2007",
    title: "Emergency Housing Units",
    description:
      "Four multi-bedroom condo-style homes were built on campus, expanding the Mission's capacity to serve displaced families and individuals in longer-term need.",
  },
  {
    year: "2021",
    title: "Working Men's Ministry",
    description:
      "The Working Men's Ministry launched, offering hands-on vocational training in trades like landscaping, carpentry, plumbing, and painting - equipping men for employment.",
  },
  {
    year: "2022",
    title: "Connection Ministry",
    description:
      "The Connection Ministry was established to help guests navigate documents, legal paperwork, and access to community resources like Camerena Health and the Department of Social Services.",
  },
  {
    year: "2023",
    title: "Triage Center Groundbreaking",
    description:
      "On December 4, 2023, the Mission broke ground on the Triage Center - six tiny homes providing rapid rehousing with case management, in partnership with the City of Madera and Madera County.",
  },
  {
    year: "Today",
    title: "38+ Years of Service",
    description:
      "The Madera Rescue Mission now operates a 147-bed campus with 15 staff members, serving homeless men, women, families, and behavioral health clients - the largest capacity homeless service provider in Madera.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            From a small soup kitchen to a 147-bed campus - 38 years of faithful service to Madera County.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2E3192" }}>
                Christian Rescue Mission - Faith-Based Homeless Services Since 1987
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Madera Rescue Mission was born from a conviction that every person - regardless of circumstance - deserves dignity, hospitality, and hope. Jesse Chavez launched a simple soup kitchen on January 5, 1987 in Madera, CA with a commitment to serving the least, the last, and the lost.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                By July 1990, the Mission had grown into a full emergency shelter, formally dedicated to providing beds, meals, showers, and spiritual care. In its inaugural year as a shelter, the Mission served 19,500 meals and provided 12,775 bed stays.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, the Mission operates a 147-bed campus at 1305 Clinton Street, Madera, CA with 15 employees, robust community partnerships, and programs ranging from emergency shelter to long-term discipleship recovery to vocational job training.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/assets/gallery/homepage_20230329.jpg"
                alt="Madera Rescue Mission community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>
            Our Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row gap-4 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 md:text-right pl-16 md:pl-0 md:pr-8">
                    {i % 2 === 0 && (
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                        <span
                          className="text-sm font-bold inline-block mb-1 px-2 py-0.5 rounded text-white"
                          style={{ backgroundColor: "#2E3192" }}
                        >
                          {milestone.year}
                        </span>
                        <h3 className="font-bold text-base mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div
                    className="absolute left-5 md:left-1/2 top-4 w-6 h-6 rounded-full border-4 border-white transform md:-translate-x-3 z-10"
                    style={{ backgroundColor: "#2E3192" }}
                  />
                  <div className="flex-1 pl-16 md:pl-8">
                    {i % 2 === 1 && (
                      <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                        <span
                          className="text-sm font-bold inline-block mb-1 px-2 py-0.5 rounded text-white"
                          style={{ backgroundColor: "#2E3192" }}
                        >
                          {milestone.year}
                        </span>
                        <h3 className="font-bold text-base mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#2E3192" }}>
            Financial Transparency
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
            As a 501(c)(3) nonprofit (EIN: 77-0144133), the Madera Rescue Mission is committed to financial accountability and transparency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold mb-1" style={{ color: "#2E3192" }}>$1.41M</div>
              <div className="text-gray-600 text-sm">Annual Revenue (2024)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold mb-1" style={{ color: "#2E3192" }}>+16.3%</div>
              <div className="text-gray-600 text-sm">Revenue Growth (2023-2024)</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl font-bold mb-1" style={{ color: "#2E3192" }}>$2.61M</div>
              <div className="text-gray-600 text-sm">Total Assets (2024)</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.charitynavigator.org/ein/770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2E3192" }}
              className="text-sm underline hover:opacity-80"
            >
              View on Charity Navigator
            </a>
            {" | "}
            <a
              href="https://projects.propublica.org/nonprofits/organizations/770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2E3192" }}
              className="text-sm underline hover:opacity-80"
            >
              ProPublica Nonprofit Explorer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
