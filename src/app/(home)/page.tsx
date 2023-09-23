import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import React from 'react';
import {personalStatements} from "@/content/personal-statements";
import "./page.css";


const Page = () => {

  const paragraphs = personalStatements.map( (claim: string, i) => (
    <p className="mt-10 home-page__paragraph" key={`claim-${i}`}>
      {claim}
    </p>
  ));

  return (
    <div>
      <div className="title-main__wrapper">
        <h1 className="title-main text-7xl font-bold mb-20"> @dpliakos </h1>
        <LineDecorative className="line-decorative" />
      </div>
      {paragraphs}
    </div>
  );
}

export default Page;
