import Head from 'next/head';

import useLocalState from '@Hooks/useLocalState';
import { LOCAL_SAMPLE_STATE, LOCAL_SAMPLE_STRING } from '@SWR_Keys/local';
import Link from 'next/link';

function Test() {
  const { data } = useLocalState(LOCAL_SAMPLE_STATE);
  return <>{data}</>;
}

export default function Test1() {
  const { data, mutate } = useLocalState(LOCAL_SAMPLE_STATE);

  const { data: data_string, mutate: mutate_string } =
    useLocalState(LOCAL_SAMPLE_STRING);

  const handleInc = () => mutate(data + 1);
  const handleDec = () => mutate(data - 1);

  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div>
        <span>count: {data}</span>
        <button onClick={handleInc}>inc</button>
        <button onClick={handleDec}>dec</button>
      </div>
      <div>
        <Test />
      </div>
      <div>{data_string}</div>
      <div>
        <button onClick={() => mutate_string(data_string + 'a')}>add</button>
      </div>

      <Link href={'/localStateTest2'}>test2</Link>
    </>
  );
}
