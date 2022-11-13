import { useContext } from "react";

import { Box, Button, Grid, Typography } from "@mui/material";

import { CountriesContext } from "../../context/countries";
import { useNavigatePage } from "../../hooks";

export const CountryInfo = () => {
  
  const { country } = useContext( CountriesContext )
  const { onGoCountryPage } = useNavigatePage();
  
  const { borders, capital, name, flag, coatOfArms, lat, lng, officialName, population, region, subregion, tld, languages, currencies} = country;

  const langString = languages && Object.values( languages ).join(', ');
  const curreArr = currencies && Object.values( currencies );

  return (
    <Grid 
      container 
      sx={{ width: '90%', margin: '0 auto' }}
    >

      <Grid container spacing={5}>
        <Grid item lg={6}>
          <Box component="img" sx={{ maxWidth: '100%' }} src={flag} alt={name} />
        </Grid>

        <Grid 
          item 
          display="flex" 
          flexDirection="column" 
          sx={{ mb: 5, width: '100%' }}
          lg={6}
        >

          <Typography 
            variant="h1" 
            fontSize={ 30 } 
            fontWeight={800} 
            sx={{ mb: 5 }}
          >{ name }</Typography>

          <Grid container>

            <Grid item mb={5} xs={12} md={6} lg={ 7 }>
              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Official:</Typography>
                <Typography component="span">{officialName}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Population:</Typography>
                <Typography component="span">{population}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Region:</Typography>
                <Typography component="span">{region}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Sub Region:</Typography>
                <Typography component="span">{subregion}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Capital:</Typography>
                <Typography component="span">{capital}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Lat:</Typography>
                <Typography component="span">{lat}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Lng:</Typography>
                <Typography component="span">{lng}</Typography>
              </Box>
            </Grid>

            <Grid item mb={5} xs={12} md={6} lg={5}>
              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Top Level Domain:</Typography>
                <Typography component="span">{tld}</Typography>
              </Box>

              <Box display="flex" gap={1} mb={2}>
                <Typography variant="body1" fontWeight={600}>Languages:</Typography>
                <Typography component="span">{ langString }</Typography>
              </Box>

              <Box display="flex" gap={1}>
                <Typography variant="body1" fontWeight={600}>Currencies:</Typography>
                {
                  curreArr?.map( ({ name }) => (
                    <Typography key={ name } component="span">{ name }</Typography>
                  ))
                } 
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={ 12 } my={ 5 }>
          <Box 
            display="flex" 
            flexDirection="column" 
            gap={3}
          >
            <Typography variant="body1" fontWeight={600}>Border Countries: </Typography>
            <Box display="flex" gap={2} flexWrap="wrap">
              {
                borders?.map( borderCode => (
                  <Button 
                    onClick={ () => onGoCountryPage(`/${borderCode}`) }
                    key={ borderCode }
                    variant="contained" 
                    sx={{ width: 100 }}
                  >
                  { borderCode }
                  </Button>
                ))
              }
            </Box>
          </Box>
        </Grid>
        <Grid item sx={{ width: '100%' }} display="flex" justifyContent="end">
            <Box
              component="img"
              src={ coatOfArms }
              sx={{ width: 200, maxWidth: "30%" }}
            />
        </Grid>
      </Grid>

  
     
    </Grid>
  );
};
