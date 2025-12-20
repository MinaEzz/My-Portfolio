export default interface INavLinkProps {
  icon: React.ReactElement<{ className?: string; name?: string }>;
  label: string;
  href: string;
}
