import { useContext } from "react";

import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { CountriesContext } from "../../context/countries";
import { useForm } from "../../hooks";
import { formatCountriesData, getCountries } from "../../helpers";
import { UIContext } from "../../context/ui";

export const SearchByCountry = () => {
  
  const { setCountries } = useContext( CountriesContext );
  const { setIsLoading } = useContext( UIContext );

  const { country, onInputChange, onResetForm } = useForm({ country: '' });

  const onSearchCountry = async (e) => {

    e.preventDefault();
    
    if ( country.length <= 4 ) return;

    setIsLoading( true );
    setCountries([]);

    getCountries(`https://restcountries.com/v3.1/name/${country}`)
      .then( data => {
        const countries = formatCountriesData( data );
        setCountries( countries )
      })

    setIsLoading(false);
    onResetForm();
  }

  return (
    <Box
      onSubmit={ onSearchCountry } 
      component="form" 
      sx={{ boxShadow: '0 5px 5px rgba(0, 0, 0, 0.05)', width: 800, maxWidth: '100%' }}
    >
      <TextField
        value={country}
        onChange={ onInputChange }
        name="country"
        color="primary"
        fullWidth
        placeholder="Search by country"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
