import './InputColumns.style.sass';

const columns = [
  'rowName',
  'salary',
  'equipmentCosts',
  'overheads',
  'estimatedProfit'
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function InputColumns({ row }: any) {
  return (
    <>
      {columns.map((key) => {
        return (
          <div className="cell" key={key}>
            <input
              key={key}
              type="text"
              className="input"
              name={key}
              value={row[key]}
              disabled
            />
          </div>
        );
      })}
    </>
  );
}
