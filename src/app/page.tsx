"use client"
import { useEffect, useState } from "react";
import { CheckIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import "./globals.css";

import AOS from 'aos'
const Images = [
  { name: require("../../public/assets/catregories/ecommerce1.png") }
]
export default function Home() {
  const includedFeatures = [
    'Innovators',
    'Problem Solvers',
    'Collaborators',
    'Quality Enthusiasts',
    "Future-Ready",
    "Integrity",
    "Commitment",
    "Innovation",
    "Customer-Centric"
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

              <div className="mx-auto max-w-2xl rounded-3xl  ring-gray-200  lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <h3 className="text-2xl font-bold tracking-tight" data-aos="fade-right" data-aos-delay="100">
                    We offer modern solutions for growing your business
                  </h3>
                  <p className="mt-2 text-base leading-7" data-aos="fade-right" data-aos-delay="200">
                    Your Trusted Partner in Software Development
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600" data-aos="fade-right" data-aos-delay="200">
                    At Arinon.com, we are more than just a software development firm—we are your strategic partner in navigating the digital landscape. Our mission is to deliver innovative, tailor-made solutions that drive your business forward.
                  </p>
                </div>
                <div className="lg:mt-0 lg:w-86 lg:max-w-md lg:flex-shrink-0" data-aos="zoom-in">
                  <div className="text-center lg:flex lg:flex-col lg:justify-center lg:py-2">
                    <div className="mx-auto max-w-sm">
                      <Image className="object-cover h-full rounded-2xl w-fu" src={Images[0].name} alt="" />
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
              <div className="mx-auto mt-16 max-w-2xl  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">

                  <h3 className="text-2xl font-bold tracking-tight" data-aos="fade-right" data-aos-delay="100">
                    Software Development
                  </h3>

                  <p className="mt-6 text-base leading-7 text-gray-600" data-aos="fade-right" data-aos-delay="200">
                    We craft tailor-made software solutions designed to meet your unique business requirements. Our skilled developers leverage cutting-edge technologies to create scalable, secure,
                    and efficient applications that fuel your business growth.
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
                      <li key={feature} className="flex gap-x-3" data-aos="zoom-in">
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

        {/***What we do */}
        <section>
          <div className="bg-white">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl  sm:mt-2 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                  <div className="mt-1 flex items-center gap-x-4" data-aos="fade-right">
                    <div className="h-px flex-auto bg-gray-200" />
                    <h1 className="flex-none text-2xl font-bold tracking-tight">What we do</h1>
                    <div className="h-px flex-auto bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-3">
              <div className="col-span-2 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2">
                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">Web Development</h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">
                      From visually stunning websites to complex web applications,
                      we offer a full range of web development services.
                      Our solutions enhance your online presence with seamless
                      functionality and responsive designs that captivate your audience.</p>
                  </div>

                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">Mobile App Development</h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">Our team designs and builds intuitive,
                      high-performance mobile apps for both iOS and Android platforms. These user-friendly applications provide an outstanding user experience,
                      enabling you to stay connected with your customers anywhere, anytime</p>
                  </div>

                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">E-commerce Solutions </h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">Increase your online sales with our customized e-commerce solutions.
                      We develop secure, scalable, and user-friendly e-commerce platforms that offer a seamless shopping experience, driving higher conversion rates and customer satisfaction.</p>
                  </div>

                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">UX/UI Design </h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">Our creative designers focus on
                      crafting visually appealing and user-centric interfaces. We prioritize intuitive design principles to
                      create engaging,
                      easy-to-navigate applications that enhance the user experience.</p>
                  </div>

                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">Cloud Solutions </h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">Harness the power of the cloud with
                      our comprehensive cloud computing services. We provide cloud migration, integration, and management solutions that deliver greater flexibility,
                      scalability, and cost-effectiveness for your IT infrastructure</p>
                  </div>

                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">Data Analytics & Business Intelligence </h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">Unlock actionable insights with our data analytics and business intelligence services.
                      We help you make informed decisions through comprehensive data analysis, reporting,
                      and visualization solutions.</p>
                  </div>

                  <div className="card_design px-0 py-8 ml-3 mt-2 rounded-xl" data-aos="zoom-in">
                    <h1 className=" text-2xl font-bold tracking-tight">Maintenance & Support</h1>
                    <p className="text-justify px-4 text-base leading-7 text-gray-600">Our ongoing maintenance and support
                      services ensure your software and applications run smoothly. Our dedicated team is always ready to address
                      any issues, provide updates, and maintain optimal performance.</p>
                  </div>

                </div>
              </div>

              <div className="col-span-1">
                <div className="lg:mt-4 lg:w-full lg:max-w-md lg:flex-shrink-0" data-aos="zoom-in">
                  <div className="  text-center lg:flex lg:flex-col lg:justify-center lg:py-2">
                    <div className="mx-auto max-w-sm">
                      <Image className="object-cover h-full rounded-2xl md:mt-4" src={Images[0].name} alt="" />
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



