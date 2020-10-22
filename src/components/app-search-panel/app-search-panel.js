import React from "react";
import './app-search-panel.css'
import {useDispatch, useSelector} from "react-redux";
import {setSearchCountryInputValue, searchCountry} from '../../redux/actions/acCountries'

const AppSearchPanel = React.memo(function () {
    const inputValue = useSelector((status) => status.reCountries.searchCountry.searchInputValue)
    const dispatch = useDispatch();

    const setInputValue = (value) => {
        dispatch(setSearchCountryInputValue(value))
        dispatch(searchCountry())
    }

    return (
        <div>
            <div className="search-block">
                <input
                    type="text"
                    placeholder='Enter country name'
                    className="search-input"
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}/>
            </div>
        </div>
    )
})

export default AppSearchPanel