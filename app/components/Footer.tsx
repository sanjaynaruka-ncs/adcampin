export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo / About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              AdCampin
            </h3>

            <p className="text-gray-400">
              AI-powered platform to generate high-converting ad campaigns
              in seconds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Product
            </h4>

            <ul className="space-y-2">
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Start Free Trial</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-2">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} AdCampin. All rights reserved.
        </div>

      </div>

    </footer>
  );
}