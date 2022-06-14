import "./Header.module.css"
import {format} from "date-fns";
import {useEffect, useState} from "react";

const Header = () => {
    const [clock, setClock] = useState()

    useEffect(()=>{
        setInterval(()=>{
            const sillyDate = new Date();
            const date = format(sillyDate, "dd/MM/yyyy HH:mm:ss")
            setClock(date)
        }, 1000)
    }, [])

    return (
        <div className={"header"}>
            <div className={"logo"}>

                <input type="text" className={"input"} disabled={true}/>
            </div>
            <div className={"time"}>
                <div className={"date"}>{clock}</div>
            </div>
        </div>
    )
}

export default Header;