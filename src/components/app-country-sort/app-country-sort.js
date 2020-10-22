import React from "react";
import './app-country-sort.css'
import {useSelector, useDispatch} from "react-redux";

import {fetchCountries, setSortActiveBtn} from "../../redux/actions/acCountries";

const AppCountrySort = React.memo(function () {
    const dispatch = useDispatch();
    const sortBtn = useSelector((state) => state.reCountries.sortBtn);
    const activeSortBtn = useSelector((state) => state.reCountries.setActiveSortBtn)


    const setActiveBtn = (id) => {
        dispatch(setSortActiveBtn(id))
        dispatch(fetchCountries(id))
    }

    return (
        <div className='sort-block'>
            <div className="sort-title">Sort by:</div>
            {sortBtn.map((items, index) => <button
                className={activeSortBtn === index ? 'sort-btn sort-btn-active' : 'sort-btn'}
                onClick={() => setActiveBtn(index)}
                key={index + 10}> {items}
            </button>)}
        </div>
    );
})


export default AppCountrySort;