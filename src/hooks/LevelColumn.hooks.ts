/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

type childrenType = Record<string | 'child', unknown>;

export default function useDeepLevel({
  rows,
  child
}: {
  rows: object;
  child: childrenType[];
}) {
  const [deepLevel, setDeepLevel] = useState<number>(0);
  const [lastDeepLevel, setLastDeepLevel] = useState<number>(0);

  let level = 0;
  let lastLevel = 0;

  const getDeep = (child: childrenType[]) => {
    child.forEach((item: childrenType) => {
      level = level + 1;
      setDeepLevel(level);

      getDeep(item.child as childrenType[]);
    });
  };

  const getLastDeep = (child: childrenType[]) => {
    lastLevel = lastLevel + child.length;
    setLastDeepLevel(lastLevel);

    child.forEach((item: childrenType) => {
      getLastDeep(item.child as childrenType[]);
    });
  };

  useEffect(() => {
    level = 0;
    lastLevel = 0;
    if (child.length !== 0) {
      getDeep(child);
      getLastDeep(child[child.length - 1].child as childrenType[]);
    }
  }, [rows]);

  return [deepLevel, lastDeepLevel];
}
