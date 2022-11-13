import { useContext } from "react";

import { Grid } from "@mui/material";

import { CountryItem } from "./";
import { CountriesContext } from "../../context/countries";

export const CountryGrid = () => {
  const { countries } = useContext(CountriesContext);

  return (
    <Grid container spacing={4}>
      {countries?.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </Grid>
  );
};
