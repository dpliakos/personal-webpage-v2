import React from 'react';
import {DecoratedList} from "@/components/decorated-list/decorated-list";
import {jobRoles} from "@/content/job-roles";
import {ResetScale} from "@/components/utils/reset-scale/reset-scale";
import {PageHeader} from "@/components/page-header/page-header";


const Page = () => {

  const listItems = jobRoles.map(item => {
    return ({
      header: (
        <div className="mt-5">
          <span className=" text-lg font-bold"> {item.company} </span>: <span> {item.role} </span>
        </div>
      ),
      body: <span className="text-gray-400 text-sm"> {item.description} </span>
    });
  })

  return (
    <div>
      <PageHeader title="Experience" />
      <DecoratedList items={listItems} className="mt-10" />
      <ResetScale />
    </div>
  );
}

export default Page;
