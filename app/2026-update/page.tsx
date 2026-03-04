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
      "The 9-12 month Discipleship Recovery Program at the Mission doesn't work like a class you attend and leave. Participants live on campus, keep a schedule, attend church twice a week on Wednesdays and Sundays, and take on assigned responsibilities. The structure is intentional - recovery needs routine, and the Mission provides it.",
      "Greg and Lynda Belmontez lead the program with over 15 years each at the Mission. They bring in volunteer pastors and professionals for teaching and mentorship. The curriculum is Bible-centered, but the formation is practical - how to hold a job, keep commitments, and live alongside other people.",
      "Graduates can stay on campus for up to 6 additional months in transitional housing, using that window to secure employment and independent living before moving on.",
    ],
  },
  {
    title: "Behavioral Health Partnership",
    badge: "Active",
    image: "/assets/gallery/gallery_05_20231005_183711.jpg",
    content: [
      "The Behavioral Health Partnership with Madera County fills a specific gap - housing for people whose mental health challenges and homelessness are intertwined. The Mission provides the physical space; the county partnership provides clinical infrastructure.",
      "Up to 23 men and 11 women live in the behavioral health wing. Case managers Travis Shreck and June Gabbard meet with each client weekly. That's not a group session - it's an individual meeting, every week, for every person in the program.",
      "Activities and community engagement are built into the daily structure. Isolation is a real barrier to recovery. The Mission pushes against it.",
    ],
  },
  {
    title: "Connection Ministry",
    badge: "Est. 2022",
    image: "/assets/gallery/gallery_13_20231010_101444.jpg",
    content: [
      "Since 2022, the Connection Ministry has worked alongside every guest to tackle the paperwork and system navigation that emergency shelter doesn't cover - vital documents, legal paperwork, identification, benefits. The things that need handling before any path to stability is possible.",
      "Staff coordinate directly with CAPMC, Behavioral Health, and the Department of Social Services. Mobile medical services from Camerena Health come to the campus on Clinton Street - no transit barrier for guests who need care. HMIS data entry keeps the county's picture of homelessness current.",
      "The Ministry doesn't announce big wins. It handles the gap between a guest's first night and whatever comes next, one document at a time.",
    ],
  },
  {
    title: "Working Men's Ministry",
    badge: "Est. 2021",
    image: "/assets/gallery/gallery_17_20230927_084816.jpg",
    content: [
      "Since 2021, the Working Men's Ministry has given men at the Mission something concrete to build toward. Trade skills - landscaping, painting, flooring, concrete, carpentry, light electrical, plumbing, facility maintenance - alongside tool safety, math, and workplace communication.",
      "Greg Belmontez and Jose Martinez run the training. Both know what it takes to show up to a job site credibly, and that's what the Ministry aims for - men who leave with real skills and real hours in real trades.",
      "Women currently volunteer at the Madera Food Bank, building routine and community alongside their time at the Mission. The goal is expanding vocational training to include women.",
    ],
  },
  {
    title: "Triage Center - Tiny Homes Project",
    badge: "In Progress",
    image: "/assets/gallery/gallery_04_20231204_145727.jpg",
    content: [
      "On December 4, 2023, the Mission broke ground on the Triage Center - six 2-bedroom tiny homes for rapid rehousing with case management support. The project is joint with the City of Madera, Madera County, and state organizations.",
      "When complete, the Triage Center will add 12 beds to the campus. The difference from emergency shelter isn't just the number - it's the purpose. These homes are designed to move people through to permanent housing, not just hold them overnight.",
      "This is the Mission's most ambitious step toward a housing continuum - from the first night at the shelter to a front door of their own.",
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
