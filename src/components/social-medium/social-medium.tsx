import {ISocialMedium} from "@/models/social-medium";
import React from "react";
import {ExternalLink} from "@/components/utils/external-link/external-link";
import {GitHub, Gitlab, Linkedin, Mail, Twitter} from "react-feather";

interface SocialMediumProps {
  target: ISocialMedium;
  className?: string;
}

const SupportedSocialMedia = {
  github: GitHub,
  gitlab: Gitlab,
  mail: Mail,
  twitter: Twitter,
  linkedIn: Linkedin
}

export const SocialMedium: React.FC<SocialMediumProps> = (props) => {

  const Icon = SupportedSocialMedia[props.target.name];
  return (
    <ExternalLink href={props.target.href} className={props.className} title={props.target.label}>
      <Icon />
    </ExternalLink>
  );
}
