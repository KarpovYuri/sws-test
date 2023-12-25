export interface IInput {
  equipmentCosts: number;
  estimatedProfit: number;
  overheads: number;
  rowName: string;
  salary: number;
}

export type TKeysInput = (keyof IInput)[];
