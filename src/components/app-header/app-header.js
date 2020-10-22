import React, {useState} from 'react'
import './app-header.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetSearchValue} from "../../redux/actions/acCountries";

const AppHeader = () => {
    const className = "header-menu-item";
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState(0)

    const onSelectedMainItem = (item) => {
        dispatch(resetSearchValue())
        setSelectedItem(item)
    }
    const onSelectedItem = (item) => {
        setSelectedItem(item)
    }

    return (
        <div className="header">
            <div className="header-block">
                <h1 className="header-title">CoRoNa TiMeR</h1>
                <ul className='header-menu'>
                    <Link to="/">
                        <li className={selectedItem === 0 ? className + " active-header-item" : className} value={0}
                            onClick={event => onSelectedMainItem(event.target.value)}>Main page
                        </li>
                    </Link>
                    <Link to="/search">
                        <li className={selectedItem === 1 ? className + " active-header-item" : className} value={1}
                            onClick={event => onSelectedItem(event.target.value)}>Search page
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;