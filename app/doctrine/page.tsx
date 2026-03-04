export const metadata = {
  title: "Doctrine - Madera Rescue Mission",
  description:
    "The statement of faith and doctrinal beliefs of Madera Rescue Mission - a Christ-centered nonprofit serving Madera County since 1987.",
};

const beliefs = [
  {
    title: "The Bible",
    text: "The Bible is the inspired, infallible Word of God. Every program at the Mission - emergency shelter, discipleship, vocational training - is built on that foundation.",
  },
  {
    title: "The Gospel of Jesus Christ",
    text: "Jesus Christ is Lord and Savior. His death, burial, and resurrection are the basis for real hope - not wishful thinking - and the source of lasting change for the men and women who come through these doors.",
  },
  {
    title: "Faith-Based Ministry",
    text: "Every program here is rooted in Scripture. Guests of all faiths are welcome. Chapel and discipleship programming is available and voluntary - no one is required to participate to receive shelter.",
  },
  {
    title: "Radical Hospitality",
    text: "Every person who walks through the Mission's doors - regardless of addiction, mental illness, or past - bears the image of God. That belief shows up in how staff greet guests, how meals are served, and why the lights stay on at 2am.",
  },
  {
    title: "Holistic Transformation",
    text: "A warm bed solves one night. The 9-12 month discipleship program addresses what actually keeps people homeless - broken relationships, addiction, lack of job skills, spiritual rootlessness. The Mission takes on all of it.",
  },
  {
    title: "Community and the Church",
    text: "The Mission does not operate alone. Congregations including Madera Avenue Bible Church, Fourth Street Church, Valley Harvest Church, and the Madera Ministerial Association show up consistently - with volunteers, resources, and prayer.",
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
            The Mission has operated on the same convictions since 1987. The Gospel is not a program add-on. It is the reason the doors stay open.
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
            The Mission is Christ-centered. And the doors are open to everyone - no faith background required, no spiritual test at intake. The least, the last, and the lost. Period.
          </p>
        </div>
      </section>
    </>
  );
}
