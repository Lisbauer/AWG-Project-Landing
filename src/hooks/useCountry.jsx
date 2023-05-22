import React, {useMemo} from 'react'
import countryList from 'react-select-country-list'

export const useCountry = () => {
  const options = useMemo(() => countryList().getData(),[]);
  return options;
}
