import useLocalState from '@Hooks/useLocalState';
import { LOCAL_SAMPLE_STATE, LOCAL_SAMPLE_STRING } from '@SWR_Keys/local';
import Head from 'next/head';
import Link from 'next/link';

export default function Test2() {
  const { data } = useLocalState(LOCAL_SAMPLE_STATE);
  const { data: data_string } = useLocalState(LOCAL_SAMPLE_STRING);
  return (
    <>
      <Head>
        <title>test2</title>
      </Head>
      <div>{data}</div>
      <div>{data_string}</div>
      <Link href={'/localStateTest'}>test1</Link>
    </>
  );
}
