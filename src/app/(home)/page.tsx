import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import React from 'react';
import "./page.css";

const claims: string[] = [
  'I\'m a software engineer who specializes in product development',
  'I work with user-centric software solutions that bridge the gap between technology and real-world needs.',
  'My passion lies in crafting software products that not only meet the highest technical standards but also deliver meaningful value to users.',
  'My expertise is software development, with a strong focus in back end services and operations.',
  'My main tool is javascript, but python and golang are always ready in my toolbox!',
];


const Page = () => {

  const paragraphs = claims.map( (claim: string, i) => (
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
