"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const formSpree = process.env.NEXT_PUBLIC_FORMSPREE_FORM as string;
  const [state, handleSubmit] = useForm(formSpree);

  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 font-medium text-lg">
        🎉 Thank you for your interest, we will reach out soon with more details.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-background text-foreground border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Join the Club 🚀</h2>
      <p className="text-center text-sm opacity-80">
        Sign up to stay updated with the latest news.
      </p>

      {/* Company Name */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold mb-2">
          Company Name
        </label>
        <input
          id="company"
          type="text"
          name="company"
          required
          placeholder="Your Company"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <ValidationError
          prefix="Company"
          field="company"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            placeholder="John"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <ValidationError
            prefix="First Name"
            field="firstName"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            placeholder="Doe"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <ValidationError
            prefix="Last Name"
            field="lastName"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>
      </div>

      {/* Phone (optional) */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          Phone (optional)
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="(123) 456-7890"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Message (optional) */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you're interested in..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 disabled:opacity-50 transition"
      >
        {state.submitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
