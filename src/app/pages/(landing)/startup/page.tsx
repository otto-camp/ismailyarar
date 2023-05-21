import Image from "next/image";
import Banner from "../../banner";
import hero from "./hero.webp";
import Features from "./features";
import Testimonials from "./testimonial";
import {
  CalendarClock,
  Facebook,
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Startup() {
  return (
    <div className="bg-white text-black pt-4 min-h-screen grid gap-8">
      <Banner />
      <main className="flex flex-col lg:flex-row gap-4 container mx-auto">
        <div className="pl-4 m-auto flex flex-col justify-center gap-4 md:gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Lorem ipsum dolor
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-500 bg-clip-text text-transparent">
              sit amet.
            </span>
          </h1>
          <p className="text-sm sm:text-base font-medium max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa
            omnis quod maiores? Voluptatum, iure!
          </p>
          <div className="flex justify-start items-center gap-4 max-w-md w-full">
            <button className="px-5 py-2 shadow-lg bg-blue-700 border text-white hover:text-black border-blue-700 hover:bg-transparent transition-all rounded-lg">
              Lorem ipsum dolor sit amet.
            </button>
            {/* <button className="rounded-lg border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800">
              Lorem, ipsum.
            </button> */}
          </div>
        </div>
        <Image
          src={hero}
          alt="hero image"
          priority
          className="object-cover max-h-80 lg:w-1/2 lg:max-h-[580px] lg:rounded-l-lg"
        />
      </main>

      <section className="container mx-auto py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 object-contain lg:col-span-1"
              src="/vercel.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 object-contain lg:col-span-1"
              src="/vercel.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 object-contain lg:col-span-1"
              src="/vercel.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 object-contain sm:col-start-2 lg:col-span-1"
              src="/vercel.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 object-contain sm:col-start-auto lg:col-span-1"
              src="/vercel.svg"
              alt="Stat"
              width={158}
              height={48}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:py-12 bg-slate-200">
        <div className="container mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
              All-in-one platform
            </h2>
            <p className="text-zinc-700 max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laborum voluptas debitis magnam animi, maxime asperiores a,
              temporibus voluptates distinctio modi vitae
            </p>
          </div>
          <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Features />
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:py-12">
        <div className="container mx-auto space-y-8">
          <div className="max-w-lg mx-auto text-center space-y-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
              Boost your productivity.
            </h2>
            <p className="text-zinc-700 max-w-md mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              sed dolores quibusdam ut doloribus nostrum veniam aliquid
              eligendi, recusandae totam, harum iusto voluptate itaque? Placeat
              voluptate nam possimus iste magnam!
            </p>
            <button className="px-5 py-2 shadow-lg bg-blue-700 border text-white hover:text-black border-blue-700 hover:bg-transparent transition-all rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:py-12 bg-slate-200">
        <div className="container mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">
              Testimonials
            </h2>
            <p className="text-zinc-700 max-w-sm mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              laborum voluptas debitis magnam animi
            </p>
          </div>
          <div className="grid gird-cols-1 md:grid-cols-2 last:col-span-2 gap-4">
            <Testimonials />
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900">
        <div className="py-12 px-6 container mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="flex justify-center gap-4 order-2">
            <a href="#" className="text-blue-800">
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>
            <a href="#" className="text-blue-800">
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
            <a href="#" className="text-blue-800">
              <span className="sr-only">Twitter</span>
              <Twitter />
            </a>
            <a href="#" className="text-blue-800">
              <span className="sr-only">GitHub</span>
              <Github />
            </a>
            <a href="#" className="text-blue-800">
              <span className="sr-only">YouTube</span>
              <Youtube />
            </a>
          </div>
          <div className="mt-8 order-1 md:mt-0">
            <p className="text-sm text-center text-gray-800">
              © 2022 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
