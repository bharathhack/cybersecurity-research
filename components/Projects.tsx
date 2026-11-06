"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  X,
  Terminal,
  ShieldCheck,
  Cpu,
  Network,
  Code2,
  ExternalLink,
} from "lucide-react";

export default function Projects() {
  const [open, setOpen] = useState(false);

  const features = [
    "Multithreaded TCP port scanning",
    "Scanning across all 65,535 ports",
    "Service and banner detection",
    "TTL-based OS estimation",
    "JSON and CSV reporting",
    "Retry logic for scan reliability",
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-24 border-t border-white/10"
    >
      <p className="text-blue-400 text-sm tracking-[0.25em] mb-4">
        03 / SELECTED WORK
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Featured Projects<span className="text-blue-500">.</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-xl">
        Security tools, technical experiments and practical
        cybersecurity research.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <button
          onClick={() => setOpen(true)}
          className="group text-left bg-[#101827] border border-white/10
          hover:border-blue-500/60 rounded-2xl p-7 transition-all
          duration-300 hover:-translate-y-1"
        >
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10
            flex items-center justify-center">
              <Terminal className="text-blue-400" size={25} />
            </div>

            <ArrowUpRight
              className="text-gray-500 group-hover:text-blue-400
              transition"
            />
          </div>

          <p className="text-blue-400 text-xs mt-7 tracking-widest">
            PYTHON / NETWORK SECURITY
          </p>

          <h3 className="text-2xl font-bold text-white mt-3">
            ReconX
          </h3>

          <p className="text-gray-400 mt-3 leading-7">
            A multithreaded TCP port scanner featuring service
            detection, banner grabbing, OS estimation and
            structured reporting.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {["Python", "TCP", "Multithreading"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-blue-300 bg-blue-500/10
                rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-blue-400 text-sm mt-7 font-medium">
            EXPLORE PROJECT →
          </p>
        </button>

        <div className="border border-dashed border-white/15
        rounded-2xl p-7 flex flex-col justify-center">
          <ShieldCheck className="text-gray-500" size={32} />

          <h3 className="text-xl text-gray-300 font-semibold mt-5">
            More research coming soon
          </h3>

          <p className="text-gray-500 text-sm mt-3 leading-7">
            Future projects, authorized security labs,
            CTF research and vulnerability analysis.
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md
          flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reconx-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh]
            overflow-y-auto bg-[#0C1422] border border-blue-500/30
            rounded-2xl p-7 md:p-10 shadow-2xl shadow-blue-500/10"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close project details"
              className="absolute right-5 top-5 text-gray-400
              hover:text-white"
            >
              <X size={24} />
            </button>

            <p className="text-blue-400 text-xs tracking-widest">
              PROJECT / 001
            </p>

            <h2
              id="reconx-title"
              className="text-4xl md:text-5xl font-bold text-white mt-4"
            >
              ReconX<span className="text-blue-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3">
              Multithreaded TCP Port Scanner
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { icon: Code2, name: "Language", value: "Python" },
                { icon: Cpu, name: "Execution", value: "Threads" },
                { icon: Network, name: "Network", value: "TCP" },
                { icon: ShieldCheck, name: "Domain", value: "Security" },
              ].map(({ icon: Icon, name, value }) => (
                <div key={name} className="bg-white/5 rounded-xl p-4">
                  <Icon size={19} className="text-blue-400" />
                  <p className="text-gray-500 text-xs mt-3">{name}</p>
                  <p className="text-white text-sm font-semibold mt-1">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-white text-xl font-semibold mt-9">
              Project overview
            </h3>

            <p className="text-gray-400 leading-8 mt-3">
              ReconX is an Nmap-inspired TCP port scanner developed
              in Python. It uses multithreading to scan ports,
              identify services, collect banners and generate
              structured scan reports.
            </p>

            <h3 className="text-white text-xl font-semibold mt-8">
              Key features
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {features.map((feature) => (
                <div key={feature} className="flex gap-2 text-gray-300 text-sm">
                  <span className="text-blue-400">✦</span>
                  {feature}
                </div>
              ))}
            </div>

            <h3 className="text-white text-xl font-semibold mt-8">
              Technology stack
            </h3>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "Socket Programming", "Threading", "CLI", "JSON", "CSV"].map((item) => (
                <span key={item} className="bg-blue-500/10
                text-blue-300 border border-blue-500/20
                rounded-lg px-3 py-2 text-xs">
                  {item}
                </span>
              ))}
            </div>

            <a
              href="https://github.com/frostcy05/reconx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10
              bg-blue-600 hover:bg-blue-500 text-white
              rounded-xl px-6 py-3 font-medium transition"
            >
              <span className="font-bold text-lg">GH</span>
              Explore on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}