import React from "react";
import './app-country-popup.css'
import {useSelector, useDispatch} from "react-redux";
import {setVisiblePopup} from "../../redux/actions/acCountries";
import Loader from "../loading/loading";
import AppError from "../app-error";

const AppCountryPopup = React.memo(function () {
    const dispatch = useDispatch();
    const loadingInfo = useSelector((state) => state.reCountries.popupCountry.loading)
    const popupError = useSelector((state) => state.reCountries.popupCountry.popupError)
    const isVisible = useSelector((state) => state.reCountries.popupCountry.isVisible)
    const countryInfo = useSelector((state) => state.reCountries.popupCountry.popupItemInfo)

    const {
        country_name, cases, newCases, activeCases, deaths, newDeath, totalRecovered,
        timeOfGettingData, deaths_per1m, total_cases_per1m, total_tests, total_tests_per1m
    } = countryInfo

    const onVisiblePopup = () => {
        document.body.classList.toggle('body-toggle')
        dispatch(setVisiblePopup(true))
    }

    const className = "app__poupap "

    return (
        <div className={isVisible ? className + 'none' : className}>
            <div className="box-popup">
                {popupError ? <span>
                  {loadingInfo ? <span>
                <div className="popu-title">{country_name}<br/> Last data update: {timeOfGettingData}</div>
                 <div className="list">
                    <ul className="box-list">
                        <li className="box-list-item">Cases: {cases}</li>
                        <li className="box-list-item">New Cases: {newCases}</li>
                        <li className="box-list-item">Active Cases: {activeCases}</li>
                        <li className="box-list-item">Cases Per1m: {total_cases_per1m}</li>
                        <li className="box-list-item">Total tests: {total_tests}</li>
                    </ul>
                    <ul className="box-list">
                        <li className="box-list-item">Death: {deaths}</li>
                        <li className="box-list-item">New Deaths: {newDeath}</li>
                        <li className="box-list-item">Recovered: {totalRecovered} </li>
                        <li className="box-list-item">Death Per1m: {deaths_per1m}</li>
                        <li className="box-list-item">Total Tests per1m: {total_tests_per1m}</li>
                    </ul>
                </div>
        </span> : <Loader/>}

        </span> : <AppError/>}
                {loadingInfo ? <button className='popup-button' onClick={() => onVisiblePopup()}>Skip</button> : ''}
            </div>
        </div>
    )
})

export default AppCountryPopup