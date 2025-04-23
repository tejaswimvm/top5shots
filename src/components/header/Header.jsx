export default function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white py-10 px-4 sm:px-8 text-center lg:text-left lg:h-full flex flex-col justify-center items-center lg:items-start shadow-lg mt-10">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-extrabold tracking-wide animate-fade-in">
          Welcome to <span className="text-blue-400">Top5shots</span>
        </h1>
        <h2 className="text-xl mt-4 opacity-80 font-serif">
          Top5 best services & products for you
        </h2>
      </div>
    </header>
  );
}
