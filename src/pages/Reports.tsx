import React, { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import ExportReports from '../components/ExportReports'
import { fetchReports } from '../lib/reportsApi'
import type { ReportPoint } from '../types'

export default function Reports() {
  const [data, setData] = useState<ReportPoint[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchReports().then(d => setData(d)).finally(() => setLoading(false))
  }, [])

  return (
    <Box>
      <Heading size="lg" mb={4}>Reports</Heading>
      <VStack align="stretch" spacing={6}>
        <Box>
          <ExportReports data={data} />
        </Box>

        <Box borderWidth="1px" rounded="xl" p={4}>
          <Text mb={2} color="gray.500">User growth (monthly)</Text>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box borderWidth="1px" rounded="xl" p={4}>
          <Text mb={2} color="gray.500">Sales (monthly)</Text>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </VStack>
    </Box>
  )
}
