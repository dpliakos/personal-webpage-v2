import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import React from 'react';
import "./page.css";
import {JobRole} from "@/models/job-role";
import {DecoratedList} from "@/components/decorated-list/decorated-list";

const experience: JobRole[] = [
  {
    company: 'efood',
    role: 'Software Engineer',
    description: 'Software development, Software architecture, DevOps',
  }, {
    company: 'Savium',
    role: 'Senior Software Engineer',
    description: 'Team lead, Software architecture, Software development, DevOps'
  }, {
    company: 'UniverSIS',
    role: 'Web Developer',
    description: 'Software development, DevOps, Interns\' Mentor',
  }, {
    company: 'OpenSCN',
    role: 'Founder',
    description: 'Team Lead, Product Development, Software architecture, Software Development, DevOps',
  }, {
    company: 'Bear In Mind',
    role: 'Web Developer',
    description: 'Software development, Team Lead',
  }, {
    company: 'Point Blank',
    role: 'Web Developer',
    description: 'Software development',
  }, {
    company: 'Google Summer Of Code',
    role: 'Participant',
    description: 'Student',
  }, {
    company: 'International Hellenic University',
    role: 'Student',
    description: 'Bachelor\'s degree',
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
        <h1 className="title-main text-7xl font-bold"> Experience </h1>
      </div>
      <DecoratedList items={listItems} className="mt-10" />
    </div>
  );
}

export default Page;
