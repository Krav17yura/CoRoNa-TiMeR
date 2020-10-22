import React from "react";
import AppWorldInformation from "../components/app-world-information";
import AppCountrySort from "../components/app-country-sort";
import AppCountryItemList from "../components/app-country-itemList";
import { useSelector} from "react-redux";

const MainPage = () => {
    const countries = useSelector((state) => state.reCountries.countries);
    const isLoad = useSelector((state) => state.reCountries.countriesStatus.load);


    return (
        <span>
            <AppWorldInformation/>
            <AppCountrySort/>
            <AppCountryItemList  countries={countries} isLoad={isLoad}/>
         </span>
    )
}

export default MainPage;