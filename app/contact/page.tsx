import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-bold mb-10">
          Contact Us
        </h1>

        <p className="text-gray-600 mb-10">
          Have questions about AdCampin? Send us a message.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </main>
    </>
  );
}