import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Help(){
    return(
        <div className="help-section">
            <div className="help-content">
                <h1>We are here to help</h1>
                <ul>
                    <li>Walk-ins is welcomed during all business working hours</li>
                    <li>Appointments prefered</li>
                    <li>All mac's and pc's</li>
                </ul>
                <button className="btn btn-primary">Make an appointment</button>
                {/* <i class="fa-solid fa-square-check"></i> */}
            </div>
        </div>
    )
}