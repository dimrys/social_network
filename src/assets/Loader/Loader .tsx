import React from "react";
import style from "./Loader.module.css"

export const Loader = () => {
    return (
        <div className={style.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}