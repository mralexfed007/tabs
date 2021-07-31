import React, { useState } from "react";
import { TabType } from '../../tab-list';
import { Content } from "../content";
import { Tab } from "../tab/tab";

interface Props {
  options: Array<TabType>;
  value: TabType;
}

export const Tabs: React.FunctionComponent<Props> = ({options, value}): JSX.Element => {
  const [currentTab, setCurrentTab] = useState(value);

  type label = {
    label: string
  }

  const renderTabComponent: React.FunctionComponent<label> = ({label}): JSX.Element => {
    return (
      <div>{label}</div>
    )
  }
return (
  <div className="container">
    <div className="tabs">
    {options.map(tab => (
      <Tab renderTab={renderTabComponent} onChange={setCurrentTab} value={tab} currentTab={currentTab}/>
    ))}
    </div>
    <Content id={currentTab.value}/>
  </div>
)
}
