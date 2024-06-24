import { Stack, Text } from "@fluentui/react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function CarsValue() {
  const totalCost = useSelector((state: RootState) => {
    const { cars, searchTerm } = state.carsList;
    return cars
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });
  return (
    <Stack horizontal>
      <Stack.Item grow>
        <Text variant="large">Total</Text>
      </Stack.Item>
      <Stack.Item>
        <Text variant="large">{totalCost}</Text>
      </Stack.Item>
    </Stack>
  );
}

export default CarsValue;
