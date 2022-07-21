/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import Logo from '../assets/square-logo.svg';
import Image from 'next/image';

export interface HeroProps {
  title?: string;
}

export const Hero: React.FC<HeroProps> = (
  { title } = { title: 'A simple Tailiwind template' }
) => {
  return (
    <>
      <div className="mx-auto flex h-60 w-60 flex-col items-center justify-center">
        <a href="https://www.elitizon.com" hrefLang="en">
          <Logo />
        </a>
      </div>

      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <h1 className="title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
            {title}
          </h1>
          <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
            <div className="flex p-4 md:w-1/3">
              <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Cat
                </h2>
                <p className="text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer non suscipit metus. Donec laoreet nunc eget velit
                  imperdiet ullamcorper. Sed aliquam urna massa, id semper ante
                  viverra eu. Ut condimentum ex dui, et congue felis faucibus
                  id. Maecenas eget tempor elit. Morbi sapien dui, tincidunt et
                  vestibulum sit amet, imperdiet feugiat eros. Proin eget
                  efficitur diam, nec pharetra sapien.
                </p>
                <a
                  className="mt-3 inline-flex items-center text-pink-500"
                  href="/"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex p-4 md:w-1/3">
              <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Elephant
                </h2>
                <p className="text-base leading-relaxed">
                  Vestibulum tempus metus vestibulum rhoncus porta. Duis
                  fringilla finibus odio pretium fermentum. Vestibulum dictum,
                  nisl in suscipit tristique, libero ligula convallis dui, et
                  scelerisque orci neque ac lorem. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Nunc at purus sed dui gravida lacinia nec vel dolor.
                  Proin at nulla lacus. In in vestibulum nulla. Nulla fringilla
                  sagittis rhoncus.
                </p>
                <a
                  className="mt-3 inline-flex items-center text-pink-500"
                  href="/"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex p-4 md:w-1/3">
              <div className="mb-4 inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                  Lion
                </h2>
                <p className="text-base leading-relaxed">
                  Donec vel ultrices ante, in feugiat felis. Quisque pretium
                  turpis ac sapien interdum fermentum. Phasellus vel lacus elit.
                  Sed id quam ut ante aliquet tristique. Morbi commodo aliquam
                  porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Phasellus dignissim felis vitae euismod eleifend.
                </p>
                <a
                  className="mt-3 inline-flex items-center text-pink-500"
                  href="/"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
