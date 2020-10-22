import React, {useEffect} from 'react'
import './normalize.css'
import './app.css'
import {Route} from "react-router-dom";
import AppBackground from '../app-background'
import AppHeader from "../app-header";
import {SearchPage, MainPage} from "../../app-pages";
import {fetchCountries,} from "../../redux/actions/acCountries";
import {useDispatch} from "react-redux";
import AppCountryPopup from "../app-country popup";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])

    return (
        <div className="main">

            <AppBackground/>
            <AppHeader/>
            <div className="container">
                <AppCountryPopup/>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/search' component={SearchPage}/>
            </div>
        </div>
    )
}

export default App;