import { LevelColumn } from './LevelColumn';
import { InputColumns } from './InputColumns';
import { ITableRowProps } from './TableRow.types';
import './TableRow.style.sass';

export function TableRow(props: ITableRowProps) {
  return (
    <>
      <LevelColumn
        lineLevel={props.lineLevel}
        child={props.row.child}
        parentId={props.parentId}
        row={props.row}
      />
      <InputColumns row={props.row} />
      {props.row.child.length !== 0 &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props.row.child.map((item: any) => (
          <TableRow
            key={item.id}
            parentId={props.row.id}
            lineLevel={props.lineLevel + 1}
            row={item}
          />
        ))}
    </>
  );
}
