import Head from 'next/head';

import { Hero } from '../src/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Created with ❤️ by Elitizon Ltd</title>
      </Head>
      <Hero title="titleeeeee" />
    </>
  );
}
