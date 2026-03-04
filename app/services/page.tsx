import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Services - Madera Rescue Mission",
  description:
    "Emergency overnight shelter, discipleship programs, behavioral health housing, and more for Madera County residents experiencing homelessness.",
};

const primaryServices = [
  {
    title: "Emergency Overnight Shelter",
    description:
      "Ninety-four beds open every night for men, women, and children with nowhere to go in Madera County. They arrive at 1305 Clinton Street and receive a hot meal, a shower, and a place to sleep - no appointment, no referral required. Case managers are available for guests who want help connecting to something more permanent.",
    details: [
      "Up to 66 beds for men's overnight guests",
      "Up to 28 beds for women's overnight guests",
      "Food, hot shower, warm bed, and safe place to rest",
      "Walk-in welcome during shelter hours",
      "Case management and referrals to permanent housing resources",
    ],
    image: "/assets/gallery/homepage_20230329.jpg",
  },
  {
    title: "9-12 Month Discipleship Program",
    description:
      "The overnight shelter is the entry point. This program is voluntary - but for the men and women who enroll, it runs nine to twelve months. Bible teaching, church twice a week, assigned responsibilities, and mentorship from pastors and working professionals. Greg and Lynda Belmontez have led it for more than fifteen years. Graduates can stay on campus an additional six months while they stabilize.",
    details: [
      "Faith-based, Bible-centered recovery and life-transformation",
      "Led by Greg and Lynda Belmontez with volunteer pastors and professionals",
      "Weekly church attendance on Wednesdays and Sundays",
      "Assigned responsibilities and structured daily schedule",
      "Optional 6-month post-graduation transitional housing on campus",
    ],
    image: "/assets/gallery/gallery_11_20230926_081504.jpg",
  },
  {
    title: "Behavioral Health Partnership",
    description:
      "Thirty-four beds are reserved for clients referred through Behavioral Health County of Madera - twenty-three for men, eleven for women. Case managers Travis Shreck and June Gabbard work with each person weekly. The goal is not just stable housing. It is connecting people to the ongoing support that keeps them from losing it again.",
    details: [
      "Up to 23 beds for men's behavioral health clients",
      "Up to 11 beds for women's behavioral health clients",
      "Weekly case management for each client",
      "Activities, games, and community engagement",
      "Managed by Travis Shreck and June Gabbard",
    ],
    image: "/assets/gallery/gallery_05_20231005_183711.jpg",
  },
];

const additionalServices = [
  {
    title: "Connection Ministry",
    year: "Est. 2022",
    description:
      "Getting a state ID sounds straightforward. For someone without a permanent address, a phone, or documentation, it is not. The Connection Ministry handles that logistics work - paperwork, legal documents, medical appointments - coordinating across CAPMC, DSS, and Camerena Health so guests do not have to navigate it alone.",
  },
  {
    title: "Working Men's Ministry",
    year: "Est. 2021",
    description:
      "Greg Belmontez and Jose Martinez run trades training on campus - landscaping, carpentry, plumbing, painting, concrete work. Not classroom instruction. Hands-on work, the kind that builds a resume. Women in the program currently volunteer at the Madera Food Bank.",
  },
  {
    title: "Triage Center - Tiny Homes",
    year: "In Progress",
    description:
      "Six two-bedroom tiny homes going up on the Mission's campus. Groundbreaking was December 4, 2023. When complete, they add twelve rapid-rehousing beds with case management - a different model than the overnight shelter, built for people who need a bridge to something permanent.",
  },
  {
    title: "Emergency Housing Units",
    year: "Since 2007",
    description:
      "Four multi-bedroom condo-style homes built on campus in 2007. Designed for families and individuals who need more than a night - longer-term emergency placement while they find stable footing.",
  },
  {
    title: "Doors of Hope Ministry",
    year: "Affiliated",
    description:
      "An affiliated ministry focused on parenting and pregnancy support for families in Madera County. Runs independently at doorsofhope.org, rooted in the same community.",
  },
  {
    title: "Additional Support",
    year: "Ongoing",
    description:
      "Family reunification ministry, Christian counseling, the Helping Hands Ministry for people facing financial hardship, and volunteer and probation fulfillment opportunities for those looking to give back.",
  },
];

const populations = [
  { label: "Homeless Men", icon: "👨" },
  { label: "Homeless Women", icon: "👩" },
  { label: "Displaced Families", icon: "👨‍👩‍👧" },
  { label: "Behavioral Health Clients", icon: "💙" },
  { label: "Individuals in Recovery", icon: "🌱" },
  { label: "Probation Participants", icon: "📋" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs and Services</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            The Mission has served Madera County since 1987. Emergency shelter is the front door. The programs behind it go much deeper.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#2E3192" }}>Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {populations.map((p) => (
              <div key={p.label} className="bg-gray-50 rounded-lg p-4">
                <div className="text-3xl mb-2">{p.icon}</div>
                <p className="text-sm font-medium text-gray-700">{p.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Geographic focus: Madera, CA - serving Madera County exclusively.
          </p>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>Core Programs</h2>
          <div className="space-y-16">
            {primaryServices.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#2E3192" }}>{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                        <span style={{ color: "#2E3192" }} className="mt-0.5 font-bold">+</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>Additional Ministries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#2E3192" }}>{service.title}</h3>
                  <span
                    className="text-xs px-2 py-1 rounded text-white font-semibold"
                    style={{ backgroundColor: "#8B1A1A" }}
                  >
                    {service.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Help CTA */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-blue-200 text-lg mb-8">
            If you or someone you know needs shelter, call or walk in. The Mission is open. No referral needed for overnight emergency shelter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5596758321"
              style={{ backgroundColor: "#8B1A1A" }}
              className="text-white px-8 py-3 rounded font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Call (559) 675-8321
            </a>
            <Link
              href="/visit"
              className="text-white border-2 border-white px-8 py-3 rounded font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
