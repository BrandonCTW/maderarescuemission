"use client";

export default function NewsletterForm() {
  return (
    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="First Name"
        className="w-full px-3 py-2 text-gray-800 rounded text-sm bg-white"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="w-full px-3 py-2 text-gray-800 rounded text-sm bg-white"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full px-3 py-2 text-gray-800 rounded text-sm bg-white"
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
