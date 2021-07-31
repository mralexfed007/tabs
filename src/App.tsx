import React from 'react';
import './App.sass';
import { Tabs } from './components/tabs/tabs';
import { tabList, defaultTab } from './tab-list';

function App() {
  return (
    <Tabs options={tabList} value={defaultTab}/>
  );
}

export default App;
