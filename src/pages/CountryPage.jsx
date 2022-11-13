import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"

import { Button } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { Layout } from "../components/layout";
import { CountryInfo } from "../components/country";
import { Spinner } from "../components/ui";

import { UIContext } from "../context/ui";
import { CountriesContext } from "../context/countries";

import { useNavigatePage } from "../hooks";
import { formatCountryData, getCountries } from "../helpers";

export const CountryPage = () => {

  const { setCountry } = useContext( CountriesContext );
  const { setIsLoading, isLoading } = useContext( UIContext )

  const { onGoCountryPage } = useNavigatePage();
  const { code } = useParams();

  useEffect( () => {

    setCountry({})
    setIsLoading( true );

    getCountries(`https://restcountries.com/v3.1/alpha/${code}`)
      .then( data => {
        const country = !!data && data[0];
        const dataCountry = formatCountryData( country );
        setCountry( dataCountry )
      })
    
    setIsLoading( false )

  }, [code] );

  return (
    <Layout>
      <Button 
        onClick={ () => onGoCountryPage('/') }
        variant="contained" 
        startIcon={<KeyboardBackspaceIcon />} 
        sx={{ width: 150, mb: 8 }}
      >
       Back
      </Button>

      {
        isLoading 
        ? (<Spinner />)
        : ( <CountryInfo /> )
      }

    </Layout>
  )
}
