import { useState, useEffect } from 'react';

import { LevelColumn } from './LevelColumn';
import { InputColumns } from './InputColumns';
import { ITableRowProps } from './TableRow.types';
import './TableRow.style.sass';

export function TableRow(props: ITableRowProps) {
  const [isEditRow, setIsEditRow] = useState<boolean>(false);

  useEffect(() => {
    if (props.editableRow === props.row.id) {
      setIsEditRow(true);
    } else {
      setIsEditRow(false);
    }
  }, [props.editableRow, props.row.id]);

  return (
    <>
      <LevelColumn
        lineLevel={props.lineLevel}
        child={props.row.child}
        parentId={props.parentId}
        row={props.row}
      />
      <InputColumns
        row={props.row}
        setEditableRow={props.setEditableRow}
        setIsEditRow={setIsEditRow}
        isEditRow={isEditRow}
        editableRow={props.editableRow}
      />
      {props.row.child.length !== 0 &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props.row.child.map((item: any) => (
          <TableRow
            setEditableRow={props.setEditableRow}
            editableRow={props.editableRow}
            key={item.id}
            parentId={props.row.id}
            lineLevel={props.lineLevel + 1}
            row={item}
          />
        ))}
    </>
  );
}
