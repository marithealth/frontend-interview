"use client";

import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_SALARY_ESTIMATE = gql`
  query GetSalaryEstimate(
    $specialty: String!
    $experience: Int!
    $location: String!
  ) {
    salaryEstimate(
      specialty: $specialty
      experience: $experience
      location: $location
    ) {
      specialty
      minSalary
      maxSalary
      averageSalary
      percentile25
      percentile75
    }
  }
`;

export function SalaryEstimator() {
  const [specialty, setSpecialty] = useState("");
  const [experience, setExperience] = useState(0);
  const [location, setLocation] = useState("");

  // This will cause a network error due to wrong Apollo endpoint
  const { data, error } = useQuery(GET_SALARY_ESTIMATE, {
    variables: {
      specialty,
      experience,
      location,
    },
    skip: !specialty || !experience || !location,
  });

  const salaryData = data;
  console.log(salaryData);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Salary Estimator
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialty
          </label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 bg-white"
          >
            <option value="">Select specialty</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="emergency">Emergency Medicine</option>
            <option value="family">Family Medicine</option>
            <option value="internal">Internal Medicine</option>
            <option value="neurology">Neurology</option>
            <option value="oncology">Oncology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="surgery">Surgery</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience
          </label>
          <input
            type="number"
            min="0"
            max="50"
            value={experience}
            onChange={(e) => setExperience(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="State"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 bg-white placeholder-gray-500"
          />
        </div>

        <div className="text-sm text-gray-500">
          {error && (
            <div className="text-red-600 mb-2">Error: {error.message}</div>
          )}
        </div>
      </div>

      {salaryData && (
        <div className="mt-6 space-y-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">
              {formatCurrency(salaryData.averageSalary)}
            </p>
            <p className="text-sm text-gray-500">Average Salary</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Range</p>
              <p className="font-medium">
                {formatCurrency(salaryData.minSalary)} -{" "}
                {formatCurrency(salaryData.maxSalary)}
              </p>
            </div>
            <div>
              <p className="text-gray-500">25th Percentile</p>
              <p className="font-medium">
                {formatCurrency(salaryData.percentile25)}
              </p>
            </div>
            <div>
              <p className="text-gray-500">75th Percentile</p>
              <p className="font-medium">
                {formatCurrency(salaryData.percentile75)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
