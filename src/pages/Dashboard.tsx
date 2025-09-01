import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import SummaryCards from '../components/SummaryCards'

export default function Dashboard() {
  return (
    <Box>
      <Heading size="lg" mb={4}>Dashboard</Heading>
      <SummaryCards totals={{ total: 12, pages: 2, perPage: 6 }} />
      <Box borderWidth="1px" rounded="xl" p={6} mt={4}>
        <Text color="gray.500">Welcome to the admin dashboard. Use the sidebar to navigate.</Text>
      </Box>
    </Box>
  )
}
