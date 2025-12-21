import IPageHeaderProps from "./PageHeader.types";

export default function PageHeader({ id, title, desc }: IPageHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h1 id={id} className="h2 uppercase text-white">
        {title}
      </h1>
      {desc && <p className="b2 text-white/80 capitalize max-w-xl">{desc}</p>}
    </div>
  );
}
