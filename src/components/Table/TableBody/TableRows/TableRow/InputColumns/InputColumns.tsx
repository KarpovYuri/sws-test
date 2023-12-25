import { useState } from 'react';
import { useUpdateRowMutation } from '../../../../../../redux';
import { ErrorMessage } from '../../../../../ErrorMessage';
import './InputColumns.style.sass';
import { IInputColumnsProps, IInput, TKeysInput } from './InputColumn.types';

const columns: TKeysInput = [
  'rowName',
  'salary',
  'equipmentCosts',
  'overheads',
  'estimatedProfit'
];

export function InputColumns({
  row,
  setEditableRow,
  setIsEditRow,
  isEditRow,
  editableRow
}: IInputColumnsProps) {
  const [updateRow, { isError }] = useUpdateRowMutation();
  const [inputValue, setInputValue] = useState<IInput>({
    rowName: row.rowName,
    salary: row.salary,
    equipmentCosts: row.equipmentCosts,
    overheads: row.overheads,
    estimatedProfit: row.estimatedProfit
  });

  const rowData = {
    equipmentCosts: Number(inputValue.equipmentCosts),
    estimatedProfit: Number(inputValue.estimatedProfit),
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    overheads: Number(inputValue.overheads),
    rowName: inputValue.rowName,
    salary: Number(inputValue.salary),
    mimExploitation: 0,
    supportCosts: 0,
    rId: row.id
  };

  const handleUpdateRow = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key !== 'Enter') {
      return;
    }
    await updateRow(rowData).unwrap();
    setIsEditRow(false);
  };

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      {columns.map((key) => {
        return (
          <div
            onDoubleClick={() =>
              editableRow !== row.id
                ? setEditableRow(row.id)
                : setIsEditRow(!isEditRow)
            }
            className="cell"
            key={key}
          >
            <input
              key={key}
              type="text"
              className="input"
              name={key}
              value={inputValue[key]}
              disabled={!isEditRow}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue({ ...inputValue, [key]: event.target.value });
              }}
              onKeyDown={handleUpdateRow}
            />
          </div>
        );
      })}
    </>
  );
}
