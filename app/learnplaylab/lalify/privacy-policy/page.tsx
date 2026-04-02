// File: app/lalify/privacy-policy/page.tsx

export default function LalifyPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Lalify – Privacy Policy
        </h1>

        <p className="text-gray-400 mb-6">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <p className="text-gray-300 mb-6">
          Lalify (“we”, “our”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Lalify mobile application.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Basic user information (such as email, if you sign in)</li>
          <li>App usage data for improving features and performance</li>
          <li>Audio input (only when using voice features)</li>
        </ul>

        {/* How We Use */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          2. How We Use Information
        </h2>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>To provide and improve learning experience</li>
          <li>To personalize content and recommendations</li>
          <li>To enhance app performance and fix issues</li>
        </ul>

        {/* Data Sharing */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          3. Data Sharing
        </h2>
        <p className="text-gray-300">
          We do not sell your personal data. We may use trusted third-party services (such as analytics or AI services) to operate the app effectively.
        </p>

        {/* Data Security */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          4. Data Security
        </h2>
        <p className="text-gray-300">
          We take reasonable measures to protect your data, but no system is completely secure.
        </p>

        {/* Children */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          5. Children’s Privacy
        </h2>
        <p className="text-gray-300">
          Lalify is designed for general audiences. We do not knowingly collect personal data from children under 13.
        </p>

        {/* Changes */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-300">
          We may update this Privacy Policy from time to time. Updates will be posted on this page.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-8 mb-3">
          7. Contact Us
        </h2>
        <p className="text-gray-300">
          If you have any questions, please contact us at:
          <br />
          <span className="text-blue-400">support@adcampin.com</span>
        </p>

      </div>
    </div>
  );
}