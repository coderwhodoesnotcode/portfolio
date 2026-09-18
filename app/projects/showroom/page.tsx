export default function Showroom() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Showroom</h1>
      <p className="text-lg text-gray-600 mb-6">
        Lists of Cars
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-black text-white rounded-lg"
        >
          View
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-black rounded-lg"
        >
          Book
        </a>
      </div>
    </main>
  );
}