export type TCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export default interface IGridContainerProps {
  cols: TCols;
  children: React.ReactNode;
  className?: string;
}
