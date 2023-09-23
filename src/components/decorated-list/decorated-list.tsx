import React from 'react';
import {DecoratedListItem, DecoratedListItemProps} from "@/components/decorated-list/decorated-list-item";
import "./decorated-list.css";

interface DecoratedListProps {
  items: DecoratedListItemProps[];
  className?: string;
}

export const DecoratedList: React.FC<DecoratedListProps> = (props) => {

  const content = props.items.map((item, i) => (
    <DecoratedListItem
      key={`decorated-list-item-${i}`}
      header={item.header}
      body={item.body}
    />
  ));

  return (
   <ul className={props.className}>
     {content}
   </ul>
  );
}
