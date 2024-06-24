import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, removeCar } from "../../store";
import { IconButton, Stack } from "@fluentui/react";
import { Car } from "../../model/CarForm";

function CarsList() {
  const dispatch = useDispatch<AppDispatch>();

  const cars = useSelector((state: RootState) => {
    const { cars, searchTerm } = state.carsList;
    return cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleOnDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {cars.map((car, index) => {
        return (
          <Stack.Item key={index}>
            <Stack
              horizontal
              horizontalAlign="center"
              verticalAlign="center"
              tokens={{ childrenGap: 10, padding: "17px 10px" }}
              styles={{
                root: { background: "rgb(109,187,207)" },
              }}
            >
              <Stack.Item grow>
                {car.name} - {car.cost}
              </Stack.Item>
              <Stack.Item>
                <IconButton
                  iconProps={{ iconName: "Delete" }}
                  onClick={() => handleOnDelete(car)}
                />
              </Stack.Item>
            </Stack>
          </Stack.Item>
        );
      })}
    </Stack>
  );
}

export default CarsList;
