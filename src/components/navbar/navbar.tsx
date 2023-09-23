import { INavLink } from "@/models/navlink";
import './navbar.css';
import {Logo} from "@/components/logo/logo";
import {ISocialMedium} from "@/models/social-medium";
import {SocialMedium} from "@/components/social-medium/social-medium";
import Link from "next/link";

interface NavbarProps {
  pages: INavLink[];
  socialMedia?: ISocialMedium[];
}

export const Navbar = (props: NavbarProps) => {

  const links = props.pages.map(({ href, label }, i: number) => (
    <li key={`navbar-${i}`} className="mt-2 list-none hover:color">
      <Link href={href} className="text-lg"> { label } </Link>
    </li>
  ));

  const socialMedia = props.socialMedia?.map((sm, i) => (
    <SocialMedium target={sm} key={`social-medium-${i}`} className="pl-2 pr-2 social-medium"/>
  ));

  return (
    <div className="h-full flex justify-end mr-10">
      <div className="text-end align-middle flex flex-col mt-auto mb-auto">
        <div className="flex justify-end">
          <Logo />
        </div>
        <div className="mt-10">
          <h3 className="text-4xl"> Dimitrios Pliakos </h3>
          <span className="text-xl"> Software Engineer <br /> Specializing in Product Development </span>
        </div>
        <div className="mt-10 flex justify-end spacing">
          { socialMedia }
        </div>
        <nav className="mt-10">
          { links }
        </nav>
      </div>
    </div>
  );
}
