import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import React from 'react';
import {JobRole} from "@/models/job-role";
import {DecoratedList} from "@/components/decorated-list/decorated-list";

const experience: JobRole[] = [
  {
    company: 'IEEE IHU Student Branch',
    role: 'Mentor',
    description: 'Community mentor, former member',
  }, {
    company: 'OpenSCN',
    role: 'Founder',
    description: 'Collaborative product and software development',
  }, {
    company: 'Lambda Space',
    role: 'Member',
    description: 'Events\' organizer & presenter, Hardware and software projects'
  }
];

const Page = () => {

  const listItems = experience.map(item => {
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
      <div className="title-main__wrapper">
        <h1 className="title-main text-7xl font-bold"> Community </h1>
      </div>
      <DecoratedList items={listItems} className="mt-10" />
    </div>
  );
}

export default Page;
