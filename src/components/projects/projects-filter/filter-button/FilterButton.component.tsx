"use client";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setSelected } from "@/lib/store/projects-filter/projectsFilter.slice";
import Button from "@/ui/button/Button.component";

export default function FilterButton({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const selected = useAppSelector((state) => state.projectsFilter.selected);
  const dispatch = useAppDispatch();
  const isSelected = selected === value;

  return (
    <Button
      variant={`${isSelected ? "default" : "outlined"}`}
      onClick={() => dispatch(setSelected(value))}
    >
      {label}
    </Button>
  );
}
