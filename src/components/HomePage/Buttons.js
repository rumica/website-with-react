import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../css/Style.css'

const Buttons = () => {

    let history = useHistory();
    const localClick = () => {
        history.push("/local-data")
      }

    const apiClick = () => {
        history.push("/api-data")
      }

    return (
        <>
            <div className="button-container">
                <button onClick={localClick}>Click to view local data</button>
                <button onClick={apiClick}>Click to view API data</button>
            </div>
        </>
    )
}

export default Buttons;
