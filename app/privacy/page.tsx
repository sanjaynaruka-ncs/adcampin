import Navbar from "../components/navbar";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-20 text-gray-300">

        <h1 className="text-4xl font-bold mb-10 text-white">
          Privacy Policy
        </h1>

        <p className="mb-6">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="mb-8">
          AdCampin ("we", "our", or "us") respects your privacy and is committed to
          protecting your personal data. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use the AdCampin
          platform and services.
        </p>

        {/* INFORMATION WE COLLECT */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          1. Information We Collect
        </h2>

        <p className="mb-4">
          We may collect the following types of information when you use our platform:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Email address and account credentials</li>
          <li>Account profile information</li>
          <li>Campaign data entered into the platform</li>
          <li>Usage data and interaction with features</li>
          <li>Payment and subscription information</li>
          <li>Device and browser information</li>
        </ul>

        {/* HOW WE USE DATA */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          2. How We Use Your Information
        </h2>

        <p className="mb-4">
          We use collected information for the following purposes:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>To provide and operate the AdCampin platform</li>
          <li>To generate AI-powered advertising campaigns</li>
          <li>To manage user accounts and subscriptions</li>
          <li>To process payments and billing</li>
          <li>To improve platform functionality and performance</li>
          <li>To communicate important updates and service notifications</li>
        </ul>

        {/* LEGAL BASIS */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          3. Legal Basis for Processing (GDPR)
        </h2>

        <p className="mb-8">
          If you are located in the European Economic Area, we process your personal
          data under the following legal bases: consent, contractual necessity,
          compliance with legal obligations, and legitimate interests such as
          improving our services and maintaining platform security.
        </p>

        {/* THIRD PARTY SERVICES */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          4. Third-Party Services
        </h2>

        <p className="mb-4">
          AdCampin uses trusted third-party services to operate the platform. These
          services may process limited data necessary for functionality:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Supabase – authentication and database infrastructure</li>
          <li>OpenAI – AI-powered content generation</li>
          <li>Razorpay – payment processing and billing</li>
          <li>Vercel – application hosting and infrastructure</li>
          <li>Resend – transactional email delivery</li>
        </ul>

        {/* DATA SECURITY */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          5. Data Security
        </h2>

        <p className="mb-8">
          We implement appropriate technical and organizational measures to protect
          your personal data from unauthorized access, disclosure, alteration, or
          destruction. While we strive to protect your information, no method of
          transmission over the internet is completely secure.
        </p>

        {/* DATA RETENTION */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          6. Data Retention
        </h2>

        <p className="mb-8">
          We retain personal data only as long as necessary to provide our services,
          comply with legal obligations, resolve disputes, and enforce agreements.
          Users may request deletion of their data at any time.
        </p>

        {/* USER RIGHTS */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          7. Your Privacy Rights (GDPR & CCPA)
        </h2>

        <p className="mb-4">
          Depending on your location, you may have the following rights:
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal data</li>
          <li>Request restriction of processing</li>
          <li>Request data portability</li>
          <li>Object to certain types of processing</li>
        </ul>

        {/* COOKIES */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          8. Cookies and Tracking Technologies
        </h2>

        <p className="mb-8">
          AdCampin may use cookies and similar technologies to enhance user
          experience, maintain session authentication, analyze usage patterns,
          and improve platform performance.
        </p>

        {/* CHILDREN */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          9. Children's Privacy
        </h2>

        <p className="mb-8">
          AdCampin is not intended for individuals under the age of 13. We do not
          knowingly collect personal information from children. If we become aware
          that a child has provided personal information, we will take steps to
          remove such data.
        </p>

        {/* POLICY CHANGES */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          10. Changes to This Privacy Policy
        </h2>

        <p className="mb-8">
          We may update this Privacy Policy periodically. When changes are made,
          we will update the "Last updated" date at the top of this page.
        </p>

        {/* CONTACT */}

        <h2 className="text-2xl font-semibold mt-12 mb-4 text-white">
          11. Contact Us
        </h2>

        <p>
          If you have any questions about this Privacy Policy or wish to exercise
          your privacy rights, please contact us at:
        </p>

        <p className="mt-4 font-semibold text-white">
          privacy@adcampin.com
        </p>

      </main>
    </>
  );
}