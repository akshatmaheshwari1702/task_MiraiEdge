import { Flex, IconButton, useColorMode, Avatar, HStack, Text } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useUI } from '../store/useStore'

export default function Topbar() {
  const { toggleSidebar } = useUI()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex as="header" align="center" justify="space-between" px={4} py={3} borderBottomWidth="1px" bg="white" _dark={{ bg: 'gray.800' }}>
      <HStack spacing={3}>
        <IconButton aria-label="menu" icon={<Text>☰</Text>} onClick={toggleSidebar} />
        <Text fontWeight="bold">FE Dashboard</Text>
      </HStack>

      <HStack spacing={3}>
        <IconButton aria-label="toggle-color" icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
        <Avatar name="Akshat" size="sm" />
      </HStack>
    </Flex>
  )
}
