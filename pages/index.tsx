import axios from 'axios';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('home');
    // axios.get('https://hcp-bpcp-backend-mvp.bpcp.kubepia.net/api/v1/todos/48');
  }, []);

  const onclick = () =>
    axios.get('https://hcp-bpcp-backend-mvp.bpcp.kubepia.net/api/v1/todos/48');
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <button onClick={() => onclick()}>dd</button>
    </>
  );
}
