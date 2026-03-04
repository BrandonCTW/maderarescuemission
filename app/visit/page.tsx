export const metadata = {
  title: "Visit - Madera Rescue Mission",
  description:
    "Plan a visit to Madera Rescue Mission at 1305 Clinton Street, Madera, CA 93638. Learn about hours, how to get help, and how to volunteer.",
};

const faqs = [
  {
    q: "Who can stay at the Madera Rescue Mission?",
    a: "The Mission serves men, women, and children with a parent who are experiencing homelessness. Emergency shelter is available nightly on a first-come basis, with up to 147 beds available across the men's side, women's side, behavioral health wing, and discipleship program housing.",
  },
  {
    q: "How do I get services?",
    a: "If you are in need of shelter or services, call (559) 675-8321. Walk-ins are welcome during office hours Monday through Saturday 8am to 4pm, and Sunday 4pm to 8pm.",
  },
  {
    q: "Does the Mission accept walk-ins or do you need a referral?",
    a: "Walk-ins are accepted for emergency overnight shelter. The Connection Ministry staff can also connect guests with partner agencies and programs during their stay.",
  },
  {
    q: "How can I support or volunteer?",
    a: "You can donate online, volunteer your time or skills, send a check to 1305 Clinton Street Madera CA 93638, or contact the Mission at (559) 675-8321.",
  },
  {
    q: "What is the Discipleship Recovery Program?",
    a: "The 9-12 month Discipleship Recovery Program is a voluntary, faith-based residential program for men and women. It includes biblical teaching, church attendance, vocational training, chores, structured free time, and mentorship from pastors and professionals. Graduates may stay on campus for up to 6 additional months of transitional housing.",
  },
  {
    q: "What is the Triage Center / Tiny Homes project?",
    a: "The Triage Center is a rapid-rehousing project consisting of six 2-bedroom tiny homes being built on the Mission's campus in partnership with the City of Madera, Madera County, and state organizations. Groundbreaking took place December 4, 2023. It will provide an additional 12 beds for low-barrier housing with case management support.",
  },
];

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan a Visit</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Whether you need help, want to volunteer, or simply want to see the Mission in action - you are welcome here.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#2E3192" }}>Address</h3>
              <p className="text-gray-600">
                1305 Clinton Street<br />
                Madera, CA 93638
              </p>
              <a
                href="https://maps.google.com/?q=1305+Clinton+Street+Madera+CA+93638"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2E3192" }}
                className="text-sm underline hover:opacity-80 mt-2 inline-block"
              >
                Get Directions
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#2E3192" }}>Phone</h3>
              <a href="tel:5596758321" className="text-gray-600 hover:text-blue-900">
                (559) 675-8321
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🕐</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: "#2E3192" }}>Office Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Saturday: 8am - 4pm<br />
                Sunday: 4pm - 8pm<br />
                <br />
                Walk-ins welcome for emergency shelter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.5!2d-120.0600!3d36.9614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809539c0baeed7a1%3A0x4a98c3a4e0cc17ed!2s1305%20Clinton%20St%2C%20Madera%2C%20CA%2093638!5e0!3m2!1sen!2sus!4v1679000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madera Rescue Mission Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-base mb-2" style={{ color: "#2E3192" }}>{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Have a Question?</h2>
          <p className="text-blue-200 mb-6">Reach out and someone from our team will be in touch.</p>
          <a
            href="mailto:jchavez@maderarescue.org"
            style={{ backgroundColor: "#8B1A1A" }}
            className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
