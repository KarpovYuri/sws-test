export interface ITableRowProps {
  lineLevel: number;
  parentId: number | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
  editableRow: number;
  setEditableRow: React.Dispatch<React.SetStateAction<number>>;
}
