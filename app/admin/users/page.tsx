'use client'

import { useQuery } from '@tanstack/react-query'
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'

async function fetchUsers() {
    const res = await fetch('/api/users')
    return res.json()
}

export default function UserAdmin() {
    const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })

    const columnHelper = createColumnHelper<any>()
    const columns = [
        columnHelper.accessor('name', { header: 'Name' }),
        columnHelper.accessor('role', { header: 'Role' }),
        columnHelper.accessor('lastLogin', { header: 'Last Login' }),
    ]

    const table = useReactTable({ data: data || [], columns, getCoreRowModel: getCoreRowModel() })

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">User Management</h2>
                    {isLoading && <p>Loading...</p>}
                    {data && (
                        <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                    {table.getHeaderGroups().map(hg => (
                                        <tr key={hg.id}>
                                            {hg.headers.map(h => (
                                                <th key={h.id} className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                                    {flexRender(h.column.columnDef.header, h.getContext())}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {table.getRowModel().rows.map((row, i) => (
                                        <tr key={row.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            {row.getVisibleCells().map(cell => (
                                                <td key={cell.id} className="px-4 py-2 text-gray-700">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
