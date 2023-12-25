import { useState } from 'react';
import { TableRow } from './TableRow';
import './TableRows.style.sass';

export function TableRows({ rows }: { rows: Record<string, unknown>[] }) {
  const [editableRow, setEditableRow] = useState<number>(0);
  return (
    <>
      {rows.map((row) => (
        <TableRow
          key={row.id as string}
          lineLevel={0}
          parentId={null}
          row={row}
          setEditableRow={setEditableRow}
          editableRow={editableRow}
        />
      ))}
    </>
  );
}
