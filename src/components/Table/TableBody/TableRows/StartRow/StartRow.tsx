import { useState } from 'react';
import { ErrorMessage } from '../../../../ErrorMessage';
import { useAddRowMutation } from '../../../../../redux';
import { IInput, TKeysInput } from './StartRow.types';
import './StartRow.style.sass';

const columns: TKeysInput = [
  'rowName',
  'salary',
  'equipmentCosts',
  'overheads',
  'estimatedProfit'
];

export function StartRow() {
  const [addRow, { isError }] = useAddRowMutation();
  const [inputValue, setInputValue] = useState<IInput>({
    equipmentCosts: 0,
    estimatedProfit: 0,
    overheads: 0,
    rowName: 'Название',
    salary: 0
  });

  const newRowData = {
    equipmentCosts: Number(inputValue.equipmentCosts),
    estimatedProfit: Number(inputValue.estimatedProfit),
    overheads: Number(inputValue.overheads),
    rowName: inputValue.rowName,
    salary: Number(inputValue.salary),
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0
  };

  const handleAddRow = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    await addRow(newRowData).unwrap();
  };

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <div className="cell-level"></div>

      {columns.map((key, index) => {
        return (
          <div className="cell-input" key={index}>
            <input
              type="text"
              value={inputValue[key]}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInputValue({ ...inputValue, [key]: event.target.value });
              }}
              onKeyDown={handleAddRow}
              className="cell-input__input"
            />
          </div>
        );
      })}
    </>
  );
}
