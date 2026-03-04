import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "38+", label: "Years Serving Madera" },
  { value: "147", label: "Beds Available Nightly" },
  { value: "15", label: "Staff Members" },
  { value: "1987", label: "Year Founded" },
];

const services = [
  {
    title: "Emergency Overnight Shelter",
    description:
      "Up to 66 beds for men and 28 beds for women. Every guest receives food, a hot shower, a warm bed, and a safe place to rest.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Discipleship Recovery Program",
    description:
      "A voluntary 9-12 month faith-based residential program offering biblical teaching, vocational training, and mentorship.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Behavioral Health Partnership",
    description:
      "Joint program with Behavioral Health County of Madera providing housing, weekly case management, and community activities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Working Men's Ministry",
    description:
      "Trade skills training in landscaping, painting, flooring, carpentry, plumbing, and maintenance - building toward employment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Connection Ministry",
    description:
      "Assists guests with documents, legal paperwork, and personal needs. Coordinates with county agencies and mobile medical services.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    title: "Triage Center - Tiny Homes",
    description:
      "Six 2-bedroom tiny homes for rapid rehousing with case management. A joint project with City of Madera and Madera County.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M1 22V11l7-7 7 7v11" />
        <path d="M15 22V13l4-4 4 4v9" />
        <path d="M1 22h22" />
        <path d="M6 22v-4h4v4" />
      </svg>
    ),
  },
];

const process = [
  {
    phase: "Day 1",
    title: "Emergency Intake",
    description:
      "Guest arrives and receives food, a hot shower, a warm bed, and safe shelter for the night.",
  },
  {
    phase: "Ongoing",
    title: "Daily Services",
    description:
      "Overnight guests receive meals and shelter. Connection Ministry staff assess needs and connect guests to resources.",
  },
  {
    phase: "Voluntary",
    title: "Program Enrollment",
    description:
      "Guests may choose to enroll in the 9-12 month Discipleship Recovery Program at their own discretion.",
  },
  {
    phase: "Months 1-12",
    title: "Discipleship Program",
    description:
      "Faith-based classes, church attendance, assigned responsibilities, skill building, and mentorship.",
  },
  {
    phase: "Post-Graduation",
    title: "Transitional Housing",
    description:
      "Graduates may stay on campus for up to 6 additional months while securing employment and stability.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[540px] overflow-hidden">
        <Image
          src="/assets/gallery/homepage_lighthouse.jpg"
          alt="Madera Rescue Mission - A beacon of hope"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            Serving the Least, the Last,<br className="hidden sm:block" /> and the Lost
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mb-8 drop-shadow">
            Faith-based emergency shelter, recovery programs, and holistic care for Madera County since 1987.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#8B1A1A" }}
              className="text-white px-8 py-3 rounded font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Donate Now
            </a>
            <Link
              href="/services"
              style={{ borderColor: "white" }}
              className="text-white border-2 px-8 py-3 rounded font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-yellow-300">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#2E3192" }}>
            A Beacon of Hope in Madera County
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Madera Rescue Mission is a Christ-centered nonprofit that has served the homeless community of Madera, CA since 1987. What began as a humble soup kitchen on January 5, 1987 has grown into a 147-bed campus offering emergency shelter, long-term discipleship programs, behavioral health housing, vocational training, and comprehensive case management.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 italic border-l-4 pl-6" style={{ borderColor: "#2E3192" }}>
            "We here at the Madera Rescue Mission are always looking at serving our guests, disciples, and the community the best way we can."
          </p>
          <p className="text-gray-500">- Jesse Chavez, Executive Director</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2E3192" }}>
              Our Programs and Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Emergency shelter is just the beginning. We walk alongside every guest toward lasting transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#eef0fa", color: "#2E3192" }}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#2E3192" }}>{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              style={{ backgroundColor: "#2E3192" }}
              className="text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2E3192" }}>
              How the Mission Works
            </h2>
            <p className="text-gray-600">From the first night to a transformed life.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-0">
            {process.map((step, i) => (
              <div key={step.phase} className="flex-1 relative">
                <div className="text-center px-4 pb-8">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3 text-sm"
                    style={{ backgroundColor: "#2E3192" }}
                  >
                    {i + 1}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#8B1A1A" }}>
                    {step.phase}
                  </div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 w-1/2 border-t-2 border-dashed border-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <svg className="w-10 h-10 mx-auto mb-6 text-yellow-300 opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.966z" />
          </svg>
          <p className="text-xl md:text-2xl leading-relaxed text-blue-100 italic mb-8">
            "It was at my deepest point in life, in a homeless shelter, that the Lord began to minister to me... this was a highly productive time in my life."
          </p>
          <p className="text-blue-300 text-sm">- Anonymous Resident</p>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2E3192" }}>Life at the Mission</h2>
            <p className="text-gray-600">See our community in action.</p>
          </div>

          {/* Desktop: featured layout */}
          <div className="hidden md:flex gap-3" style={{ height: "420px" }}>
            <div className="relative overflow-hidden rounded-lg" style={{ flex: "2" }}>
              <Image
                src="/assets/gallery/gallery_01_1000004823.jpg"
                alt="Madera Rescue Mission groundbreaking ceremony"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-3" style={{ flex: "1" }}>
              {[
                "gallery_02_20231214_074827.jpg",
                "gallery_04_20231204_145727.jpg",
                "gallery_07_1000004757.jpg",
              ].map((img) => (
                <div key={img} className="relative overflow-hidden rounded-lg" style={{ flex: "1" }}>
                  <Image
                    src={`/assets/gallery/${img}`}
                    alt="Madera Rescue Mission in action"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: 2x2 grid */}
          <div className="grid grid-cols-2 md:hidden gap-3">
            {[
              "gallery_01_1000004823.jpg",
              "gallery_02_20231214_074827.jpg",
              "gallery_04_20231204_145727.jpg",
              "gallery_07_1000004757.jpg",
            ].map((img) => (
              <div key={img} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/assets/gallery/${img}`}
                  alt="Madera Rescue Mission in action"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              style={{ backgroundColor: "#2E3192" }}
              className="text-white px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#2E3192" }}>
            Partner With Us
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Your generosity makes emergency shelter, discipleship programs, and life-changing services possible for our neighbors in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.networkforgood.org/donation/ExpressDonation.aspx?ORGID2=770144133"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#8B1A1A" }}
              className="text-white px-8 py-3 rounded font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Donate Now
            </a>
            <Link
              href="/pray"
              style={{ borderColor: "#2E3192", color: "#2E3192" }}
              className="border-2 px-8 py-3 rounded font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Pray for the Mission
            </Link>
            <Link
              href="/visit"
              style={{ borderColor: "#2E3192", color: "#2E3192" }}
              className="border-2 px-8 py-3 rounded font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
