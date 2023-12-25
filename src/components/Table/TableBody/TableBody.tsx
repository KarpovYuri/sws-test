import { TableRows } from './TableRows';
import { StartRow } from './TableRows/StartRow';
import './TableBody.style.sass';

export function TableBody({ rows }: { rows: Record<string, unknown>[] }) {
  if (!rows.length) {
    return <StartRow />;
  }

  return (
    <>
      <TableRows rows={rows} />
    </>
  );
}
