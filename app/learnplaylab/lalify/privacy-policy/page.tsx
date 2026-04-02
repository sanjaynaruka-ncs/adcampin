// File: app/lalify/privacy-policy/page.tsx

export default function LalifyPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy for Lalify – Your Language Teacher
        </h1>

        <p className="text-gray-400 mb-6 text-center">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <p className="text-gray-300 mb-6">
          Welcome to Lalify – Your Language Teacher, a mobile application developed and published by Learn Play Lab, a division of AdCampin. This Privacy Policy explains how we handle your information when you use our mobile app available on the Google Play Store.
        </p>

        <p className="text-gray-300 mb-6">
          By installing or using Lalify, you agree to the terms of this Privacy Policy.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>

        <h3 className="font-semibold text-white mt-4 mb-2">Personal Data</h3>
        <p className="text-gray-300 mb-4">
          Lalify does not collect personally identifiable information such as name, email address, phone number, or login credentials.
        </p>

        <h3 className="font-semibold text-white mt-4 mb-2">Non-Personal Data</h3>
        <p className="text-gray-300 mb-4">
          The app may automatically collect technical information such as:
        </p>

        <ul className="list-disc pl-5 text-gray-300 space-y-2 mb-4">
          <li>Device model and operating system version</li>
          <li>App version</li>
          <li>Screen resolution</li>
          <li>Language settings</li>
          <li>Anonymous usage statistics</li>
        </ul>

        <p className="text-gray-300">
          This information is used only in aggregate to improve app performance and user experience.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. Ads and External Services
        </h2>

        <p className="text-gray-300 mb-4">
          At launch, Lalify does not display advertisements. If ads or monetization features are introduced in future updates, this Privacy Policy will be updated accordingly.
        </p>

        <p className="text-gray-300">
          The app may use third-party services such as analytics tools. These services may collect technical information like device IP address, but do not collect personally identifiable information unless explicitly provided.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. How We Use Your Information
        </h2>

        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Provide and maintain the app</li>
          <li>Improve functionality and learning experience</li>
          <li>Analyze usage patterns</li>
          <li>Fix bugs and technical issues</li>
        </ul>

        <p className="text-gray-300 mt-4">
          None of the data collected is used to personally identify users.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Data Sharing and Disclosure
        </h2>

        <p className="text-gray-300 mb-4">
          We do not sell, trade, or transfer personal data to outside parties.
        </p>

        <p className="text-gray-300 mb-4">
          Non-personal aggregated data may be shared with:
        </p>

        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Analytics providers</li>
          <li>Future advertising partners (if ads are introduced)</li>
          <li>Legal authorities when required by law</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Third-Party Links
        </h2>

        <p className="text-gray-300">
          The app may contain links to third-party websites or services such as support pages or external resources. We are not responsible for the privacy practices of these third-party services.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          6. Children’s Privacy
        </h2>

        <p className="text-gray-300">
          Lalify is designed for children and general audiences. We do not knowingly collect personal information from children under the age of 13. If you believe that a child has provided personal information, please contact us and we will promptly remove it.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Security
        </h2>

        <p className="text-gray-300">
          We implement reasonable security measures to protect any collected information. However, no method of transmission or storage is completely secure.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          8. Changes to This Privacy Policy
        </h2>

        <p className="text-gray-300">
          This Privacy Policy may be updated from time to time. Any changes will be reflected by updating the “Effective date” at the top of this page.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          9. Contact Us
        </h2>

        <p className="text-gray-300">
          Email: <span className="text-blue-400">contact@adcampin.com</span>
          <br />
          Website:{" "}
          <a
            href="https://learnplaylab.adcampin.com"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://learnplaylab.adcampin.com
          </a>
        </p>

      </div>
    </div>
  );
}