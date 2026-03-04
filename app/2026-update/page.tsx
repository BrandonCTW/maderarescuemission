import Image from "next/image";

export const metadata = {
  title: "2026 Update - Madera Rescue Mission",
  description:
    "Read the latest updates from Madera Rescue Mission - the Discipleship Program, Behavioral Health Partnership, Connection Ministry, Working Men's Ministry, and the Triage Center tiny homes project.",
};

const updates = [
  {
    title: "Discipleship Recovery Program",
    badge: "Active",
    image: "/assets/gallery/gallery_14_20230925_094647.jpg",
    content: [
      "The Mission's 9-12 month Discipleship Recovery Program continues to transform lives for both men and women.",
      "Led by Greg and Lynda Belmontez - both with over 15 years at the Mission - the program combines biblical teaching, weekly church attendance (Wednesdays and Sundays), assigned responsibilities, structured free time, and mentorship from pastors and professionals.",
      "Graduates have the option to remain on campus in transitional housing for up to 6 additional months while securing stable employment and independent living arrangements.",
    ],
  },
  {
    title: "Behavioral Health Partnership",
    badge: "Active",
    image: "/assets/gallery/gallery_05_20231005_183711.jpg",
    content: [
      "In partnership with Behavioral Health County of Madera, the Mission provides specialized residential housing for clients experiencing both mental health challenges and homelessness.",
      "The program houses up to 23 men and 11 women in the behavioral health wing. Case managers Travis Shreck and June Gabbard provide weekly individual case management for every client.",
      "Activities, games, and community engagement opportunities are woven into daily life, helping clients build connection and routine alongside their treatment.",
    ],
  },
  {
    title: "Connection Ministry",
    badge: "Est. 2022",
    image: "/assets/gallery/gallery_13_20231010_101444.jpg",
    content: [
      "Launched in 2022, the Connection Ministry has become an essential bridge between Mission guests and the broader network of county resources.",
      "Staff assist guests with vital documents, legal paperwork, identification, and personal needs. The ministry coordinates directly with CAPMC, Behavioral Health, and the Department of Social Services.",
      "Connection Ministry staff also coordinate mobile medical services through Camerena Health and DSS, and manage HMIS data entry for county-wide tracking of guests served.",
    ],
  },
  {
    title: "Working Men's Ministry",
    badge: "Est. 2021",
    image: "/assets/gallery/gallery_17_20230927_084816.jpg",
    content: [
      "Since 2021, the Working Men's Ministry has equipped men at the Mission with real trade skills and employment readiness.",
      "Led by Greg Belmontez and Jose Martinez, participants receive hands-on training in landscaping, painting, flooring, concrete work, carpentry, light electrical, plumbing, and facility maintenance.",
      "The training includes tool use, safety procedures, basic mathematics, and workplace communication - building a foundation for sustainable employment. Women at the Mission currently volunteer at the Madera Food Bank.",
    ],
  },
  {
    title: "Triage Center - Tiny Homes Project",
    badge: "In Progress",
    image: "/assets/gallery/gallery_04_20231204_145727.jpg",
    content: [
      "On December 4, 2023, the Mission broke ground on its most ambitious housing initiative - the Triage Center, a rapid-rehousing campus consisting of six 2-bedroom tiny homes.",
      "The project is a joint effort with the City of Madera, Madera County, and state organizations. When complete, the Triage Center will provide 12 additional beds for individuals and families needing low-barrier housing with case management support.",
      "This initiative represents the Mission's expanding vision - from emergency shelter to permanent supportive housing pathways for Madera County's most vulnerable residents.",
    ],
  },
];

export default function Update2026Page() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">2026 Mission Update</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            A look at the programs, partnerships, and projects driving the Mission forward in 2026.
          </p>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-10" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold" style={{ color: "#2E3192" }}>147</div>
              <div className="text-gray-500 text-sm">Beds Available Nightly</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold" style={{ color: "#2E3192" }}>15</div>
              <div className="text-gray-500 text-sm">Staff Members</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold" style={{ color: "#2E3192" }}>$1.41M</div>
              <div className="text-gray-500 text-sm">Annual Revenue</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold" style={{ color: "#2E3192" }}>+16.3%</div>
              <div className="text-gray-500 text-sm">Revenue Growth (2024)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {updates.map((update, i) => (
              <div key={update.title} className={`flex flex-col lg:flex-row gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="relative h-60 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={update.image}
                      alt={update.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-2xl font-bold" style={{ color: "#2E3192" }}>{update.title}</h2>
                    <span
                      className="text-xs px-2 py-0.5 rounded text-white font-semibold flex-shrink-0"
                      style={{ backgroundColor: "#8B1A1A" }}
                    >
                      {update.badge}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {update.content.map((para, j) => (
                      <p key={j} className="text-gray-600 text-sm leading-relaxed">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Support This Work</h2>
          <p className="text-blue-200 mb-6">
            Every one of these programs depends on the generosity of our donors and the prayers of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#8B1A1A" }}
              className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
