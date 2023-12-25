export interface IInputColumnsProps {
  setEditableRow: React.Dispatch<React.SetStateAction<number>>;
  setIsEditRow: React.Dispatch<React.SetStateAction<boolean>>;
  isEditRow: boolean;
  editableRow: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
}
