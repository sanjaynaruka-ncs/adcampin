export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1120] to-black text-gray-200">

      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          Privacy Policy – Mathuvo
        </h1>
        <p className="text-gray-400">
          Effective date: January 1, 2026
        </p>
      </div>

      {/* Content Card */}
      <div className="max-w-3xl mx-auto bg-[#0f172a] border border-gray-800 rounded-xl px-8 py-10 shadow-lg space-y-8">

        <p>
          Welcome to <strong>Mathuvo – Math Adventure Quest</strong>, a mobile
          game developed and published by <strong>Learn Play Lab</strong>, a
          division of <strong>AdCampin</strong>. This Privacy Policy explains
          how we handle your information when you use our mobile game available
          on the Google Play Store.
        </p>

        <p>
          By installing or using <strong>Mathuvo</strong>, you agree to the
          terms of this Privacy Policy.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>

          <h3 className="font-semibold mt-4 mb-2 text-gray-300">
            Personal Data
          </h3>

          <p className="mb-4">
            Mathuvo does <strong>not collect personally identifiable
            information</strong> such as name, email address, phone number,
            or login credentials.
          </p>

          <h3 className="font-semibold mt-4 mb-2 text-gray-300">
            Non-Personal Data
          </h3>

          <p>The app may automatically collect technical information such as:</p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
            <li>Device model and operating system version</li>
            <li>App version</li>
            <li>Screen resolution</li>
            <li>Language settings</li>
            <li>Anonymous usage statistics</li>
          </ul>

          <p className="mt-4">
            This information is used only in aggregate to improve app
            performance and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. Ads and External Services
          </h2>

          <p>
            At launch, Mathuvo does <strong>not display advertisements</strong>.
            If ads or monetization are added in future versions, this policy
            will be updated accordingly.
          </p>

          <p className="mt-4">
            The app may use third-party services such as analytics tools or ad
            networks. These services may automatically collect technical
            information like device IP address but do not collect personally
            identifiable information unless provided voluntarily.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. How We Use Your Information
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Provide and maintain the app</li>
            <li>Improve functionality and user experience</li>
            <li>Analyze usage patterns</li>
            <li>Fix bugs and technical issues</li>
          </ul>

          <p className="mt-4">
            None of the data collected is used to identify users personally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Data Sharing and Disclosure
          </h2>

          <p>
            We do <strong>not sell, trade, or transfer</strong> personal data to
            outside parties.
          </p>

          <p className="mt-4">
            Non-personal aggregated data may be shared with analytics providers,
            advertising partners (if ads are introduced), or legal authorities
            when required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Third-Party Links
          </h2>

          <p>
            The app may include links to third-party websites or services such
            as support or privacy policy pages. We are not responsible for the
            privacy practices of these sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            6. Children’s Privacy
          </h2>

          <p>
            Mathuvo is designed for children and general audiences. We do not
            knowingly collect personal information from children under 13. If
            you believe a child has provided personal information, please
            contact us so we can remove it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            7. Security
          </h2>

          <p>
            We implement reasonable security measures to protect collected
            information. However, no digital system is completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            8. Changes to This Privacy Policy
          </h2>

          <p>
            This policy may be updated periodically. When changes occur, the
            “Effective date” at the top of the page will be updated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            9. Contact Us
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