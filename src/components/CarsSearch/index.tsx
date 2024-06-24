import { Stack, TextField } from "@fluentui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setSearchTerm } from "../../store";

function CarsSearch() {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => {
    return state.carsList.searchTerm;
  });

  const handleOnSearch = (value: string) => {
    dispatch(setSearchTerm(value));
  };
  return (
    <Stack horizontal>
      <Stack.Item grow>
        <TextField
          label="Search"
          value={searchTerm || ""}
          onChange={(_, value) => handleOnSearch(value || "")}
        />
      </Stack.Item>
    </Stack>
  );
}

export default CarsSearch;
