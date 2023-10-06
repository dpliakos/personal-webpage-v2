import React from 'react';
import {personalStatements} from "@/content/personal-statements";
import {ResetScale} from "@/components/utils/reset-scale/reset-scale";
import {PageHeader} from "@/components/page-header/page-header";


const Page = () => {

  const paragraphs = personalStatements.map( (claim: string, i) => (
    <p className={`${i === 0 ? 'mt-20' : 'mt-10'} home-page__paragraph`} key={`claim-${i}`}>
      {claim}
    </p>
  ));

  return (
    <div>
      <PageHeader title="@dpliakos" signatureLine />
      {paragraphs}
      <ResetScale />
    </div>
  );
}

export default Page;
