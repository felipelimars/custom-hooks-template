import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

const useRequesteData = (path) => {
  
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
       axios
         .get(`${BASE_URL}${path}`)
         .then((response) => {
           setData(response.data);
           setIsloading(false)
         })
         .catch((error) => {
            setIsloading(false)
            setIsError(true)
        });
     }, []);

     return [data, isLoading, isError]

}

export default useRequesteData

// Funcao especifica para pegar dados de usuarios, passando o BaseUrl e uma variavel path, para usar como cordinator
// de navegacao.