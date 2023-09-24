import React from "react";
import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import "./page-header.css";

interface PageHeaderProps {
  title: string;
  signatureLine?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="title-main__wrapper-outer">
      <span className="title-main__wrapper-inner">
        <h1 className="title-main text-5xl md:text-7xl font-bold mb-20"> {props.title} </h1>
        { props.signatureLine && <LineDecorative className="line-decorative"/> }
      </span>
    </div>
  );
}
