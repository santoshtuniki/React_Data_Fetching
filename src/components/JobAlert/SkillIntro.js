// module imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// util imports
import { limitString, splitPara } from '../../utils/helpers';

function SkillIntro({ requirements }) {
    return (
        <div className='skill_intro'>
            {
                requirements &&
                <>
                    <p className='icon'>
                        <FontAwesomeIcon icon="fa-solid fa-list-check" />
                    </p>
                    <p className='requirement'>
                        {
                            limitString(splitPara(requirements, '; or ')[0])
                        }
                        <span>know more</span>
                    </p>
                </>
            }
        </div>
    );
};

export default SkillIntro;