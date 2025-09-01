import type { ReportPoint } from '../types'

// Simulated API call returning dummy report points (with small delay)
export async function fetchReports(): Promise<ReportPoint[]> {
  const data: ReportPoint[] = [
    { month: 'Jan', users: 40, sales: 240 },
    { month: 'Feb', users: 30, sales: 139 },
    { month: 'Mar', users: 20, sales: 980 },
    { month: 'Apr', users: 27, sales: 390 },
    { month: 'May', users: 18, sales: 480 },
    { month: 'Jun', users: 23, sales: 380 },
    { month: 'Jul', users: 35, sales: 520 },
    { month: 'Aug', users: 28, sales: 460 },
    { month: 'Sep', users: 31, sales: 610 },
    { month: 'Oct', users: 26, sales: 430 },
    { month: 'Nov', users: 29, sales: 570 },
    { month: 'Dec', users: 33, sales: 650 }
  ]
  await new Promise(r => setTimeout(r, 500))
  return data
}
