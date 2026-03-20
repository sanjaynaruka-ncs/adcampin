import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Refund & Cancellation Policy</h1>

          <p>
            At AdCampin, we strive to provide high-quality AI-powered advertising services.
          </p>

          <h2 className="font-semibold">1. Subscription Cancellation</h2>
          <p>
            Users can cancel their subscription at any time from their account dashboard.
            Cancellation will prevent future billing but does not affect the current billing cycle.
          </p>

          <h2 className="font-semibold">2. Refund Policy</h2>
          <p>
            All payments made are non-refundable. Once a subscription is activated,
            we do not offer refunds for unused time or services.
          </p>

          <h2 className="font-semibold">3. Exceptions</h2>
          <p>
            Refunds may be considered only in cases of duplicate payment or technical errors,
            subject to review.
          </p>

          <h2 className="font-semibold">4. Contact</h2>
          <p>For refund-related queries, contact support@adcampin.com.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}