import { VStack, Box, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { useUI } from '../store/useStore'

const NavItem = ({ to, children }: any) => (
  <NavLink to={to} className={({ isActive }) => isActive ? 'block rounded px-3 py-2 bg-gray-200 dark:bg-gray-700' : 'block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800'}>
    {children}
  </NavLink>
)

export default function Sidebar() {
  const { sidebarOpen } = useUI()
  if (!sidebarOpen) return null
  return (
    <Box w="64" minW="16rem" borderRightWidth="1px" px={3}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>My Admin</Text>
      <VStack align="stretch" spacing={2}>
        <NavItem to="/">Dashboard</NavItem>
        <NavItem to="/users">Users</NavItem>
        <NavItem to="/reports">Reports</NavItem>
      </VStack>
    </Box>
  )
}
