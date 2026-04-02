export default function LearnPlayLab() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <img
          src="/learnplaylab/learnplaylab-logo.webp"
          alt="Learn Play Lab"
          className="w-28 mx-auto mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">
          Learn Play Lab
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Indie app developer studio by AdCampin. Building simple, useful and engaging apps focused on learning, productivity and everyday use.
        </p>
      </div>

      {/* Apps Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* Mathuvo */}
        <div className="flex flex-col items-center text-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.mathuvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/learnplaylab/mathuvo.webp"
              alt="Mathuvo"
              className="w-28 rounded-xl shadow-lg hover:scale-105 transition"
            />
          </a>

          <h2 className="text-lg font-semibold">Mathuvo</h2>

          <p className="text-gray-400 text-sm px-4">
            A fun and interactive way for kids to practice maths with visuals, voice and quizzes.
          </p>

          <a
            href="/mathuvo/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Privacy Policy
          </a>
        </div>

        {/* Tic Tac Toe */}
        <div className="flex flex-col items-center text-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.tictactoe_new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/learnplaylab/tictactoe.webp"
              alt="Tic Tac Toe"
              className="w-28 rounded-xl shadow-lg hover:scale-105 transition"
            />
          </a>

          <h2 className="text-lg font-semibold">Tic Tac Toe</h2>

          <p className="text-gray-400 text-sm px-4">
            A clean and modern take on the classic Tic Tac Toe game with smooth gameplay.
          </p>

          <a
            href="/tic-tac-toe/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Privacy Policy
          </a>
        </div>

        {/* Lalify */}
        <div className="flex flex-col items-center text-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/learnplaylab/lalify.webp"
              alt="Lalify"
              className="w-28 rounded-xl shadow-lg hover:scale-105 transition"
            />
          </a>

          <h2 className="text-lg font-semibold">Lalify</h2>

          <p className="text-gray-400 text-sm px-4">
            Your AI-powered language teacher to learn faster with voice, visuals and interactive practice.
          </p>

          <a
            href="/lalify/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Privacy Policy
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm mt-20">
        © {new Date().getFullYear()} Learn Play Lab · Built by AdCampin
      </div>

    </div>
  );
}