// module imports
import React from 'react';

// util imports
import { splitPara } from '../../utils/helpers';

function PreferredSkills({ skills }) {
    return (
        <>
            {
                splitPara(skills, '. ')?.length > 1 ?
                    <>
                        <p className='title'>Key Skills: </p>
                        <ol>
                            {
                                splitPara(skills, '. ')?.map((el, index) => {
                                    return <li key={index}>{el}</li>
                                })
                            }
                        </ol>
                    </> :
                    <p className='title'>Key Skills: <span>{skills}</span></p>
            }
        </>
    );
};

export default PreferredSkills;
