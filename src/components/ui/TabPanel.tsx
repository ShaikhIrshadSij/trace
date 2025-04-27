
interface TabPanelProps {
  id: string
  activeTab: string
  children: React.ReactNode
}

const TabPanel: React.FC<TabPanelProps> = ({ id, activeTab, children }) => {
  if (id !== activeTab) return null

  return <div className='tabPanel'>{children}</div>
}

export default TabPanel
