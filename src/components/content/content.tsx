import React from "react";
import { contents, ContentDependence } from "../../tab-list";
type Props = {
  id: string;
}
export const Content: React.FunctionComponent<Props> = ({id}): JSX.Element => {
  const content: string = contents.find((content : ContentDependence) => content.id === id)?.content || ''
  return (
    <div className="tabs__tab__content">
      <h2>{content}</h2>
      
    </div>
  )
}