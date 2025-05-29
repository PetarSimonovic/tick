import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
type PetriDishProps = {
    grid: CellState[][];
};
declare const PetriDish: ({ grid }: PetriDishProps) => import("react/jsx-runtime").JSX.Element;
export default PetriDish;
