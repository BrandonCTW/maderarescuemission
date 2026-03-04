export const metadata = {
  title: "Pray - Madera Rescue Mission",
  description:
    "Join us in prayer for the guests, staff, and ministry of Madera Rescue Mission. Prayer is the foundation of everything we do.",
};

const prayerItems = [
  {
    title: "For Our Guests",
    description:
      "Pray for the men and women sleeping at 1305 Clinton Street tonight. Not just for a safe bed, but for what comes next - the courage to stay, the willingness to try the program, the open door waiting on the other side.",
  },
  {
    title: "For the Discipleship Program",
    description:
      "Nine to twelve months is a long time to rebuild a life. Pray for those enrolled - that they make it through the hard middle, grow in faith, and finish well. The Belmontez family has walked this road with residents for more than fifteen years.",
  },
  {
    title: "For Staff and Volunteers",
    description:
      "Jesse Chavez, Greg and Lynda Belmontez, and thirteen other staff members run this place every day. Pray for endurance and clarity - the kind of staying power that keeps people in this work for a decade and beyond.",
  },
  {
    title: "For the Triage Center",
    description:
      "Six tiny homes, one groundbreaking in December 2023. Pray for the construction to move forward, for the city and county partnerships to hold, and for the families who will one day call those units a bridge to something permanent.",
  },
  {
    title: "For Community Partnerships",
    description:
      "The Mission works alongside nineteen organizations - Madera Behavioral Health, CAPMC, Kaiser Permanente, Madera Police, local churches. Pray those relationships stay strong. They are what makes holistic care possible at this scale.",
  },
  {
    title: "For Financial Provision",
    description:
      "Revenue reached $1.4 million in 2024 - a 16 percent increase over 2023. Pray for continued provision as capacity grows, as the Triage Center comes online, and as the Mission adds staff to serve 147 beds.",
  },
  {
    title: "For the City of Madera",
    description:
      "The Mission is not separate from Madera - it is part of it. Pray that the number of people sleeping outside goes down. And that when someone in Madera County hits their lowest point, they know where to go.",
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
            The Mission has been standing on prayer since 1987. If you want to support the work without writing a check, this is where to start.
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
            If you would like the Mission to pray for you or someone you know, reach out. They mean it.
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
