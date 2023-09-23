import React from 'react';
import {DecoratedList} from "@/components/decorated-list/decorated-list";
import {communityParticipation} from "@/content/community-participation";

const Page = () => {

  const listItems = communityParticipation.map(item => {
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
