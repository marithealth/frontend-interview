"use client";

import { useState } from "react";

interface Filters {
  specialty: string;
  location: string;
}

interface FilterBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

const SPECIALTIES = [
  "Cardiology",
  "Dermatology",
  "Emergency Medicine",
  "Family Medicine",
  "Internal Medicine",
  "Neurology",
  "Oncology",
  "Pediatrics",
  "Psychiatry",
  "Surgery",
];

export function FilterBar({ filters, onFiltersChange }: FilterBarProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  // This function has a bug - it's not updating the parent state
  const handleFilterChange = (key: keyof Filters, value: string) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    // Missing: onFiltersChange(newFilters)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFiltersChange(localFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Jobs</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="specialty"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Specialty
          </label>
          <select
            id="specialty"
            value={localFilters.specialty}
            onChange={(e) => handleFilterChange("specialty", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white"
          >
            <option value="">All Specialties</option>
            {SPECIALTIES.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={localFilters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            placeholder="Enter city or state"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-white placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}
