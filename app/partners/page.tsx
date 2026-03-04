export const metadata = {
  title: "Partners - Madera Rescue Mission",
  description:
    "The Madera Rescue Mission is grateful for its community partners - local agencies, churches, businesses, and civic organizations committed to serving Madera County.",
};

const communityPartners = [
  { name: "Community Action Partnership of Madera County (CAPMC)", contact: "Mattie Mendez" },
  { name: "Department of Social Services", contact: "Deborah Martinez" },
  { name: "Madera Behavioral Health", contact: "Connie Moreno-Peraza" },
  { name: "Probation Department of Madera", contact: "Chris Childers" },
  { name: "Madera Community Hospital", contact: "" },
  { name: "Madera County Chaplains", contact: "" },
  { name: "Madera County Supervisors", contact: "Rob Poythress" },
  { name: "Madera City Council", contact: "" },
  { name: "Planning Department", contact: "" },
  { name: "Madera Police Department", contact: "" },
  { name: "Madera Rotary Noon Club", contact: "" },
  { name: "Madera Food Bank", contact: "" },
  { name: "Kaiser Permanente", contact: "" },
  { name: "Cal Viva Health", contact: "" },
  { name: "Camerena Health", contact: "" },
  { name: "Madera Avenue Bible Church", contact: "Pastor Mike Unger" },
  { name: "Fourth Street Church", contact: "Pastor David Hawes" },
  { name: "Madera Ministerial Association", contact: "" },
  { name: "Grocery Outlet of Madera", contact: "" },
  { name: "Yosemite Lakes Community Church", contact: "" },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Partners</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            The Mission could not do what it does without the support of these dedicated community organizations, churches, and civic leaders.
          </p>
        </div>
      </section>

      {/* Partner List */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#2E3192" }}>Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg bg-gray-50"
              >
                <div
                  className="w-2 h-10 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#2E3192" }}
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{partner.name}</p>
                  {partner.contact && (
                    <p className="text-gray-500 text-xs mt-0.5">{partner.contact}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Partner With the Mission</h2>
          <p className="text-blue-200 mb-6">
            If your organization, church, or business would like to partner with the Madera Rescue Mission, we would love to connect.
          </p>
          <a
            href="mailto:jchavez@maderarescue.org"
            style={{ backgroundColor: "#8B1A1A" }}
            className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
