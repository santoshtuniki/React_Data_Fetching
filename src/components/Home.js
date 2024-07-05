// module imports
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// store imports
import { setJobs } from '../store/features/jobSlice';
import { useGetJobsQuery } from '../store/services/jobApi';

// component imports
import JobAlert from './JobAlert';
import { ERROR } from '../utils/constants';

function Home() {
    const dispatch = useDispatch();
    const { data, error, isLoading, isSuccess, isError } = useGetJobsQuery();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setJobs(data));
        }
    }, [isLoading, isSuccess, isError]);

    return (
        <>
            {
                isLoading && <h2 className='loading'>Loading...</h2>
            }
            {
                isError && <h2 className='error'>{ERROR}</h2>
            }
            {
                isSuccess && data?.length &&
                <div className='container'>
                    {
                        data?.map((job, index) => (
                            <JobAlert
                                key={`${job?.job_id}${index}`}
                                job={job}
                                index={index}
                            />
                        ))
                    }
                </div>
            }
        </>
    );
};

export default Home;