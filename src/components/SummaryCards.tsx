import { SimpleGrid, Box, Text } from '@chakra-ui/react'

export default function SummaryCards({ totals }: { totals: { total: number; pages: number; perPage: number } }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={4}>
      <Box p={4} borderWidth="1px" rounded="xl"><Text fontSize="sm" color="gray.500">Total Users</Text><Text fontSize="2xl" fontWeight="bold">{totals.total}</Text></Box>
      <Box p={4} borderWidth="1px" rounded="xl"><Text fontSize="sm" color="gray.500">Pages</Text><Text fontSize="2xl" fontWeight="bold">{totals.pages}</Text></Box>
      <Box p={4} borderWidth="1px" rounded="xl"><Text fontSize="sm" color="gray.500">Per Page</Text><Text fontSize="2xl" fontWeight="bold">{totals.perPage}</Text></Box>
    </SimpleGrid>
  )
}
