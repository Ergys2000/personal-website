import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
import MainLayout from "../../layouts/MainLayout";


export default function Main(props: any) {
  return (
    <div className="w-full h-full bg-gray-800 text-gray-300">
      <Tabs colorScheme={"blue"} variant={"soft-rounded"}>
        <TabList>
          <Tab color={"gray.300"}>One</Tab>
          <Tab color={"gray.300"}>Two</Tab>
          <Tab color={"gray.300"}>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

Main.getLayout = (page: React.ReactElement) => {
  return (
    <MainLayout>
      <Main />
    </MainLayout>
  )
}