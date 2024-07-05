// module imports
import React from 'react';

// util imports
import { splitPara } from '../../utils/helpers';

function Residency({ details }) {
    return (
        <>
            {
                details &&
                    splitPara(details, '. ')?.length > 1 ?
                    <>
                        <p className='title'>Residency: </p>
                        <ul>
                            {
                                splitPara(details, '. ')?.map((el, index) => {
                                    return <li key={index}>{el}</li>
                                })
                            }
                        </ul>
                    </> : 
                    <p className='title'>Residency: <span>{details}</span></p>
            }
        </>
    )
}

export default Residency