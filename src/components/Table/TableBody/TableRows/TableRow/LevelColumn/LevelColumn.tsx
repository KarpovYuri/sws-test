/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from 'react';
import useDeppLevel from '../../../../../../hooks/LevelColumn.hooks';
import './LevelColumn.style.sass';

interface ILevelColumnProps {
  lineLevel: number;
  parentId: number | null;
  row: any;
  child: any;
}

export function LevelColumn({
  lineLevel,
  parentId,
  child,
  row
}: ILevelColumnProps) {
  const [deepLevel, lastDeepLevel] = useDeppLevel({ row, child });

  return (
    <div className="level-cell">
      <div
        style={{
          marginLeft: `${lineLevel * 20}px`
        }}
        className="level-cell__wrapper"
      >
        {parentId && <div className="level-cell__horizontal-line" />}
        <button className="level-cell__button" />

        {child &&
          child.map((_: unknown, index: Key | null | undefined) => (
            <div
              key={index}
              style={{
                height: `${60 * (deepLevel - lastDeepLevel) - 7}px`
              }}
              className="level-cell__vertical-line"
            />
          ))}
      </div>
    </div>
  );
}
