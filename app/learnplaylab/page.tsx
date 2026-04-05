export default function LearnPlayLab() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <img
          src="/learnplaylab/learnplaylab-logo.webp"
          alt="Learn Play Lab"
          className="w-24 mx-auto mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn & Play Lab
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Building simple, useful and engaging apps focused on learning, AI and everyday productivity.
        </p>

        <div className="mt-6">
          <a
            href="https://play.google.com/store/apps/dev?id=6887834161998238049"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View My Apps
          </a>
        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-400">
          Learn Play Lab is a personal app studio by AdCampin focused on creating practical,
          easy-to-use apps that solve real problems. The goal is to build products that are
          simple, fast and actually useful in everyday life.
        </p>
      </div>

      {/* APPS */}
      <div id="apps" className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">

        {/* Mathuvo */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-white/20 transition">
          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.mathuvo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/learnplaylab/mathuvo.webp"
              alt="Mathuvo"
              className="w-24 rounded-xl shadow-lg hover:scale-105 transition"
            />
          </a>

          <h2 className="text-lg font-semibold">Mathuvo</h2>

          <p className="text-gray-400 text-sm">
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-white/20 transition">
          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.tictactoe_new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/learnplaylab/tictactoe.webp"
              alt="Tic Tac Toe"
              className="w-24 rounded-xl shadow-lg hover:scale-105 transition"
            />
          </a>

          <h2 className="text-lg font-semibold">Tic Tac Toe</h2>

          <p className="text-gray-400 text-sm">
            A clean and modern version of the classic Tic Tac Toe with smooth gameplay.
          </p>

          <a
            href="/tic-tac-toe/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Privacy Policy
          </a>
        </div>

        {/* Lalify */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-white/20 transition">
          <a href="https://play.google.com/store/apps/details?id=com.adcampin.lalify" target="_blank" rel="noopener noreferrer">
            <img
              src="/lalify.webp"
              alt="Lalify"
              className="w-24 rounded-xl shadow-lg hover:scale-105 transition"
            />
          </a>

          <h2 className="text-lg font-semibold">Lalify</h2>

          <p className="text-gray-400 text-sm">
            Your AI-powered language teacher to learn faster using voice, visuals and interactive practice.
          </p>

          <a
            href="/learnplaylab/lalify/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Privacy Policy
          </a>
        </div>

      </div>

      {/* TECH STACK */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
          <span className="bg-white/10 px-4 py-2 rounded-lg">Flutter</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">Next.js</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">Supabase</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">OpenAI</span>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">Philosophy</h2>
        <p className="text-gray-400">
          Focused on building simple, fast and practical apps instead of over-complicated solutions.
          The goal is to create products that people can actually use daily.
        </p>
      </div>

    </div>
  );
}