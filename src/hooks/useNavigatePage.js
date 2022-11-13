import { useNavigate } from "react-router-dom"

export const useNavigatePage = () => {

  const navigate = useNavigate();

  const onGoCountryPage = ( path = '' ) => {
    navigate( path )
  }

  return {
    onGoCountryPage
  }

}