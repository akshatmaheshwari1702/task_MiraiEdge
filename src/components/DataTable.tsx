import { Table, Thead, Tbody, Tr, Th, Td, Avatar, Box, Text } from '@chakra-ui/react'
import type { User } from '../types'

export default function DataTable({ users, loading, error }: { users: User[]; loading: boolean; error: string | null }) {
  if (loading) return <Box p={6} textAlign="center">Loading users…</Box>
  if (error) return <Box p={6} color="red.500">{error}</Box>
  if (!users.length) return <Box p={6} textAlign="center">No users found.</Box>

  return (
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>User</Th>
          <Th>Email</Th>
          <Th>ID</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map(u => (
          <Tr key={u.id}>
            <Td>
              <Avatar src={u.avatar} name={`${u.first_name} ${u.last_name}`} size="sm" mr={3} />
              <Text as="span" ml={2}>{u.first_name} {u.last_name}</Text>
            </Td>
            <Td>{u.email}</Td>
            <Td>{u.id}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
