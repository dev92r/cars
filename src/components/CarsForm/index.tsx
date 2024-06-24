import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, addCar } from "../../store/index";
import { PrimaryButton, Stack, TextField } from "@fluentui/react";
import { Controller, useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import { Car } from "../../model/CarForm";

function CarsForm() {
  const dispatch = useDispatch<AppDispatch>();

  const { control, handleSubmit, reset } = useForm<Car>({
    defaultValues: {
      name: "",
      cost: 0,
    },
  });

  const handleOnSubmit = (data: Car) => {
    const id = nanoid();
    const updatedData = { ...data, id: id };
    dispatch(addCar(updatedData));
    reset({
      name: "",
      cost: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Stack horizontal tokens={{ childrenGap: 10 }} verticalAlign="center">
        <Stack.Item>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField label="Name" value={value || ""} onChange={onChange} />
            )}
          />
        </Stack.Item>
        <Stack.Item>
          <Controller
            name="cost"
            control={control}
            render={({ field: { value, onChange } }) => (
              <TextField
                label="Cost"
                type="number"
                value={value !== undefined ? value.toString() : ""}
                onChange={(_, value) => onChange(value ? Number(value) : "")}
              />
            )}
          />
        </Stack.Item>
        <Stack.Item styles={{ root: { paddingTop: 26 } }}>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </Stack.Item>
      </Stack>
    </form>
  );
}

export default CarsForm;
