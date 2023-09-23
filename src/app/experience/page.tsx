import {LineDecorative} from "@/app/(home)/line-decorative/line-decorative";
import React from 'react';
import "./page.css";
import {JobRole} from "@/models/job-role";
import {DecoratedList} from "@/components/decorated-list/decorated-list";
import {ResponsibilitiesEnum} from "@/models/responsibilities";

const experience: JobRole[] = [
  {
    company: 'efood',
    role: 'Software Engineer',
    description: [ResponsibilitiesEnum.sArchDev, ResponsibilitiesEnum.devops].join(', '),
  }, {
    company: 'Savium',
    role: 'Senior Software Engineer',
    description: [ResponsibilitiesEnum.tl, ResponsibilitiesEnum.pDev, ResponsibilitiesEnum.sArchDev, ResponsibilitiesEnum.devops].join(', '),
  }, {
    company: 'UniverSIS',
    role: 'Web Developer',
    description: [ResponsibilitiesEnum.sDev, ResponsibilitiesEnum.devops, ResponsibilitiesEnum.internMentor].join(', '),
  }, {
    company: 'OpenSCN',
    role: 'Founder',
    description: [ResponsibilitiesEnum.tl, ResponsibilitiesEnum.pDev, ResponsibilitiesEnum.sArchDev, ResponsibilitiesEnum.devops].join(', '),
  }, {
    company: 'Bear In Mind',
    role: 'Web Developer',
    description: [ResponsibilitiesEnum.sDev, ResponsibilitiesEnum.tl].join(', '),
  }, {
    company: 'Point Blank',
    role: 'Web Developer',
    description: ResponsibilitiesEnum.sDev,
  }, {
    company: 'Google Summer Of Code',
    role: 'Participant',
    description: ResponsibilitiesEnum.student,
  }, {
    company: 'International Hellenic University',
    role: 'Student',
    description: ResponsibilitiesEnum.bsc,
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
