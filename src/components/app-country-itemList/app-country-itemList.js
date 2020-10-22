import React from "react";
import AppCountryItem from "../app-country-item";
import './app-country-itemList.css'
import Loader from "../loading/loading";
import AppError from "../app-error";
import {useSelector} from "react-redux";


const AppCountryItemList = React.memo(function ({isLoad, countries}) {
    const errorStatus = useSelector((state) => state.reCountries.countriesStatus.error);
    return (
        <span className='app-itemList'>
        {errorStatus ? <span>
        <ul className='item_list'>
                {isLoad ? countries.map((item) => {
                    return <li className='item_listItem' key={item.country_name}><AppCountryItem items={{item}}/></li>
                }) : <Loader/>}
        </ul>
                </span> : <AppError/>}
        </span>

    )
})

export default AppCountryItemList;