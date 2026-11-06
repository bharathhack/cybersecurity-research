const certifications = [
  {
    number: "01",
    name: "Certified Penetration Testing",
    issuer: "RedTeam Hacker Academy",
    date: "Ongoing",
    status: "In Progress",
  },
  {
    number: "02",
    name: "Introduction and Networking Basics",
    issuer: "Cisco",
    date: "August 2025",
    status: "Completed",
  },
  {
    number: "03",
    name: "Advanced Cyber Security and Ethical Hacking",
    issuer: "GUVI — Security Expert Training",
    date: "October 2026",
    status: "Completed",
  },
];

const achievements = [
  {
    title: "TryHackMe",
    description: "Ranked among the top 8% of learners.",
  },
  {
    title: "Hands-on Security Labs",
    description:
      "Practising through TryHackMe, OverTheWire and PortSwigger Web Security Academy.",
  },
  {
    title: "CTF Practice",
    description:
      "Exploring practical security challenges and learning attack and defence concepts.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-8 py-24 border-t border-white/10"
    >
      <p className="text-blue-400 text-sm tracking-[0.25em] mb-4">
        05 / LEARNING & RECOGNITION
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Certifications & Achievements
        <span className="text-blue-500">.</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl leading-7">
        Training, learning milestones and practical cybersecurity
        activities that support my technical development.
      </p>

      <div className="mt-12 space-y-4">
        {certifications.map((cert) => (
          <div
            key={cert.number}
            className="bg-[#101827] border border-white/10
            hover:border-blue-500/40 rounded-2xl p-6
            flex flex-col md:flex-row md:items-center
            justify-between gap-5 transition-all duration-300"
          >
            <div className="flex gap-5">
              <span className="text-blue-400 text-sm pt-1">
                {cert.number}
              </span>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {cert.date}
                </p>
              </div>
            </div>

            <span className="text-xs text-blue-300 bg-blue-500/10
            border border-blue-500/20 rounded-full px-4 py-2 w-fit">
              {cert.status}
            </span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-white mt-16">
        Practical Achievements
      </h3>

      <div className="grid md:grid-cols-3 gap-5 mt-7">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="bg-[#101827] border border-white/10
            rounded-2xl p-6 hover:border-blue-500/40
            transition-all duration-300"
          >
            <div className="text-blue-400 text-2xl">✦</div>

            <h4 className="text-white font-semibold mt-5">
              {item.title}
            </h4>

            <p className="text-gray-400 text-sm leading-7 mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}