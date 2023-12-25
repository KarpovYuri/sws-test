/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILevelColumnProps {
  lineLevel: number;
  parentId: number | null;
  row: any;
  child: any;
  setEditableRow: React.Dispatch<React.SetStateAction<number>>;
  setIsEditRow: React.Dispatch<React.SetStateAction<boolean>>;
  isEditRow: boolean;
}
