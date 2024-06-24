import React from "react";
import CarsForm from "./components/CarsForm";
import CarsList from "./components/CarsList";
import { Stack } from "@fluentui/react";
import CarsSearch from "./components/CarsSearch";
import CarsValue from "./components/CarsValue";

function App() {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      <Stack.Item>
        <CarsForm />
      </Stack.Item>
      <Stack.Item>
        <CarsSearch />
      </Stack.Item>
      <Stack.Item>
        <CarsList />
      </Stack.Item>
      <Stack.Item>
        <CarsValue />
      </Stack.Item>
    </Stack>
  );
}

export default App;
