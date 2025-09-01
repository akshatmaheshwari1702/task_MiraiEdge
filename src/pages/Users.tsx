import React, { useState } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import DataTable from '../components/DataTable'
import Pagination from '../components/Pagination'
import SummaryCards from '../components/SummaryCards'
import { useUsers } from '../hooks/useUsers'
import { useUI } from '../store/useStore'
import ExportUsers from '../components/ExportUsers'

export default function Users() {
  const [page, setPage] = useState(1)
  const [perPage] = useState(6)
  const { query, setQuery } = useUI()
  const { data, filtered, loading, error } = useUsers(page, perPage, query)

  return (
    <Box>
      <Heading size="lg" mb={4}>Users</Heading>
      <HStack justify="space-between" mb={4}>
        <SearchBar value={query} onChange={setQuery} />
        <ExportUsers users={filtered} />
      </HStack>

      <SummaryCards totals={{ total: data?.total ?? 0, pages: data?.total_pages ?? 0, perPage }} />

      <DataTable users={filtered} loading={loading} error={error} />

      <Pagination page={data?.page ?? page} totalPages={data?.total_pages ?? 1} onPage={setPage} />
    </Box>
  )
}
