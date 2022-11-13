import { useContext, useEffect } from "react";

import { Box, IconButton, Stack, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { CountriesContext } from "../../context/countries";

export const PaginationUI = () => {

  const { setPage, page, setCountries, pagination } = useContext( CountriesContext )

  const previousPage = () => {
    if ( page === 0 ) return;
    setPage( page - 1 );
  }
  
  const nextPage = () => {
    if( page === (pagination.length - 1) ) return;
    setPage( page + 1 );
  }

  useEffect( () => {
    setCountries( pagination[page] );
  }, [page] )

  return (
    <Box display="flex" justifyContent="center" alignItems="end" mb={3} flexDirection="column">
      <Typography mb={ 3 } fontWeight="700">Page { page + 1 } of { pagination.length }</Typography>

      <Stack direction="row" gap={3} alignItems="center">
          <IconButton onClick={ previousPage }>
            <ChevronLeftIcon 
              sx={{ 
                opacity: `${ page === 0 ? '0.2' : '1'}`, 
                backgroundColor: 'red', 
                borderRadius: '50%', 
                width: 40, 
                height: 40 
              }} 
              color="secondary" 
            />
          </IconButton>

          <Typography fontSize={20}>{ page + 1 }</Typography>
            
          <IconButton onClick={ nextPage }>
            <ChevronRightIcon 
              sx={{ 
                  opacity: `${ page === (pagination.length - 1) ? '0.2' : '1'}`, 
                  backgroundColor: 'red', 
                  borderRadius: '50%', 
                  width: 40, 
                  height: 40 
              }}
              color="secondary"
            />
          </IconButton>
      </Stack>
    </Box>
  )
}
