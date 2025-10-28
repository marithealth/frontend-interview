"use client";

import { FilterBar } from "@/components/FilterBar";

/**
 * on a job is
 * id
 * title
 * hospital
 * location
 * salary
 * specialty
 * description
 */

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
  const jobs = [];

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
        <FilterBar />

        <div className="mt-6 space-y-4">{/* display the jobs */}</div>
      </div>
    </main>
  );
}
