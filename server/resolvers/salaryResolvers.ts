import { mockSalaryData } from '../../lib/mockData';

interface SalaryEstimate {
  specialty: string;
  minSalary: number;
  maxSalary: number;
  averageSalary: number;
  percentile25: number;
  percentile75: number;
}

interface SalaryEstimateArgs {
  specialty: string;
  experience: number;
  location: string;
}

export const salaryResolvers = {
  Query: {
    salaryEstimate: (_: any, { specialty, experience, location }: SalaryEstimateArgs): SalaryEstimate => {
      // Validate inputs
      if (!specialty || !experience || !location) {
        throw new Error('Missing required parameters: specialty, experience, and location are required');
      }

      // This will cause a runtime error if specialty doesn't exist in mockSalaryData
      const baseSalary = mockSalaryData[specialty as keyof typeof mockSalaryData];

      if (!baseSalary) {
        throw new Error(`Invalid specialty: ${specialty} is not supported`);
      }

      // Simple salary calculation based on experience
      const experienceMultiplier = 1 + experience * 0.05;
      const locationMultiplier = location.toLowerCase().includes("california")
        ? 1.2
        : 1.0;

      const adjustedSalary: SalaryEstimate = {
        specialty,
        minSalary: Math.round(
          baseSalary.minSalary * experienceMultiplier * locationMultiplier
        ),
        maxSalary: Math.round(
          baseSalary.maxSalary * experienceMultiplier * locationMultiplier
        ),
        averageSalary: Math.round(
          baseSalary.averageSalary * experienceMultiplier * locationMultiplier
        ),
        percentile25: Math.round(
          baseSalary.percentile25 * experienceMultiplier * locationMultiplier
        ),
        percentile75: Math.round(
          baseSalary.percentile75 * experienceMultiplier * locationMultiplier
        ),
      };

      return adjustedSalary;
    }
  }
};
