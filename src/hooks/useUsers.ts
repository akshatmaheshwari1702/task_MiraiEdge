import { useEffect, useMemo, useState } from 'react'
import { api, Paginated } from '../lib/api'
import type { User } from '../types'

export function useUsers(page: number, perPage: number, query: string) {
  const [data, setData] = useState<Paginated<User> | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let ignore = false
    setLoading(true)
    setError(null)
    api.get<Paginated<User>>('/users', { params: { page, per_page: perPage } })
      .then(res => { if (!ignore) setData(res.data) })
      .catch(e => { if (!ignore) setError(e?.message ?? 'Failed to load users') })
      .finally(() => { if (!ignore) setLoading(false) })
    return () => { ignore = true }
  }, [page, perPage])

  const filtered = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    if (!q) return data.data
    return data.data.filter(u =>
      `${u.first_name} ${u.last_name}`.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q)
    )
  }, [data, query])

  return { data, filtered, loading, error }
}
