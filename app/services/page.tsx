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
      "Every night, the Madera Rescue Mission opens its doors to men, women, and children experiencing homelessness. Guests receive a hot meal, a warm shower, and a safe bed - no questions asked.",
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
      "For guests ready to pursue lasting change, the Mission offers a voluntary 9-12 month residential Discipleship Recovery Program for both men and women. Rooted in biblical principles, this program combines spiritual formation with practical life skills.",
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
      "In partnership with Behavioral Health County of Madera, the Mission provides specialized housing and services for individuals with mental health challenges who are also experiencing homelessness.",
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
      "Assists all guests with documents, legal paperwork, and personal needs. Coordinates with CAPMC, Behavioral Health, Department of Social Services, and mobile medical providers including Camerena Health.",
  },
  {
    title: "Working Men's Ministry",
    year: "Est. 2021",
    description:
      "Trade skills training led by Greg Belmontez and Jose Martinez. Participants gain hands-on experience in landscaping, painting, flooring, concrete, carpentry, light electrical, plumbing, and maintenance.",
  },
  {
    title: "Triage Center - Tiny Homes",
    year: "In Progress",
    description:
      "Six 2-bedroom tiny homes providing 12 additional rapid-rehousing beds with case management support. Groundbreaking was held December 4, 2023 in partnership with the City of Madera, Madera County, and state organizations.",
  },
  {
    title: "Emergency Housing Units",
    year: "Since 2007",
    description:
      "Four multi-bedroom condo-style homes on campus providing longer-term emergency housing for families and individuals in transition.",
  },
  {
    title: "Doors of Hope Ministry",
    year: "Affiliated",
    description:
      "A parenting and pregnancy support ministry affiliated with the Mission. Learn more at doorsofhope.org.",
  },
  {
    title: "Additional Support",
    year: "Ongoing",
    description:
      "Family reunification ministry, Christian counseling, Helping Hands Ministry for those challenged with finances or work, and volunteer and probation fulfillment opportunities.",
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
            Emergency shelter is just the beginning. The Madera Rescue Mission walks alongside every guest toward lasting transformation.
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
            If you or someone you know is in need of shelter or services, contact us today. Walk-ins are welcome.
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
