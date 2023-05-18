import Image from "next/image";
import Banner from "../../banner";
import hero from "./hero.webp";

export default function Startup() {
  return (
    <div className="bg-white text-black pt-4 min-h-screen">
      <Banner />
      <main className="flex flex-col lg:flex-row gap-4">
        <div className="pl-4 m-auto flex flex-col justify-center gap-4 md:gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Lorem ipsum dolor
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              sit amet.
            </span>
          </h1>
          <p className="text-sm sm:text-base font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa
            omnis quod maiores? Voluptatum, iure!
          </p>
          <div className="flex justify-start items-center gap-4 max-w-md w-full">
            <button className="px-5 py-2 shadow-lg bg-emerald-700 border border-emerald-700 hover:bg-transparent transition-all rounded-full">
              Lorem ipsum dolor sit amet.
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800">
              Lorem, ipsum.
            </button>
          </div>
        </div>
        <Image
          src={hero}
          alt="hero image"
          priority
          className="object-cover max-h-80 lg:w-1/2 lg:max-h-[580px] lg:rounded-l-lg"
        />
      </main>
      <section>
        
      </section>
    </div>
  );
}
