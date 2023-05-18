"use client";

import useIntersect from "@/src/hooks/useIntersect";
import Link from "next/link";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { clsx } from "@/src/utils/clsx";
import { ArrowDown, Menu as Bar, X } from "lucide-react";

const menu = [
  {
    name: "Landing Page",
    pages: [
      { name: "Startup", href: "/pages/startup" },
      { name: "Startup Two", href: "/pages" },
      { name: "App Launch", href: "/pages" },
      { name: "App Launch Two", href: "/pages" },
    ],
  },
  {
    name: "Dashboard Page",
    pages: [
      { name: "Analytics", href: "/pages" },
      { name: "Social Media", href: "/pages" },
      { name: "Project Management", href: "/pages" },
      { name: "Inventory Management", href: "/pages" },
    ],
  },
  {
    name: "Product Page",
    pages: [
      { name: "Product", href: "/pages" },
      { name: "Product Two", href: "/pages" },
      { name: "Product Three", href: "/pages" },
      { name: "Product Four", href: "/pages" },
    ],
  },
];

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isIntersecting = useIntersect({ ref });
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="md:container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className={`duration-200 text-2xl font-bold underline ${
              isIntersecting
                ? "text-zinc-300 hover:text-zinc-100"
                : "text-slate-950 hover:text-slate-700 "
            }`}
          >
            ismailyarar
          </Link>
          {/* MOBILE MENU */}
          <div className="block md:hidden">
            <button
              className="p-2"
              onClick={() => setMobileMenu(true)}
              aria-label="open main menu"
            >
              <Bar aria-hidden="true" />
            </button>
          </div>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenu}
            onClose={setMobileMenu}
          >
            <div className="fixed inset-0 z-[999]" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/">ismailyarar</Link>
                <button
                  className="p-2"
                  onClick={() => setMobileMenu(false)}
                  aria-label="close main menu"
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-500">
                  {menu.map((item) => (
                    <Disclosure key={item.name} as="div" className="mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="inline-flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                            {item.name}
                            <ArrowDown
                              className={clsx(
                                open ? "rotate-180" : "",
                                "duration-300"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 duration-300"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {item.pages.map((page) => (
                                <Disclosure.Button
                                  as={Link}
                                  href={page.href}
                                  key={page.name}
                                  className="block rounded-md py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {page.name}
                                </Disclosure.Button>
                              ))}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
          {/* DESKTOP MENU */}
          <div className="md:flex justify-between gap-8 hidden">
            {menu.map((item) => (
              <Menu
                key={item.name}
                as="div"
                className="relative inline-block text-left"
              >
                <Menu.Button className="inline-flex w-full items-center gap-x-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {item.name}
                  <ArrowDown className="w-6 h-6" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {item.pages.map((page) => (
                        <Menu.Item key={page.name}>
                          {({ active }) => (
                            <Link
                              href={page.href}
                              className={clsx(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {page.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
