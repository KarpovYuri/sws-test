import { TableRows } from './TableRows';
import './TableBody.style.sass';

export function TableBody({ rows }: { rows: Record<string, unknown>[] }) {
  return (
    <>
      <TableRows rows={rows} />
    </>
  );
}
