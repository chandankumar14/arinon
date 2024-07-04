"use client"
import { useEffect, useState } from "react";
import { } from "../../public/assets/Icons/AI_ML.png"
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, } from '@headlessui/react'
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon, } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
const products = [
  { name: 'Logistics', description: 'Get a better understanding ', href: '#', icon: ChartPieIcon },
  { name: 'Healthcare', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Education', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Finance and banking', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Internet of things(IOT)', description: 'Get a better understanding', href: '#', icon: ArrowPathIcon },
  { name: 'Education', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Finance and banking', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  { name: 'Internet of things(IOT)', description: 'Get a better understanding', href: '#', icon: ArrowPathIcon },
]
const Services = [
  { name: "AI ML", Icon: require("../../public/assets/Icons/AI_ML.png") },
  { name: "AR VR", Icon: require("../../public/assets/Icons/AR_VR.png") },
  { name: "Block Chain", Icon: require("../../public/assets/Icons/blockchain.png") },
  { name: "Cloud Computing", Icon: require("../../public/assets/Icons/cloud-computing.png") },
  { name: "Cyber Security", Icon: require("../../public/assets/Icons/cyber-security.png") },
  { name: "Devops", Icon: require("../../public/assets/Icons/devops.png") },
  { name: "Mobile Development", Icon: require("../../public/assets/Icons/mobile-development.png") },
  { name: "MVP Development", Icon: require("../../public/assets/Icons/mvp_development.png") },
  { name: "Web Development", Icon: require("../../public/assets/Icons/webDevelopment.png") },
  { name: "Project Management", Icon: require("../../public/assets/Icons/project-management.png") },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main>
      <header className="bg-gray-50 fixed top-0 w-full h-20  shadow-md z-10">
        <nav className="mx-auto flex max-w-7xl items-center p-3 lg:px-8" aria-label="Global">
          <div className="px-10 lg:flex-2">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 ring-0 text-sm font-semibold leading-6 text-gray-900">
                Industries
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full z-10 mt-4 w-screen  overflow-hidden rounded-xl
                 bg-gray-100 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 
                 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 
                 data-[enter]:ease-out data-[leave]:ease-in float-start"
              >
                <div className="lg:grid grid-cols-3">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </PopoverPanel>
            </Popover>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 ring-0 text-sm font-semibold leading-6 text-gray-900">
                Services
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full z-10 mt-4 w-screen  overflow-hidden rounded-xl
                 bg-gray-50 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 
                 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 
                 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4 lg:grid grid-cols-3 sm:grid-cols-3 float-start">
                  {Services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-300"
                    >
                      <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <Image src={item.Icon} alt="" className="h-16 w-16 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href="" className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">Description Description</p>
                      </div>
                    </div>
                  ))}
                </div>

              </PopoverPanel>
            </Popover>


            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </a>

            <a href="" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Our Values
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Portfolio
            </a>

            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </a>

          </div>

        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    WHAT'S NEW
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    SALWAR KAMEEZ
                  </a>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    SAREES
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    LEHENGA
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    GOWNS
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    MEN'S WEAR
                  </a>
                </div>

              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </main>
  )

}