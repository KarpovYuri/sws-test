import { TableRow } from './TableRow';
import './TableRows.style.sass';

export function TableRows({ rows }: { rows: Record<string, unknown>[] }) {
  return (
    <>
      {rows.map((row, index) => (
        <TableRow key={index} lineLevel={0} parentId={null} row={row} />
      ))}
    </>
  );
}
