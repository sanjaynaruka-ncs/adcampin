export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1120] to-black text-gray-200">

      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          Privacy Policy – Tic Tac Toe
        </h1>
        <p className="text-gray-400">
          Last updated: January 1, 2026
        </p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto bg-[#0f172a] border border-gray-800 rounded-xl px-8 py-10 shadow-lg space-y-8">

        <p>
          Welcome to <strong>Tic Tac Toe</strong>, a mobile game developed and
          published by <strong>Learn Play Lab</strong>, a division of
          <strong> AdCampin</strong>.
          This Privacy Policy explains how we handle your information when you
          use our mobile game available on the Google Play Store.
        </p>

        <p>
          By installing or using <strong>Tic Tac Toe</strong>, you agree to the
          terms of this Privacy Policy.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>

          <p className="mb-4">
            We do <strong>not</strong> collect personally identifiable
            information. The app does not require login, signup, or personal
            data entry.
          </p>

          <p>However, limited technical data may be collected automatically:</p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
            <li>Device model and OS version</li>
            <li>App usage statistics</li>
            <li>Crash analytics (Google Play Services / Firebase)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. How We Use Information
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Improve app performance</li>
            <li>Fix bugs and crashes</li>
            <li>Enhance user experience</li>
          </ul>

          <p className="mt-4">
            We do not sell, rent, or share your data with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. Third-Party Services
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Google Play Services</li>
            <li>Firebase Crashlytics / Analytics</li>
          </ul>

          <p className="mt-4">
            Privacy policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-400 hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Children’s Privacy
          </h2>

          <p>
            This game is safe for all ages. We do not knowingly collect
            personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Contact
          </h2>

          <p>Email: contact@adcampin.com</p>
          <p>Website: https://learnplaylab.adcampin.com</p>
        </section>

      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm py-10">
        © 2026 Learn Play Lab • A division of AdCampin
      </div>

    </div>
  );
}