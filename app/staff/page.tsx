import Image from "next/image";

export const metadata = {
  title: "Staff - Madera Rescue Mission",
  description:
    "Meet the dedicated team at Madera Rescue Mission - 15 staff members committed to serving Madera County's most vulnerable residents.",
};

const staff = [
  { name: "Jesse Chavez", title: "Executive Director", image: "/assets/team/team_staff_20250527_074203.jpg" },
  { name: "Lynda Belmontez", title: "Deputy Director, Women's Services / Administrative", image: "/assets/team/team_staff_20250527_075556.jpg" },
  { name: "Greg Belmontez", title: "Deputy Director, Men's Services / Facilities", image: "/assets/team/team_staff_20250527_075724.jpg" },
  { name: "Ligia Pacheco", title: "Accounting / Grant Writer", image: "/assets/team/team_staff_20250527_075944.jpg" },
  { name: "Brandi Allen", title: "Women's Shelter / Program Manager", image: "/assets/team/team_staff_20250527_080012.jpg" },
  { name: "Cathy Mount", title: "Women's Shelter Intake", image: "/assets/team/team_staff_20250527_080552.jpg" },
  { name: "Jose Martinez", title: "Men's House Manager / Maintenance", image: "/assets/team/team_staff_20250527_080624.jpg" },
  { name: "Michael Armendarez", title: "Men's House Manager", image: "/assets/team/team_staff_20250529_072040.jpg" },
  { name: "Travis Shreck", title: "Case Manager I (Behavioral Health)", image: "/assets/team/team_staff_20250529_072622.jpg" },
  { name: "June Gabbard", title: "Case Manager I (Behavioral Health)", image: "/assets/team/team_staff_20250529_083047.jpg" },
  { name: "Chantell Harvey", title: "Women's Shelter Intake", image: "/assets/team/team_staff_image_asset.jpeg" },
  { name: "Jennifer Mendez", title: "Case Manager II", image: "/assets/team/team_staff_20250527_074318.jpg" },
  { name: "Fuego", title: "Web Designer and Social Media Specialist", image: null },
];

const board = [
  { name: "Jesse Chavez", title: "Executive Director" },
  { name: "Keith Carns", title: "Chairman of the Board" },
  { name: "Dan Humphries", title: "Treasurer" },
  { name: "Pastor Mike Unger", title: "Secretary" },
  { name: "Otto Coelho", title: "Member" },
  { name: "Donna Adams", title: "Member" },
  { name: "Brenda Herrera", title: "Member" },
  { name: "Ron Peacock", title: "Member" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function StaffPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Fifteen people run this operation - shelter intake, case management, grant writing, facilities, and everything in between. Several have been here for over 15 years.
          </p>
        </div>
      </section>

      {/* Group Photo - replaced with mission activity collage */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/gallery/gallery_01_1000004823.jpg"
              alt="Madera Rescue Mission Staff and Community"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>Mission Staff</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staff.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
                <div className="relative h-48 overflow-hidden flex items-center justify-center" style={{ backgroundColor: "#2E3192" }}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="text-white font-bold text-4xl select-none">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base" style={{ color: "#2E3192" }}>{member.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2E3192" }}>Board of Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {board.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: "#2E3192" }}
                >
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-gray-500 text-sm">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section style={{ backgroundColor: "#2E3192" }} className="py-12 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Want to Serve With Us?</h2>
          <p className="text-blue-200 mb-6">
            Volunteer spots are open. Call (559) 675-8321 or send an email and someone will follow up.
          </p>
          <a
            href="mailto:jchavez@maderarescue.org"
            style={{ backgroundColor: "#8B1A1A" }}
            className="text-white px-6 py-3 rounded font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </>
  );
}
