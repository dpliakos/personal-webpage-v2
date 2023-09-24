'use client';

import React from "react";
import {Menu} from "react-feather";
import Link from "next/link";
import {navigationLinks} from "@/content/navigation-links";
import "./mobile-nav-bar.css";
import {Logo} from "@/components/logo/logo";
import {resetScale} from "@/components/utils/reset-scale/utils";

interface MobileNavBarProps {
}

export const MobileNavBar: React.FC<MobileNavBarProps> = (props) => {

  const [menuOpen, setMenuOpen] = React.useState(false);
  const links = navigationLinks.map(({ href, label }, i: number) => (
    <li key={`navbar-${i}`} className={`${i > 0 ? 'mt-2' : ''} pt-2 pb-2 list-none hover:color`}>
      <Link href={href} className="text-lg" onClick={() => resetScale()}> { label } </Link>
    </li>
  ));


  const handleClick = () => {
    resetScale(true);
  }

  return (
    <>
      <div className="header__bar">
        <div className="header__bar-burger-wrapper">
          <button className="header__bar-burger" onClick={handleClick}>
            <Menu />
          </button>
        </div>
        <div className="header__bar-logo-wrapper">
          <Logo  height={40} />
        </div>
      </div>
      <div className="header__bar-fs">
        <nav className="header__bar-fs-nav pl-10">
          { links }
        </nav>
      </div>
    </>
  );
}
