import React from "react";

export interface ISocialMedium {
  name: 'gitlab' | 'github' | 'linkedIn' | 'twitter' | 'mail';
  // icon: React.ReactNode;
  label: string;
  href: string;
}
