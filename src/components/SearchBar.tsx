import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">🔎</InputLeftElement>
      <Input placeholder="Search name or email..." value={value} onChange={(e) => onChange(e.target.value)} />
    </InputGroup>
  )
}
