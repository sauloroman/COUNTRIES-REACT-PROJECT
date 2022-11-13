import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { useNavigatePage } from "../../hooks"

export const CountryItem = ({ code, name, population, flag, capital, region }) => {

  const { onGoCountryPage } = useNavigatePage();

  return (
    <Grid 
      item 
      sx={{ margin: '0 auto'}}
      xs={ 10 } 
      sm={ 6 }
      md={ 4 }
      lg={ 3 }
      onClick={ () => onGoCountryPage(`/${code}`) } 
    >
      <Card 
        sx={{ width: '100%'}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image={ flag }
            alt={ name }
          />
          <CardContent>
            
            <Typography 
              variant="h3"
              fontSize="20px" 
              fontWeight={600}
              sx={{ textAlign: 'center', mb: 3 }}
            >
              { name }
            </Typography>

            <Box display="flex" flexDirection="column" gap={ 2 }>
              <Typography
                fontWeight={600}
              >
                Population: <Typography component="span">{ population }</Typography>
              </Typography>

              <Typography
                fontWeight={600}
              >
                Region: <Typography component="span">{ region }</Typography>
              </Typography>

              <Typography
                fontWeight={600}
              >
                Capital: <Typography component="span">{ capital }</Typography>
              </Typography>
            </Box>

          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )

}
