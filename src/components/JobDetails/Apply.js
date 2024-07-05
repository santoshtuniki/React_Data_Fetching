// module imports
import React from 'react';

// util imports
import { splitPara } from '../../utils/helpers';

function Apply({ details }) {
    return (
        <>
            <>
                {
                    details &&
                        splitPara(details, '. ')?.length > 1 ?
                        <>
                            <p className='title'>Apply: </p>
                            <ul>
                                {
                                    splitPara(details, '. ')?.map((el, index) => {
                                        return <li key={index}>{el}</li>
                                    })
                                }
                            </ul>
                        </> :
                        <p className='title'>Apply: <span>{details}</span></p>
                }
            </>
        </>
    )
}

export default Apply