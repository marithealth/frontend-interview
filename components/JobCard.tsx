import { formatCurrency } from "../lib/utils/currency";

interface Job {
  id: string;
  title: string;
  hospital: string;
  location: string;
  salary: number;
  specialty: string;
  description: string;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const formatSalary = (salary: number | undefined) => {
    if (!salary) return "Salary not available";
    return formatCurrency(salary);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {job.title}
          </h3>
          <p className="text-gray-600 font-medium">{job.hospital}</p>
          <p className="text-gray-500 text-sm">{job.location}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">
            {formatSalary(job.salary)}
          </p>
          <p className="text-sm text-gray-500">per year</p>
        </div>
      </div>

      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {job.specialty}
        </span>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm mr-2">
        Save Job
      </button>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Posted {new Date().toLocaleDateString()}
        </div>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}
