import React from "react";
import Link from "next/link";
import ContactForm from "@/components/form";

export default function LandingPage() {
  const productName = "Lynx Onboard";

  const features = [
    {
      icon: "🛡️",
      title: "Robust Authentication",
      description:
        "Secure login with email/password, role-based access, and MFA for peace of mind.",
    },
    {
      icon: "📂",
      title: "File Management",
      description:
        "Create, edit, and manage documents with built-in signing requests.",
    },
    {
      icon: "👥",
      title: "User Settings",
      description:
        "Profile customization, MFA setup, and full user management.",
    },
    {
      icon: "⏱️",
      title: "Task Management",
      description:
        "Track todos in real-time with prioritization to keep everyone on point.",
    },
    {
      icon: "🌐",
      title: "Legal & Identity Verification",
      description:
        "Encrypted identity verification designed to protect sensitive data.",
    },
    {
      icon: "🔑",
      title: "Advanced Security Controls",
      description:
        "Row-level security, protected dashboards, and encrypted storage.",
    },
  ];

  const stats = [
    { label: "Manual onboarding tasks reduced", value: "40%" },
    { label: "Faster onboarding completion", value: "Under 1 hour" },
    { label: "ID verifications under 5 min", value: "100%" },
    { label: "System uptime guarantee", value: "99.9%" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              {productName}
            </span>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="hover:text-red-600">
                Features
              </Link>

              <Link
                href="#demo-request"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 text-center bg-background flex-1">
        <h1 className="text-5xl font-bold tracking-tight">
          Less Hassle, More Hustle
          <span className="block text-red-600">
            Club CRM for Smooth Onboarding
          </span>
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          Manage scheduling and onboarding with ease — built to streamline your
          club’s activities and members.
        </p>
        <p className="mt-6 text-lg max-w-2xl mx-auto">Video Demo Available 08/26/2025</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#demo-request"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="px-6 py-3 bg-foreground rounded-lg hover:bg-gray-300 transition text-background"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="mt-2 text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border hover:shadow-lg transition"
              >
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Transform Your Idea?</h2>
        <p className="mt-4 text-lg">
          Transform how you welcome new talent with {productName}.
        </p>
      </section>

      <div className="py-16" id="demo-request">
        <ContactForm />
      </div>

      {/* Footer */}
      <footer className="bg-background border-t border-gray-200 py-8 text-center">
        © {new Date().getFullYear()} {productName}. All rights reserved.
      </footer>
    </div>
  );
}
