const skillGroups = [
  {
    number: "01",
    title: "Offensive Security",
    description: "Web application security and penetration testing concepts.",
    skills: [
      "Web Penetration Testing",
      "OWASP Top 10",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "IDOR",
      "CSRF",
      "Broken Authentication",
      "Command Injection",
      "Privilege Escalation",
      "Post-Exploitation",
    ],
  },
  {
    number: "02",
    title: "Security Tools",
    description: "Tools used for security testing, analysis and practical labs.",
    skills: [
      "Burp Suite Community",
      "Metasploit Framework",
      "Nmap",
      "Wireshark",
      "Wazuh SIEM",
      "PortSwigger Web Security Academy",
    ],
  },
  {
    number: "03",
    title: "Networking & Systems",
    description: "Foundational knowledge for understanding networks and systems.",
    skills: [
      "TCP/IP",
      "Network Scanning",
      "Linux",
      "Kali Linux",
      "Service Enumeration",
      "Network Analysis",
    ],
  },
  {
    number: "04",
    title: "Programming & Development",
    description: "Programming and development skills used in security projects.",
    skills: [
      "Python",
      "SQL",
      "Git",
      "Command-Line Tools",
      "Socket Programming",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-8 py-24 border-t border-white/10"
    >
      <p className="text-blue-400 text-sm tracking-[0.25em] mb-4">
        04 / TECHNICAL EXPERTISE
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Technical Skills<span className="text-blue-500">.</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl leading-7">
        Technologies, tools and security concepts I explore
        through hands-on practice, research and development.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mt-12">
        {skillGroups.map((group) => (
          <div
            key={group.number}
            className="group bg-[#101827] border border-white/10
            hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-blue-400 text-sm tracking-widest">
                {group.number}
              </span>
              <span className="w-8 h-px bg-blue-500/50" />
            </div>

            <h3 className="text-xl font-semibold text-white mt-6">
              {group.title}
            </h3>

            <p className="text-gray-500 text-sm mt-2 leading-6">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-blue-200 bg-blue-500/10
                  border border-blue-500/15 rounded-lg px-3 py-2
                  hover:bg-blue-500/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}