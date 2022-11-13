import { useContext } from "react"
import { Box, InputLabel, MenuItem, Select } from "@mui/material"
import { CountriesContext } from "../../context/countries";

export const SearchByRegion = () => {

  const { selectedRegion, setSelectedRegion } = useContext( CountriesContext );

  return (
    <Box 
      component="form"
      mb={ 10 }
    >
        <InputLabel>Filter by Region</InputLabel>

        <Select
          value={ selectedRegion }
          onChange={ e => setSelectedRegion( e.target.value ) }
          color="primary"
          sx={{ my: 1, maxWidth: "100%", width: 450 }}
        >
          <MenuItem value="africa">Africa</MenuItem>
          <MenuItem value="america">America</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
          <MenuItem value="europe">Europa</MenuItem>
          <MenuItem value="oceania">Oceania</MenuItem>
        </Select>
    </Box>
  )
}
