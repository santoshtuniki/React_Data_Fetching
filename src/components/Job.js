// module imports
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// util imports
import { jobType } from '../utils/constants';

// component imports
import JobIntro from './JobAlert/JobIntro';
import {
    Requirements, PreferredSkills, Residency, Apply,
} from './JobDetails';

function Job() {
    const navigate = useNavigate();
    const jobs = useSelector((state) => state?.jobs?.value);

    const { jobId } = useParams();
    const [jobData, setJobData] = useState(undefined);

    useEffect(() => {
        if (jobId && jobs?.length) {
            const filtered = jobs?.filter((job, index) => `${job?.job_id}${index}` === jobId);
            setJobData(filtered[0]);
        } else {
            navigate('/');
        }
    }, [jobId, jobs, navigate])

    return (
        <>
            <div className='job_field'>
                <h2>{jobData?.civil_service_title}</h2>
                <p>{jobData?.business_title}</p>
                <p>{jobData?.agency}</p>
                <button onClick={() => navigate('/')} className='back'>
                    Go Back
                </button>
                <JobIntro
                    career={jobData?.career_level}
                    from={jobData?.salary_range_from}
                    to={jobData?.salary_range_to}
                    frequency={jobData?.salary_frequency}
                    location={jobData?.work_location}
                />
            </div>

            <div className='job_field'>
                <p><span className='title'>No of positions:</span> {jobData?.number_of_positions}</p>
                <p><span className='title'>Job Type:</span> {jobType[jobData?.full_time_part_time_indicator]}</p>
                <p><span className='title'>Category:</span> {jobData?.job_category}</p>
                <p><span className='title'>Department:</span> {jobData?.division_work_unit}</p>
                {
                    jobData?.minimum_qual_requirements &&
                    <Requirements requirements={jobData?.minimum_qual_requirements} />
                }
                {
                    jobData?.preferred_skills &&
                    <PreferredSkills skills={jobData?.preferred_skills} />
                }
                {
                    jobData?.residency_requirement &&
                    <Residency details={jobData?.residency_requirement} />
                }
                <Apply details={jobData?.to_apply} />
                <button onClick={() => navigate('/')} className='apply'>
                    Apply Now
                </button>
            </div>
        </>
    );
};

export default Job;