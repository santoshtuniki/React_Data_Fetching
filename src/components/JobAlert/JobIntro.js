// module imports
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// util imports
import { salaryRange } from '../../utils/helpers';
import { salaryFrequency } from '../../utils/constants';

function JobIntro({ career, from, to, frequency, location }) {
    return (
        <div className='intro'>
            <p>
                <FontAwesomeIcon icon="fa-solid fa-clipboard-list" />
                <span>{career}</span>
            </p>
            <p>
                <FontAwesomeIcon icon="fa-solid fa-dollar-sign" />
                <span>{salaryRange(from, to)} {salaryFrequency[frequency]}</span>
            </p>
            <p>
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <span>{location}</span>
            </p>
        </div>
    );
};

export default JobIntro;