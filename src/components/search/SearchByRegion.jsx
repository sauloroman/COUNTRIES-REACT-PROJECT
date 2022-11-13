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
          sx={{ boxShadow: '0 5px 5px rgba(0, 0, 0, 0.05)', width: 250, maxWidth: '100%' }}
          value={ selectedRegion }
          onChange={ e => setSelectedRegion( e.target.value ) }
          color="primary"
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
