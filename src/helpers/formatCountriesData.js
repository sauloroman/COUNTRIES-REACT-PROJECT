export const formatCountriesData = ( countries ) => {
  const countriesFinal = countries?.map( country => {
    return {
      name: country.name.common,
      population: country.population.toLocaleString(),
      region: country.region,
      capital: country.capital?.[0],
      flag: country.flags.png,
      code: country.cca2
    }
  })

  return countriesFinal;
}