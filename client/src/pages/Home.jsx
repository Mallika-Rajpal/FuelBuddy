// client/src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          FuelBuddy
        </h1>
        <p className="text-lg mb-8 text-gray-300">
          On-demand fuel delivery at your location. Fast. Safe. Hassle-free.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 transition">
            Request Fuel
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 hover:border-white transition">
            Track Request
          </button>
        </div>
      </div>
    </div>
  );
}
