export type TabType = {
  value: string;
  label: string;
}

enum ContentTypes {
  content1 = '1',
  content2 = '2'
}

export type ContentDependence = {
  id: ContentTypes;
  content: string;
}

export const contents: Array<ContentDependence> = [{id: ContentTypes.content1, content: 'Content 1'},
  {id: ContentTypes.content2, content: 'Content 2'}]
export const tabList: Array<TabType> = [{ value: '1', label: 'Tab One'}, { value: '2', label: 'Tab Two'}]
export const defaultTab: TabType = { value: '1', label: 'Tab One'}