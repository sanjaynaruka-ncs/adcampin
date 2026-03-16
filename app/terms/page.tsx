import Navbar from "../components/navbar";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20 text-gray-300">

        <h1 className="text-4xl font-bold mb-10 text-white">
          Terms of Service
        </h1>

        <p className="mb-6">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="mb-8">
          These Terms of Service ("Terms") govern your access to and use of the
          AdCampin platform and services. By accessing or using AdCampin, you
          agree to be bound by these Terms.
        </p>

        {/* USE OF SERVICE */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          1. Use of the Service
        </h2>

        <p className="mb-6">
          AdCampin provides AI-powered tools for generating advertising
          campaigns, marketing strategies, landing pages, and related content.
          You agree to use the platform only for lawful purposes and in
          accordance with these Terms.
        </p>

        {/* ACCOUNTS */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          2. User Accounts
        </h2>

        <p className="mb-4">
          To access certain features of AdCampin, you must create an account.
          You agree to:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Provide accurate and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Notify us immediately of unauthorized access</li>
          <li>Accept responsibility for activities under your account</li>
        </ul>

        {/* PAYMENTS */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          3. Payments and Subscriptions
        </h2>

        <p className="mb-4">
          Some features of AdCampin require a paid subscription. By purchasing a
          subscription you agree to the following:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Subscription fees are billed in advance</li>
          <li>All payments are processed securely through third-party payment providers</li>
          <li>Subscription pricing may change with prior notice</li>
          <li>Taxes may apply depending on your location</li>
        </ul>

        <p className="mb-8">
          Failure to pay subscription fees may result in suspension or
          termination of your account.
        </p>

        {/* AI GENERATED CONTENT */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          4. AI-Generated Content
        </h2>

        <p className="mb-8">
          AdCampin uses artificial intelligence to generate marketing content.
          While we strive for accuracy and quality, AI-generated results may not
          always be accurate or suitable for every use case. Users are
          responsible for reviewing and validating generated content before
          using it in marketing campaigns or business decisions.
        </p>

        {/* ACCEPTABLE USE */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          5. Acceptable Use Policy
        </h2>

        <p className="mb-4">
          You agree not to use AdCampin for any unlawful or harmful activities,
          including but not limited to:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Violating any applicable laws or regulations</li>
          <li>Generating deceptive or fraudulent advertising content</li>
          <li>Attempting to access or interfere with platform infrastructure</li>
          <li>Reverse engineering or exploiting the platform</li>
          <li>Using the platform to distribute malicious or harmful content</li>
        </ul>

        {/* INTELLECTUAL PROPERTY */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          6. Intellectual Property
        </h2>

        <p className="mb-8">
          The AdCampin platform, including software, design, branding, and
          content, is owned by AdCampin and protected by intellectual property
          laws. You may not copy, distribute, or reproduce any part of the
          platform without written permission.
        </p>

        {/* TERMINATION */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          7. Termination
        </h2>

        <p className="mb-8">
          We reserve the right to suspend or terminate access to AdCampin if you
          violate these Terms or misuse the platform. Users may also terminate
          their account at any time by contacting support.
        </p>

        {/* DISCLAIMER */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          8. Disclaimer
        </h2>

        <p className="mb-8">
          AdCampin is provided on an "as is" and "as available" basis without
          warranties of any kind. We do not guarantee that the platform will be
          uninterrupted, secure, or error-free.
        </p>

        {/* LIMITATION OF LIABILITY */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          9. Limitation of Liability
        </h2>

        <p className="mb-8">
          To the maximum extent permitted by law, AdCampin shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages resulting from the use or inability to use the platform.
        </p>

        {/* CHANGES */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          10. Changes to These Terms
        </h2>

        <p className="mb-8">
          We may update these Terms from time to time. Continued use of the
          platform after changes constitutes acceptance of the updated Terms.
        </p>

        {/* GOVERNING LAW */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          11. Governing Law
        </h2>

        <p className="mb-8">
          These Terms are governed by and construed in accordance with the laws
          applicable in your jurisdiction.
        </p>

        {/* CONTACT */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          12. Contact
        </h2>

        <p>
          If you have questions about these Terms, please contact:
        </p>

        <p className="mt-4 font-semibold text-white">
          support@adcampin.com
        </p>

      </main>
    </>
  );
}