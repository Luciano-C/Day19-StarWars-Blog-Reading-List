import React, { useState, useContext } from "react";
import "../../styles/card.css"


import { Context } from "../store/appContext";

export const Card = (props) => {
    /* const [isFavorite, setIsfavorite] = useState(false); */

    const { store, actions } = useContext(Context);


    const favoriteButtonHandler = (name) => {
        const isFavorite = store.favoritesList.map(x => x.name).includes(name);
        if (isFavorite === true) {
            actions.deleteFavorite(name);
           /*  setIsfavorite(false); */
        }
        else {
            actions.addFavorite(name);
            /* setIsfavorite(true) */
        }
    }


    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt="..." />
            <div>
                <h5 className="text-start ps-3 fw-bold mt-3">{props.name}</h5>
                <p className="card-text text-start ps-3">Gender: {props.gender}</p>
                <p className="card-text text-start ps-3">Hair color: {props.hair}</p>
                <p className="card-text text-start ps-3">Eye color: {props.eyes}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-grad">Learn More!</button>
                    <span className="favorite" onClick={() => favoriteButtonHandler(props.name)}>{store.favoritesList.map(x => x.name).includes(props.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}</span>
                </div>

            </div>
        </div>
    )

}