export const metadata = {
  title: "Pray - Madera Rescue Mission",
  description:
    "Join us in prayer for the guests, staff, and ministry of Madera Rescue Mission. Prayer is the foundation of everything we do.",
};

const prayerItems = [
  {
    title: "For Our Guests",
    description:
      "Pray for the men, women, and families staying at the Mission - that they would find not just shelter, but hope, healing, and a path toward lasting change.",
  },
  {
    title: "For the Discipleship Program",
    description:
      "Pray for those enrolled in the 9-12 month recovery program - that they would persevere, grow in faith, and graduate into stable, transformed lives.",
  },
  {
    title: "For Staff and Volunteers",
    description:
      "Pray for Jesse, Greg, Lynda, and the entire team - for wisdom, endurance, and grace as they serve daily on the front lines of homelessness and recovery.",
  },
  {
    title: "For the Triage Center",
    description:
      "Pray for the six tiny homes project - that construction would be completed and that this new rapid-rehousing resource would serve many families well.",
  },
  {
    title: "For Community Partnerships",
    description:
      "Pray for the Mission's relationships with Madera County, Behavioral Health, churches, and civic organizations - that these partnerships would grow stronger.",
  },
  {
    title: "For Financial Provision",
    description:
      "Pray that the Lord would provide for every need - staffing, supplies, facility maintenance, and the resources needed to expand capacity.",
  },
  {
    title: "For the City of Madera",
    description:
      "Pray for Madera County - that homelessness would decrease, that the community would come together around those in need, and that the Mission's work would bear lasting fruit.",
  },
];

export default function PrayPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pray With Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Prayer is the foundation of everything we do at the Madera Rescue Mission. Your intercession makes a difference.
          </p>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed border-l-4 pl-6 text-left" style={{ borderColor: "#2E3192" }}>
            "Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise."
          </blockquote>
          <p className="text-gray-500 mt-3 text-right pr-6">James 5:13</p>
        </div>
      </section>

      {/* Prayer Items */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>
            Current Prayer Requests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prayerItems.map((item, i) => (
              <div key={item.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#2E3192" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Prayer */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Share a Prayer Request</h2>
          <p className="text-blue-200 mb-6">
            Would you like the Mission to pray for you or someone you know? Reach out - we would be honored.
          </p>
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
