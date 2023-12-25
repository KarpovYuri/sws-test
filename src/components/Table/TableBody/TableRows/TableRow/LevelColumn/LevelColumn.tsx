/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from 'react';
import { ErrorMessage } from '../../../../../ErrorMessage';
import { useDeleteRowMutation } from '../../../../../../redux';
import useLevelDepth from '../../../../../../hooks/useLevelDepth';
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
  const [deleteRow, { isError }] = useDeleteRowMutation();
  const [levelDepth] = useLevelDepth({ row, child });

  const handleDeleteRow = async (id: number) => {
    await deleteRow(id).unwrap();
  };

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className="level-cell">
      <div
        style={{
          marginLeft: `${lineLevel * 20}px`
        }}
        className="level-cell__wrapper"
      >
        <div className="level-cell__btn-wrp">
          <button className="level-cell__button level-cell__button_record" />
          <button
            className="level-cell__button level-cell__button_trash"
            onClick={() => handleDeleteRow(row.id)}
          />
        </div>
        {parentId && <div className="level-cell__horizontal-line" />}

        {child &&
          child.map((_: unknown, index: Key | null | undefined) => (
            <div
              key={index}
              style={{
                height: `${60 * levelDepth - 7}px`
              }}
              className="level-cell__vertical-line"
            />
          ))}
      </div>
    </div>
  );
}
