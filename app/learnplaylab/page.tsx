import Image from "next/image";

export default function LearnPlayLab() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center text-center px-6 py-20">

      <Image
        src="/learnplaylab-logo.webp"
        alt="Learn Play Lab"
        className="w-32 mb-6"
      />

      <h1 className="text-4xl font-bold mb-6">
        Learn Play Lab
      </h1>

      <p className="text-gray-400 max-w-xl mb-6">
        Learn Play Lab is a mobile game studio by AdCampin focused on creating fun,
        educational, and engaging games for players of all ages.
      </p>

      <div className="flex flex-wrap justify-center gap-16 mt-10">

        {/* Mathuvo */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.mathuvo"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Image
              src="/mathuvo.webp"
              alt="Mathuvo"
              className="w-32 mb-6"
            />
          </a>

          <a
            href="/mathuvo/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Mathuvo – Privacy Policy
          </a>
        </div>

        {/* Tic Tac Toe */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.adcampin.tictactoe_new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/tictactoe.webp"
              alt="Tic Tac Toe"
              className="w-32 mb-6"
            />
          </a>

          <a
            href="/tic-tac-toe/privacy-policy"
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 text-sm"
          >
            Tic Tac Toe – Privacy Policy
          </a>
        </div>

      </div>

    </div>
  );
}