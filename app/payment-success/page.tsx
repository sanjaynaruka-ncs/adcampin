export default function PaymentSuccessPage() {

  return (

    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b1b3b] to-black text-white">

      <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center max-w-lg">

        <h1 className="text-3xl font-bold mb-4">
          🎉 Payment Successful
        </h1>

        <p className="text-gray-300 mb-6">
          Your subscription has been activated successfully.
        </p>

        <a
          href="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
        >
          Go to Dashboard
        </a>

      </div>

    </main>

  );

}