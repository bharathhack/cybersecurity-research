const contacts = [
  {
    platform: "Discord",
    username: "frostcold09",
    detail: "Connect with me on Discord",
    href: "",
  },
  {
    platform: "LinkedIn",
    username: "Bharath Kumar L.",
    detail: "Professional networking",
    href: "https://linkedin.com/bharath-kumar-l",
  },
  {
    platform: "GitHub",
    username: "@frostcy05",
    detail: "Explore my repositories and projects",
    href: "https://github.com/frostcy05",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-24 border-t border-white/10"
    >
      <p className="text-blue-400 text-sm tracking-[0.25em] mb-4">
        06 / GET IN TOUCH
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Let's Connect<span className="text-blue-500">.</span>
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl leading-8">
        Interested in cybersecurity research, technical
        discussions, collaboration and learning opportunities.
        Feel free to connect with me.
      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        {contacts.map((contact) => (
          <div
            key={contact.platform}
            className="bg-[#101827] border border-white/10
            hover:border-blue-500/50 rounded-2xl p-6
            transition-all duration-300"
          >
            <p className="text-blue-400 text-sm tracking-widest">
              {contact.platform.toUpperCase()}
            </p>

            <h3 className="text-xl font-semibold text-white mt-5">
              {contact.username}
            </h3>

            <p className="text-gray-400 text-sm mt-3">
              {contact.detail}
            </p>

            {contact.href ? (
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 text-sm
                mt-6 hover:text-blue-300"
              >
                Visit profile →
              </a>
            ) : (
              <p className="text-blue-400 text-sm mt-6">
                Discord username: frostcold09
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 border border-blue-500/20
      bg-blue-500/5 rounded-2xl p-7">
        <p className="text-white font-semibold text-lg">
          Thanks for visiting.
        </p>
        <p className="text-gray-400 text-sm mt-2 leading-7">
          More cybersecurity research, technical articles
          and practical security experiments coming soon.
        </p>
      </div>
    </section>
  );
}