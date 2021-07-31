import React from "react";
import { TabType } from '../../tab-list';
import cn from 'classnames';

type test = {
  label: string;
}

type func = React.FunctionComponent<test>;

interface Propss {
  renderTab: func;
  onChange: (value: TabType) => void;
  value: TabType;
  currentTab: TabType
}

export const Tab: React.FunctionComponent<Propss> = ({renderTab, onChange, value, currentTab}): JSX.Element => {
  return (
  <div
    onClick={() => onChange(value)}
    className={cn('tabs__tab', {
      'is-active': value.value === currentTab.value
    })}
  >
    {renderTab(value)}
  </div>)
}