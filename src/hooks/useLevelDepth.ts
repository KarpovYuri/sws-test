/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

type childrenType = Record<string | 'child', unknown>;

export default function useLevelDepth({
  row,
  child
}: {
  row: object;
  child: childrenType[];
}) {
  const [levelDepth, setLevelDepth] = useState<number>(0);

  let level = 0;
  let lastLevel = 0;

  const getLevel = (child: childrenType[]) => {
    child.forEach((item: childrenType) => {
      level = level + 1;
      setLevelDepth(level - lastLevel);

      getLevel(item.child as childrenType[]);
    });
  };

  const getLastLevel = (child: childrenType[]) => {
    lastLevel = lastLevel + child.length;
    setLevelDepth(level - lastLevel);

    child.forEach((item: childrenType) => {
      getLastLevel(item.child as childrenType[]);
    });
  };

  useEffect(() => {
    level = 0;
    lastLevel = 0;
    if (child.length !== 0) {
      getLevel(child);
      getLastLevel(child[child.length - 1].child as childrenType[]);
    }
  }, [row]);

  return [levelDepth];
}
