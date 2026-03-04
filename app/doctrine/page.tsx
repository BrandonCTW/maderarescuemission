export const metadata = {
  title: "Doctrine - Madera Rescue Mission",
  description:
    "The statement of faith and doctrinal beliefs of Madera Rescue Mission - a Christ-centered nonprofit serving Madera County since 1987.",
};

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Bible is the inspired, infallible, and authoritative Word of God. It is the foundation for all of our ministry and the guide for daily life.",
  },
  {
    title: "The Gospel of Jesus Christ",
    text: "We believe the Gospel of Jesus Christ is the foundation of all ministry at the Mission. Jesus Christ is Lord and Savior - his death, burial, and resurrection are the basis for our hope and the source of lasting transformation for our guests.",
  },
  {
    title: "Faith-Based Ministry",
    text: "All programs at the Madera Rescue Mission are rooted in biblical principles. Guests of all faiths and backgrounds are welcome. Participation in spiritual programming is voluntary.",
  },
  {
    title: "Radical Hospitality",
    text: "We believe that every person - regardless of background, addiction, mental health, or past - bears the image of God and deserves to be treated with dignity, compassion, and care. This is the heart of our 'radical hospitality.'",
  },
  {
    title: "Holistic Transformation",
    text: "We believe that lasting change goes beyond physical shelter. True restoration addresses the spiritual, relational, vocational, and social dimensions of a person's life - which is why our programs integrate faith, community, and practical skills.",
  },
  {
    title: "Community and the Church",
    text: "We believe the local church is a vital partner in serving the poor and vulnerable. The Mission works closely with pastors, churches, and the broader Madera Christian community to extend the reach and depth of our care.",
  },
];

export default function DoctrinePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctrine and Beliefs</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            The Madera Rescue Mission is a Christ-centered nonprofit. The Gospel of Jesus Christ is the foundation of everything we do.
          </p>
        </div>
      </section>

      {/* Core Verse */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed border-l-4 pl-6 text-left" style={{ borderColor: "#2E3192" }}>
            "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."
          </blockquote>
          <p className="text-gray-500 mt-3 text-right pr-6">Micah 6:8</p>
        </div>
      </section>

      {/* Statement of Belief */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>
            Statement of Belief
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief) => (
              <div key={belief.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-base mb-3" style={{ color: "#2E3192" }}>{belief.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Doors */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">All Are Welcome</h2>
          <p className="text-blue-200 text-lg leading-relaxed">
            While the Madera Rescue Mission is a Christ-centered organization, all guests are welcome regardless of faith background. Our doors are open to the least, the last, and the lost - period.
          </p>
        </div>
      </section>
    </>
  );
}
