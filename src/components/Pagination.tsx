import { HStack, Button, Text } from '@chakra-ui/react'

export default function Pagination({ page, totalPages, onPage }: { page: number; totalPages: number; onPage: (p:number) => void }) {
  return (
    <HStack justify="space-between" mt={4}>
      <Button onClick={() => onPage(Math.max(1, page - 1))} isDisabled={page <= 1}>Prev</Button>
      <Text>Page {page} of {totalPages || 1}</Text>
      <Button onClick={() => onPage(Math.min(totalPages || 1, page + 1))} isDisabled={page >= (totalPages || 1)}>Next</Button>
    </HStack>
  )
}
