"use client";

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { JobCard } from "@/components/JobCard";
import { SalaryEstimator } from "@/components/SalaryEstimator";
import { FilterBar } from "@/components/FilterBar";

const GET_JOBS = gql`
  query GetJobs($specialty: String, $location: String) {
    jobs(specialty: $specialty, location: $location) {
      id
      title
      hospital
      location
      salary
      specialty
      description
    }
  }
`;

interface Job {
  id: string;
  title: string;
  hospital: string;
  location: string;
  salary: number;
  specialty: string;
  description: string;
}

export default function Home() {
  const [filters, setFilters] = useState({
    specialty: "",
    location: "",
  });

  const { data, loading, error } = useQuery(GET_JOBS, {
    variables: filters,
  });

  const jobs = data?.jobs || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            Error Loading Jobs
          </h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Doctor Job Finder
            </h1>
            <div className="text-sm text-gray-500">
              {jobs.length} jobs found
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FilterBar filters={filters} onFiltersChange={setFilters} />

            <div className="mt-6 space-y-4">
              {jobs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No jobs found matching your criteria
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try adjusting your filters
                  </p>
                </div>
              ) : (
                jobs.map((job: Job) => <JobCard key={job.id} job={job} />)
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <SalaryEstimator />
          </div>
        </div>
      </div>
    </main>
  );
}
