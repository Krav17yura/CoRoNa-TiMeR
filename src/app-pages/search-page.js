import React from "react";
import AppSearchPanel from "../components/app-search-panel";
import {useSelector} from "react-redux";
import AppCountryItemList from "../components/app-country-itemList";

const SearchPage = () => {
    const isLoad = useSelector((state) => state.reCountries.countriesStatus.load);
    const arr = useSelector((state) => state.reCountries.searchCountry.searchCountry)
    const isInputError = useSelector((state) => state.reCountries.searchCountry.searchInputValueError)

    return(
        <div className='search-page'>
            <AppSearchPanel/>
            {!isInputError?  <AppCountryItemList  countries={arr} isLoad={isLoad}/>: <h3 className='error-massage'>You entered incorrect country</h3>}
        </div>
    )
}
export default SearchPage