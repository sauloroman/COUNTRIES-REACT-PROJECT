export const formatCountryData = ( country ) => {
  return {
    name: country.name?.common,
    officialName: country.name?.official,
    population: country.population?.toLocaleString(),
    region: country?.region,
    currencies: country?.currencies,
    subregion: country?.subregion,
    capital: country.capital?.[0],
    lat: country.latlng?.[0],
    lng: country.latlng?.[1],
    tld: country.tld?.[0],
    languages: country?.languages,
    borders: country?.borders,
    flag: country.flags?.svg,
    coatOfArms: country.coatOfArms?.svg,
    code: country?.cca2,
  }

} 