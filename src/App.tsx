import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
const Users = React.lazy(() => import('./pages/Users'))
const Reports = React.lazy(() => import('./pages/Reports'))

export default function App() {
  return (
    <BrowserRouter>
      <Flex direction="column" minH="100vh" bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Topbar />
        <Flex flex="1" maxW="1200px" mx="auto" w="full" px={4} py={6} gap={6}>
          <Sidebar />
          <Box flex="1">
            <Suspense fallback={<div>Loading…</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={<div>Not found. <Link to="/">Home</Link></div>} />
              </Routes>
            </Suspense>
          </Box>
        </Flex>
      </Flex>
    </BrowserRouter>
  )
}
