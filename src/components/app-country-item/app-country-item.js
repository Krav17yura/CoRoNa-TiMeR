import React from "react";
import './app-country-item.css'
import {useDispatch} from "react-redux";
import {getPopupItem, setVisiblePopup} from "../../redux/actions/acCountries";

const AppCountryItem = (items) => {
    const dispatch = useDispatch();
    const {country_name, cases, new_cases, active_cases, deaths, new_deaths, total_recovered} = items.items.item

    const onVisiblePopup = (country) => {
        document.body.classList.toggle('body-toggle')
        dispatch(getPopupItem(country))
        dispatch(setVisiblePopup(false))
    }

    return (
        <div className='item__box'>
            <div className="item-title">{country_name}</div>
            <ul className="box-list">
                <li className="items_info">Cases: {cases}</li>
                <li className="items_info">New Cases:{new_cases}</li>
                <li className="items_info">Active Cases:{active_cases} </li>
            </ul>
            <ul className="box-list">
                <li className="items_info">Death:{deaths}</li>
                <li className="items_info">New Deaths:{new_deaths} </li>
                <li className="items_info">Recovered: {total_recovered} </li>
            </ul>
            <button className='item-button' onClick={() => onVisiblePopup(country_name)}>More information</button>
        </div>
    )
}

export default AppCountryItem