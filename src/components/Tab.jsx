
import * as React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import { Text,Input } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CalendarPage from './CalendarPage.jsx';
import TimeContainer from './TimeContainer.jsx';
import ListeReservations from './fetchReservations.jsx';
import FormReservation from './FormReservation.jsx';
import AlertDispo from './AlertDispo.jsx';
import GuestsSelection from './GuestsSelection.jsx';
import '.././App.css';


function TabComponent() {

    // const CustomTab = React.forwardRef((props, ref) => {
    //     // 1. Reuse the `useTab` hook
    //     const tabProps = useTab({ ...props, ref })
    // })

    const [tabIndex, setTabIndex] = useState(0)


    const handleSliderChange = (event) => {
      setTabIndex(parseInt(event.target.value, 10))
    }
  
    const handleTabsChange = (index) => {
      setTabIndex(index)
    }

  return (
<Tabs isFitted variant='soft-rounded' colorScheme='green' index={tabIndex} onChange={handleTabsChange}>
  <TabList>
    <Tab>Choisir un jour</Tab>
    <Tab >Choisir une heure</Tab>
    <Tab >Nombre de personnes</Tab>
    <Tab >Finalisation</Tab>

  </TabList>
  <TabPanels>
    <TabPanel>
      <CalendarPage />
    </TabPanel>

    <TabPanel>
      <TimeContainer/>
    </TabPanel>
    
    <TabPanel>
    <GuestsSelection />
    <ListeReservations />
    </TabPanel>

    <TabPanel>
    <FormReservation/>
    <AlertDispo />
    </TabPanel>

    <TabPanel>
    </TabPanel>
  </TabPanels>
</Tabs>
  );
}

export default TabComponent;