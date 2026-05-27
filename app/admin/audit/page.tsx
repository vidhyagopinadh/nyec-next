'use client'

import { useQuery } from '@tanstack/react-query'

async function fetchLogs() {
    const res = await fetch('/api/audit')
    return res.json()
}

export default function AuditLogs() {
    const { data } = useQuery({ queryKey: ['audit'], queryFn: fetchLogs })

    return (
        <div>
            <h2>Audit Logs</h2>
            <ul>
                {data?.map((log: any) => (
                    <li key={log.id}>{log.userId} – {log.action} – {log.createdAt}</li>
                ))}
            </ul>
        </div>
    )
}
