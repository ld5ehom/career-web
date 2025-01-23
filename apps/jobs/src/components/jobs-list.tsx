import React, { useEffect } from "react";
import { type JobType } from "../types";
import JobsListItem from "./jobs-list-item";
import { JobsListWrapper } from "./jobs-list.styles";

/**
 * JobsList Component
 * Displays a list of jobs fetched from the server, styled and organized with a header and job items.
 * 서버에서 가져온 채용 공고 리스트를 표시하며, 헤더와 채용 공고 아이템으로 구성됩니다.
 *
 * @param {JobType[]} jobs - Array of job data (채용 공고 데이터 배열)
 * @param {() => Promise<void>} fetchJobs - Function to fetch job data (채용 공고 데이터를 가져오는 함수)
 */
interface JobsListProps {
    jobs: JobType[]; // Array of job objects (채용 공고 객체 배열)
    fetchJobs: () => Promise<void>; // Function to fetch the jobs (채용 공고 데이터를 가져오는 함수)
}

const JobsList: React.FC<JobsListProps> = ({ jobs, fetchJobs }) => {
    /**
     * Fetch job data when the component is mounted
     * 컴포넌트가 마운트될 때 채용 공고 데이터를 가져옵니다.
     */
    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    return (
        <JobsListWrapper>
            {/* Top section with title and subtitle */}
            {/* 상단 섹션: 제목과 부제목 */}
            <div className="jobs--jobs-list-top">
                <div className="jobs--jobs-list-top-title">
                    Jobs picks for You
                </div>
                <div className="jobs--jobs-list-top-subtitle">
                    Based on your profile, preferences, and activity like
                    applies, searches, and saves
                </div>
            </div>

            {/* Render the list of jobs */}
            {/* 채용 공고 리스트 렌더링 */}
            <div>
                {jobs.map((job) => (
                    <JobsListItem key={job.id} {...job} />
                ))}
            </div>
        </JobsListWrapper>
    );
};

export default JobsList;
