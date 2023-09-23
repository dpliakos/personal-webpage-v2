import React from "react";

interface ExternalLinkProps {
  href: string;
  title?: string;
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const ExternalLink: React.FC<ExternalLinkProps> = (props) => {
  return (
    <a href={props.href} className={props.className} target="_blank" rel="noopener noreferrer" title={props.title}>
      { props.children }
    </a>
  );
}
