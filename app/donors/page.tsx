export const metadata = {
  title: "Donors - Madera Rescue Mission",
  description:
    "Thank you to our generous donors and organizational supporters who make the work of Madera Rescue Mission possible.",
};

const donors = [
  "47th Place Flooring",
  "Braga Farms",
  "Citizens Bank",
  "Clearview Outreach",
  "Elite Home and Auto Insurance",
  "Fourth Street Church",
  "General Builders Supply",
  "Grace Community Church",
  "Harvest Community Church",
  "Innovative Rotational Molding",
  "Jay Chapel Funeral Directors",
  "Madera Avenue Bible Church",
  "Madera County Food Bank",
  "Madera County Probation",
  "Madera Police Officers Association",
  "Madera Unified School District",
  "Pacific Ag Insurance",
  "Pistoresi Ambulance",
  "Valley Harvest Church",
  "Valley West Christian Center",
  "Yosemite Lakes Community Church",
];

export default function DonorsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Donors</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            The Mission is deeply grateful to the individuals, businesses, and organizations who make our work possible through their generous support.
          </p>
        </div>
      </section>

      {/* Thank You */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#2E3192" }}>Thank You to Our Organizational Supporters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These organizations have partnered with the Mission through financial contributions that sustain emergency shelter, discipleship programs, and services for Madera County's most vulnerable residents.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {donors.map((donor) => (
              <div
                key={donor}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <div
                  className="w-2 h-8 rounded flex-shrink-0"
                  style={{ backgroundColor: "#8B1A1A" }}
                />
                <span className="text-gray-800 text-sm font-medium">{donor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#f5f5f5" }} className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#2E3192" }}>Join Our Donors</h2>
          <p className="text-gray-600 mb-6">
            Your organization or business can make a lasting difference in the lives of our neighbors in need. Contact us to learn about partnership opportunities.
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
            <a
              href="mailto:jchavez@maderarescue.org"
              style={{ color: "#2E3192", borderColor: "#2E3192" }}
              className="border-2 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
