import { LocalStateKey } from '@SWR_Keys/local';
import useSWR from 'swr';
export default function useLocalState(localStateKey: LocalStateKey) {
  const { data, mutate } = useSWR(
    localStateKey[0],
    () => window.state[localStateKey[0]]
  );

  return {
    data: data !== undefined ? data : localStateKey[1],
    mutate: (value) => {
      window.state[localStateKey[0]] = value;
      return mutate();
    },
  };
}
