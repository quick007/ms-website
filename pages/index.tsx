import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";
import { CheckCircleIcon, LightningBoltIcon, MicrophoneIcon } from "@heroicons/react/solid";

const Home: NextPage = () => {
  return (
    <>
      <div className="h-screen relative flex flex-col bg-black">
        <div className="absolute inset-0 z-0 bg-gray-500 brightness-[0.25] h-screen blur-sm">
          <img
            src="/server.png"
            alt=""
            className=" object-cover w-full h-screen"
          />
        </div>
        <Navbar sticky={false} bg={false} />
        <section className="flex-1 flex items-center justify-between z-10 text-gray-200 max-w-screen-lg mx-auto w-full">
          <div>
            <h2 className="text-gray-50 text-5xl font-bold max-w-md">
              4 Word Attention Grabber
            </h2>
            <div className="rounded bg-black/20 border border-white/5 p-4 backdrop-blur-xl max-w-sm text-lg mt-6">
              SHORTEN ME! Here we provide web-based services like online radio
              hosting, website hosting, cloud storage, and more! We also love to
              help out the community and we are all about supporting events,
              creators, charities, and more! Join our discord and find out how
              we can help improve your goal.
            </div>
            <div className="flex mt-8">
              <a
                href="#services"
                className="px-8 py-1.5 rounded bg-white text-lg font-semibold text-gray-800 border hover:bg-black/75 hover:text-gray-100 transition duration-200"
              >
                Services
              </a>
              <a
                href="https://discord.gg/3p7tmbvSyQ"
                target="_blank"
                className="ml-4 px-8 py-1.5 text-lg font-semibold text-gray-300 hover:text-gray-100 rounded bg-black/20 hover:bg-black/75 border transition duration-200 border-white/5 backdrop-blur-xl"
              >
                Discord
              </a>
            </div>
          </div>
          <div></div>
        </section>
      </div>
      <div className="bg-gray-50 text-gray-700">
        <div className="bg-gradient-to-bl from-blue-500 to-blue-400 ">
          <div className="bg-gray-50 diag-bottom h-32 w-full mt-20"></div>
          <div className=" flex flex-col ">
            <h2
              className="text-4xl font-bold text-gray-800 mx-auto"
              id="about-us"
            >
              About Us
            </h2>
            <p className="max-w-lg text-center mx-auto text-lg mt-4">
              Our goal here is to provide cheap hosting to communities and
              individuals. Unfortunately, these communities sometimes end up
              getting abandoned/destroyed, usually due to a troublesome team,
              lack of organization, management, and insufficient finances. Our
              goal is to help comminutes get started by providing them services
              like website hosting, game server hosting, radio/podcast hosting,
              and more at the right price. Hopefully eliminating the heavy costs
              for the community/individual so they can focus on what they are
              there to achieve.{" "}
            </p>
            <a
              href="#services"
              className="px-8 py-1.5 mx-auto mt-4 rounded bg-white text-lg font-semibold text-gray-800 border hover:bg-gray-800 hover:text-gray-100 transition duration-200"
            >
              Learn More
            </a>
          </div>
          <div className="bg-gray-50 diag-top h-32 w-full mb-20"></div>
        </div>
        <div className="my-36 mx-auto max-w-screen-lg w-full flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mx-auto">
            Meet the Team
          </h2>
          stuff here
        </div>
        <div className="my-36 mx-auto max-w-screen-lg w-full flex flex-col">
          <h2 className="text-4xl font-bold text-gray-800 mx-auto">Pricing</h2>
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col">
              <div className="rounded-full px-4 bg-green-500 text-white font-medium mx-auto mb-2 shadow-md shadow-green-500/25">Featured</div>
              <div className="rounded-md bg-white shadow-black/20 p-4 backdrop-blur-xl max-w-sm shadow-lg hover:shadow-xl hover:shadow-black/25 transition duration-200 flex items-center flex-col  group cursor-pointer">
                <div className="rounded-full h-8 mx-auto my-2 w-8 bg-teal-600 flex items-center justify-center">
                  <MicrophoneIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Radio and Podcast Hosting</h3>
                <p className="text-sm text-gray-600 font-semibold">
                  <span className="text-lg text-gray-800">99$</span> / month
                </p>
                <ol className="flex flex-col items-center mt-8 space-y-3 ">
                  <li className=" flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-1 text-green-600" />
                    10 GB Storage
                  </li>
                  <li className=" flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-1 text-green-600" />
                    24 Hour Discord/Email Support
                  </li>
                  <li className=" flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-1 text-green-600" />
                    Watermark Free
                  </li>
                </ol>
                <a
                  href="#services"
                  className="px-8 py-1.5 mx-auto mt-8 rounded bg-white font-semibold text-gray-800 border border-gray-600 group-hover:bg-gray-800 group-hover:text-gray-100 transition duration-200"
                >
                  Select Plan
                </a>
              </div>
            </div>
            <div className="flex flex-col -translate-y-6">
              <div className="rounded-full px-4 bg-blue-500 text-white font-medium mx-auto mb-2 shadow-md shadow-blue-500/25">Coming Soon</div>
              <div className="rounded-md bg-white shadow-black/20 p-4 backdrop-blur-xl max-w-sm shadow-lg hover:shadow-xl hover:shadow-black/25 transition duration-200 flex items-center flex-col  group cursor-pointer">
                <div className="rounded-full h-8 mx-auto my-2 w-8 bg-[#5865F2] flex items-center justify-center">
                  <LightningBoltIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Discord Bot Hosting</h3>
                <p className="text-sm text-gray-600 font-semibold">
                  <span className="text-lg text-gray-800">99$</span> / month
                </p>
                <ol className="flex flex-col items-center mt-8 space-y-3 ">
                  <li className=" flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-1 text-green-600" />
                    10 GB Storage
                  </li>
                  <li className=" flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-1 text-green-600" />
                    24 Hour Discord/Email Support
                  </li>
                  <li className=" flex items-center">
                    <CheckCircleIcon className="w-5 h-5 mr-1 text-green-600" />
                    Watermark Free
                  </li>
                </ol>
                <a
                  href="#services"
                  className="px-8 py-1.5 mx-auto mt-8 rounded bg-white font-semibold text-gray-800 border border-gray-600 group-hover:bg-gray-800 group-hover:text-gray-100 transition duration-200"
                >
                  Select Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
