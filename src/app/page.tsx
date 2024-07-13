"use client"
import { useEffect, useState } from "react";
import { CheckIcon } from '@heroicons/react/20/solid'
import Image from "next/image";

import AOS from 'aos'
const Images = [
  { name: require("../../public/assets/catregories/ecommerce1.png") }
]
export default function Home() {
  const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <main className="bg-white py-20 sm:py-24 md:py-24 ">

        {/****Who are we****** */}
        <section>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h3 className="text-2xl font-bold tracking-tight text-center
             text-gray-900" data-aos="fade-right" data-aos-delay="100">
                Who We Are
              </h3>
              <hr />
              <div className="mx-auto max-w-2xl rounded-3xl  ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">

                  <h3 className="text-2xl font-bold tracking-tight text-gray-900" data-aos="fade-right" data-aos-delay="100">
                    We offer modern solutions for growing your business
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600" data-aos="fade-right" data-aos-delay="200">
                    Your Trusted Partner in Software Development
                  </p>

                  <p className="mt-2 text-base leading-7 text-gray-600" data-aos="fade-right" data-aos-delay="200">
                    At Arinon.com, we are more than just a software development firm—we are your strategic partner in navigating the digital landscape. Our mission is to deliver innovative, tailor-made solutions that drive your business forward.
                  </p>
                  <div className="mt-10 flex items-center gap-x-4" data-aos="fade-right" data-aos-delay="300">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>

                  <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
                    <div className="flex justify-center rounded-lg border border-dashed
                       border-gray-900/25 px-6 py-2 bg-white"
                       data-aos="fade-right" data-aos-delay="100">
                      <p className="text-left text-base leading-7 text-gray-600">
                        <span className="rounded-3xl ring-1 ring-red-800 px-2 py-1">Innovators</span>

                        <span className="px-2">
                          We harness the power of cutting-edge technology to develop software that stands at the forefront of industry standards.

                        </span>
                      </p>
                    </div>

                    <div className="flex justify-center rounded-lg border border-dashed
                    bg-white border-gray-900/25 px-6 py-2 "
                    data-aos="fade-right" data-aos-delay="200">
                      <p className="text-left text-base leading-7 text-gray-600">
                        <span className="rounded-3xl ring-1 ring-red-800 px-2 py-1">Problem Solvers</span>
                        <span className="px-2">
                          Complex challenges inspire us. We thrive on finding efficient, effective solutions that address your unique business needs

                        </span>
                      </p>
                    </div>

                    <div className="flex justify-center rounded-lg border 
                    bg-white border-dashed border-gray-900/25 px-6 py-2"
                    data-aos="fade-right" data-aos-delay="300">
                      <p className="text-left text-base leading-7 text-gray-600">
                        <span className="rounded-3xl ring-1 ring-red-800 px-2 py-1">Collaborators</span>
                        <span className="px-2">
                          Your success is our success. We work closely with you at every stage of the project to ensure we deliver value and exceed your expectations.
                        </span>
                      </p>
                    </div>

                    <div className="flex justify-center rounded-lg border border-dashed
                     bg-white border-gray-900/25 px-6 py-2" 
                     data-aos="fade-right" data-aos-delay="400">
                      <p className="text-left text-base leading-7 text-gray-600">
                        <span className="rounded-3xl ring-1 ring-red-800 px-2 py-1">Quality Enthusiasts</span>

                        <span className="px-2">Excellence is in our DNA. We are committed to producing robust, reliable, and scalable software that performs flawlessly.
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center rounded-lg border border-dashed 
                    bg-white border-gray-900/25 px-6 py-2"
                    data-aos="fade-right" data-aos-delay="500">
                      <p className="text-left text-base leading-7 text-gray-600 px-2">
                        <span className="rounded-3xl ring-1 ring-red-800 px-2 py-1">Future-Ready</span>
                        <span className="px-2">We stay ahead of the curve by continuously evolving our skills and embracing the latest technological advancements to keep you competitive
                        </span>
                      </p>
                    </div>
                  </div>

                </div>
                <div className="lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0" data-aos="zoom-in">
                  <div className="  text-center lg:flex lg:flex-col lg:justify-center lg:py-2">
                    <div className="mx-auto max-w-sm">
                      <Image className="object-cover h-full rounded-2xl" src={Images[0].name} alt="" />
                      <a
                        href="#"
                        className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get Started..
                      </a>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* this is main section */}
        <section>
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">

                  <h3 className="text-2xl font-bold tracking-tight text-gray-900" data-aos="fade-right" data-aos-delay="100">
                    We offer modern solutions for growing your business
                  </h3>

                  <p className="mt-6 text-base leading-7 text-gray-600" data-aos="fade-right" data-aos-delay="200">
                    Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                    repellendus etur quidem assumenda.
                  </p>

                  <div className="mt-10 flex items-center gap-x-4" data-aos="fade-right" data-aos-delay="300">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </div>

                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0" data-aos="zoom-in">
                  <div className="rounded-xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <Image className="object-cover h-full rounded-2xl" src={Images[0].name} alt="" />
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get Started..
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/** Our service Secton */}
        <section className="lg:grid grid-cols-3 py-2">

          <div className="bg-white" data-aos="zoom-in">
            <div className="mx-auto max-w-7xl px-3 lg:px-8">
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get access
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white" data-aos="zoom-in">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get access
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white" data-aos="zoom-in">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                      </p>
                      <a
                        href="#"
                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Get access
                      </a>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

    </>
  )
}



