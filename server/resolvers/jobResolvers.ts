import { mockJobs } from '../../lib/mockData';

interface Job {
  id: string;
  title: string;
  hospital: string;
  location: string;
  salary: number;
  specialty: string;
  description: string;
}

interface JobArgs {
  specialty?: string;
  location?: string;
}

export const jobResolvers = {
  Query: {
    jobs: (_: any, { specialty, location }: JobArgs): Job[] => {
      let filteredJobs = [...mockJobs];

      // Filter by specialty
      if (specialty) {
        filteredJobs = filteredJobs.filter(
          (job) => job.specialty.toLowerCase() === specialty.toLowerCase()
        );
      }

      // Filter by location
      if (location) {
        filteredJobs = filteredJobs.filter((job) =>
          job.location.toLowerCase().includes(location.toLowerCase())
        );
      }

      return filteredJobs;
    }
  }
};
