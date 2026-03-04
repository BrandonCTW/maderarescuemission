"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded bg-green-600 text-white text-sm px-4 py-3 text-center">
        Thank you for subscribing! We will be in touch soon.
      </div>
    );
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        className="w-full px-3 py-2 text-gray-800 rounded text-sm bg-white"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full px-3 py-2 text-gray-800 rounded text-sm bg-white"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-2 text-gray-800 rounded text-sm bg-white"
        required
      />
      <button
        type="submit"
        style={{ backgroundColor: "#8B1A1A" }}
        className="w-full text-white py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  );
}
