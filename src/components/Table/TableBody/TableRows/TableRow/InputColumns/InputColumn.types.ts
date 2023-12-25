export interface IInputColumnsProps {
  setEditableRow: React.Dispatch<React.SetStateAction<number>>;
  setIsEditRow: React.Dispatch<React.SetStateAction<boolean>>;
  isEditRow: boolean;
  editableRow: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: any;
}

export interface IInput {
  equipmentCosts: number;
  estimatedProfit: number;
  overheads: number;
  rowName: string;
  salary: number;
}

export type TKeysInput = (keyof IInput)[];
