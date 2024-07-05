// module imports
import React from 'react';

// util imports
import { splitPara } from '../../utils/helpers';

function Requirements({ requirements }) {
    return (
        <>
            {
                splitPara(requirements, '; or ')?.length > 1 ?
                    <>
                        <p className='title'>Requirements: </p>
                        <p>Candidate should meet any one of the following requirements:</p>
                        <ol>
                            {
                                splitPara(requirements, '; or ')?.map((el, index) => {
                                    return <li key={index}>{el.split('. ')[1]}</li>
                                })
                            }
                        </ol>
                    </> :
                    <p className='title'>Requirements: <span>{requirements}</span></p>
            }
        </>
    );
};

export default Requirements;