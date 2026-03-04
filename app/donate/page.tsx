export const metadata = {
  title: "Donate - Madera Rescue Mission",
  description:
    "Your gift to Madera Rescue Mission provides emergency shelter, meals, and life-changing programs to Madera County's homeless community.",
};

const impactItems = [
  { amount: "$25", description: "A warm bed and meals for one guest for a night - the whole thing" },
  { amount: "$75", description: "Enough pantry stock to feed ten guests a hot meal" },
  { amount: "$250", description: "One month of supplies for a discipleship program resident" },
  { amount: "$500", description: "A week of case management - the appointments, paperwork, and follow-up that actually move people forward" },
  { amount: "$1,000", description: "A month of behavioral health housing for one client, including weekly case management" },
  { amount: "Custom", description: "38 years of mission. Every dollar goes directly to the people who need it most in Madera County" },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Difference Today</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ninety-four people will sleep at the Mission tonight. Your gift is what keeps that door open - and what funds the programs that help them not need it again.
          </p>
        </div>
      </section>

      {/* Donate Button */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#2E3192" }}>Give Now</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            The Mission is a 501(c)(3) nonprofit. Giving online takes about two minutes - secure and tax-deductible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#8B1A1A" }}
              className="text-white px-10 py-4 rounded font-bold text-xl hover:opacity-90 transition-opacity"
            >
              Donate via Network for Good
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Madera Rescue Mission is a 501(c)(3) nonprofit organization. EIN: 77-0144133. All donations are tax-deductible to the extent permitted by law.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactItems.map((item) => (
              <div key={item.amount} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-2xl font-bold mb-2" style={{ color: "#8B1A1A" }}>{item.amount}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#2E3192" }}>Other Ways to Give</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-100 rounded-lg">
              <div className="text-3xl mb-3">✉</div>
              <h3 className="font-bold mb-2">Mail a Check</h3>
              <p className="text-gray-600 text-sm">
                Madera Rescue Mission<br />
                1305 Clinton Street<br />
                Madera, CA 93638
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold mb-2">Donate Supplies</h3>
              <p className="text-gray-600 text-sm">
                The Mission accepts food, clothing, hygiene items, and household goods. Call (559) 675-8321 first - they can tell you exactly what they need right now.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg">
              <div className="text-3xl mb-3">🙌</div>
              <h3 className="font-bold mb-2">Volunteer</h3>
              <p className="text-gray-600 text-sm">
                Volunteer opportunities and probation fulfillment both available. Call (559) 675-8321 to find the right fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xl italic text-blue-100 mb-4">
            "It was at my deepest point in life, in a homeless shelter, that the Lord began to minister to me... this was a highly productive time in my life."
          </p>
          <p className="text-blue-300 text-sm">- Anonymous Resident</p>
        </div>
      </section>
    </>
  );
}
