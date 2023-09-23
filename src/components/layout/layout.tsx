import React from "react";
import "./layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ( props ) => {

  return (
    <div className="layout m-5">
      <div className="layout__inner">
        { props.children }
      </div>
    </div>
  );
}
