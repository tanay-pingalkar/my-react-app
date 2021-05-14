export type counterAction = {
  type: "add" | "sub";
};

export interface state {
  counter: number;
}
