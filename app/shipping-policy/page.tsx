import Navbar from "../components/navbar";
import Footer from "../components/Footer";

export default function ShippingPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-black px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Shipping Policy</h1>

          <p>AdCampin is a digital SaaS platform. No physical products are shipped.</p>

          <h2 className="font-semibold">1. Service Delivery</h2>
          <p>
            Upon successful payment, access to the purchased plan is granted instantly.
          </p>

          <h2 className="font-semibold">2. Delivery Method</h2>
          <p>
            All services are delivered electronically via the user dashboard.
          </p>

          <h2 className="font-semibold">3. Delays</h2>
          <p>
            In rare cases of technical issues, access may be delayed. Our team will
            resolve such issues promptly.
          </p>

          <h2 className="font-semibold">4. Contact</h2>
          <p>For any delivery-related concerns, contact support@adcampin.com.</p>
        </div>
      </main>

      <Footer />
    </>
  );
}