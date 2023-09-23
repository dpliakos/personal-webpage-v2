import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import React from 'react';
import "./page.css";


const Page = () => {
  return (
    <div>
      <div className="title-main__wrapper">
        <h1 className="title-main text-7xl font-bold"> @dpliakos </h1>
        <LineDecorative className="line-decorative" />
      </div>
      <p className="home-page__paragraphs mt-20">
        I&#39;m a software engineer who specializes in product development
      </p>
      <p className="home-page__paragraphs mt-10">
        I work with user-centric software solutions that bridge the gap between technology and real-world needs.
      </p>
      <p className="home-page__paragraphs mt-10">
        My passion lies in crafting software products that not only meet the highest technical standards but also deliver meaningful value to users.
      </p>
    </div>
  );
}

export default Page;
