import './InputColumns.style.sass';
import { IInputColumnsProps } from './InputColumn.types';

const columns = [
  'rowName',
  'salary',
  'equipmentCosts',
  'overheads',
  'estimatedProfit'
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function InputColumns({
  row,
  setEditableRow,
  setIsEditRow,
  isEditRow,
  editableRow
}: IInputColumnsProps) {
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
              value={row[key]}
              disabled={!isEditRow}
            />
          </div>
        );
      })}
    </>
  );
}
