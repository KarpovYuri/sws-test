/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from 'react';
import { ErrorMessage } from '../../../../../ErrorMessage';
import {
  useDeleteRowMutation,
  useAddRowMutation
} from '../../../../../../redux';
import useLevelDepth from '../../../../../../hooks/useLevelDepth';
import { ILevelColumnProps } from './LevelColumn.types';
import './LevelColumn.style.sass';

export function LevelColumn({
  lineLevel,
  parentId,
  child,
  row,
  setEditableRow,
  setIsEditRow,
  isEditRow
}: ILevelColumnProps) {
  const [addRow, { isError }] = useAddRowMutation();
  const [deleteRow] = useDeleteRowMutation();
  const [levelDepth] = useLevelDepth({ row, child });

  const newRowData = {
    equipmentCosts: 0,
    estimatedProfit: 0,
    overheads: 0,
    parentId: row.id,
    rowName: 'Название',
    salary: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0
  };

  const handleAddRow = async () => {
    if (isEditRow) {
      return;
    }
    const result = await addRow(newRowData).unwrap();
    setEditableRow(result.current.id);
    setIsEditRow(true);
  };

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
          <button
            className="level-cell__button level-cell__button_record"
            onClick={() => handleAddRow()}
          />
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
