import React from "react";

export interface DecoratedListItemProps {
  header: React.ReactNode;
  body: React.ReactNode;
}

export const DecoratedListItem: React.FC<DecoratedListItemProps> = (props) => {
  return (
    <li className="decorated-list__item">
      { props.header }
      { props.body }
    </li>
  );
}
