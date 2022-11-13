import React, { useContext, useEffect } from 'react'

import { Stack } from '@mui/material'

import { Layout } from '../components/layout'
import { CountryGrid } from '../components/country'
import { SearchByCountry, SearchByRegion} from '../components/search'
import { Spinner } from '../components/ui'

import { CountriesContext } from '../context/countries'
import { UIContext } from '../context/ui'

import { formatCountriesData, getCountries } from '../helpers'

export const CountriesPage = () => {

  const { setCountries, selectedRegion } = useContext( CountriesContext );
  const { setIsLoading, isLoading } = useContext( UIContext )

  useEffect( () => {

    setCountries([]);
    setIsLoading( true );

    getCountries(`https://restcountries.com/v3.1/region/${selectedRegion}`)
      .then( data => {
        const countries = formatCountriesData( data );
        setCountries( countries )
      })

    setIsLoading( false );
  }, [selectedRegion] );

  return (
    <Layout>

      <Stack direction="column" gap={ 5 } alignItems="start">
        <SearchByCountry />
        <SearchByRegion />
      </Stack>

      {
        isLoading 
        ? (<Spinner />)
        : (<CountryGrid />)
      }
      
    </Layout>
  )
}
