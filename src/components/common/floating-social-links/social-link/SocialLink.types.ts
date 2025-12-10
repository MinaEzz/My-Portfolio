export default interface ISocialLinkProps {
  name: string;
  href: string;
  icon: React.ReactElement<{ className?: string; title?: string }>;
}
