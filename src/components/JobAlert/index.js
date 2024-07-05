// module imports
import React from 'react';
import { useNavigate } from 'react-router-dom';

// component imports
import JobIntro from './JobIntro';
import SkillIntro from './SkillIntro';

function JobAlert({ job, index }) {
    const navigate = useNavigate();

    return (
        <div className='job_field' onClick={() => navigate(`/job/${job?.job_id}${index}`)}>
            <p className='title'>{job?.civil_service_title}</p>
            <p className='sub_title'>{job?.business_title}</p>
            <p className='agency'>{job?.agency}</p>
            <JobIntro
                career={job?.career_level}
                from={job?.salary_range_from}
                to={job?.salary_range_to}
                frequency={job?.salary_frequency}
                location={job?.work_location}
            />
            <SkillIntro requirements={job?.minimum_qual_requirements} />
        </div>
    );
};

export default JobAlert;