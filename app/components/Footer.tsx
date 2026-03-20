export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-5 gap-10">

          {/* Logo / About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              AdCampin
            </h3>

            <p className="text-gray-400">
              AI-powered platform to generate high-converting ad campaigns
              in seconds.
            </p>

            {/* SEO brand reinforcement */}
            <p className="text-gray-500 text-sm mt-4">
              AdCampin helps businesses create Facebook Ads, Google Ads,
              Instagram Ads and LinkedIn Ads using AI-powered campaign generation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Product
            </h4>

            <ul className="space-y-2">
              <li>
                <a href="/pricing" className="hover:text-blue-400 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="/login" className="hover:text-blue-400 transition">
                  Login
                </a>
              </li>

              <li>
                <a href="/signup" className="hover:text-blue-400 transition">
                  Start Free Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Legal
            </h4>

            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </a>
              </li>

              {/* ✅ NEW */}
              <li>
                <a href="/refund-policy" className="hover:text-blue-400 transition">
                  Refund Policy
                </a>
              </li>

              <li>
                <a href="/shipping-policy" className="hover:text-blue-400 transition">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Social
            </h4>

            <ul className="space-y-2">

              <li>
                <a
                  href="https://www.youtube.com/@AdCampIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  YouTube
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/adcamp.india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/107494017/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/adcampin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/AdCampIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  X (Twitter)
                </a>
              </li>

              <li>
                <a
                  href="https://in.pinterest.com/adcampin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Pinterest
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} AdCampin. All rights reserved.
        </div>

      </div>

    </footer>
  );
}