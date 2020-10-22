import React, {useEffect} from 'react'
import './app-world-information.css'
import {fetchWorldInfo} from "../../redux/actions/acWorld";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../loading/loading";
import AppError from "../app-error";

const AppWorldInformation = React.memo(function AppWorldInformation() {
    const dispatch = useDispatch();
    const worldData = useSelector((state) => state.reWorld.worldInfo)
    const isLoading = useSelector((state) => state.reWorld.worldStatus.load)
    const isError = useSelector((state) => state.reWorld.worldStatus.error)

    useEffect(() => {
        dispatch(fetchWorldInfo());
    }, [])

    const {cases, newCases, activeCases, death, newDeath, totalRecovered, timeOfGettingData} = worldData

    return (
        <div className="box">
            <div className="box-title">World Information<br/> Last data update: {timeOfGettingData}</div>
            {isError ? <span>
                {isLoading && isError ?
                    <div className="list">
                        <ul className="box-list">
                            <li className="box-list-item">Cases: {cases}</li>
                            <li className="box-list-item">New Cases: {newCases}</li>
                            <li className="box-list-item">Active Cases: {activeCases}</li>
                        </ul>
                        <ul className="box-list">
                            <li className="box-list-item">Death: {death}</li>
                            <li className="box-list-item">New Deaths: {newDeath} </li>
                            <li className="box-list-item">Recovered: {totalRecovered} </li>
                        </ul>
                    </div>
                    : <Loader/>}
                    </span> : <AppError/>}
        </div>
    )
})
export default AppWorldInformation