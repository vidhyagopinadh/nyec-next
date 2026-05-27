'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { createColumnHelper } from '@tanstack/react-table'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import DataTable from '../../components/DataTable'

async function fetchPatients(query: string) {
    const res = await fetch(`/api/patient-match?query=${query}`)
    return res.json()
}

export default function PatientSearch() {
    const [search, setSearch] = useState('')
    const { data, isLoading } = useQuery({
        queryKey: ['patients', search],
        queryFn: () => fetchPatients(search),
        enabled: !!search,
    })

    const columnHelper = createColumnHelper<any>()
    const columns = [
        columnHelper.accessor('name', { header: 'Name' }),
        columnHelper.accessor('dob', { header: 'DOB' }),
        columnHelper.accessor('gender', { header: 'Gender' }),
        columnHelper.accessor('address', { header: 'Address' }),
        columnHelper.accessor('confidence', { header: 'Match' }),
        columnHelper.accessor('sources', { header: 'QE Sources' }),
    ]

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="p-6 space-y-6">
                    <div className="bg-white border rounded-lg p-4 shadow">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">Search demographics</h3>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <input className="border rounded px-2 py-1 text-sm" placeholder="Last name" />
                            <input className="border rounded px-2 py-1 text-sm" placeholder="First name" />
                            <input type="date" className="border rounded px-2 py-1 text-sm" />
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <select className="border rounded px-2 py-1 text-sm">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Unknown</option>
                            </select>
                            <input className="border rounded px-2 py-1 text-sm" placeholder="ZIP code" />
                            <input className="border rounded px-2 py-1 text-sm" placeholder="MRN (optional)" />
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setSearch('Ramirez')}
                                className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium"
                            >
                                Search Patient Match 2.0
                            </button>
                            <button
                                onClick={() => setSearch('')}
                                className="border px-4 py-2 rounded text-sm text-gray-600"
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4 shadow">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xs font-semibold text-gray-500 uppercase">Match results</h3>
                            {data && <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{data.length} persons found</span>}
                        </div>
                        {isLoading && <p>Loading...</p>}
                        {data && <DataTable data={data} columns={columns} />}
                        <div className="text-xs text-gray-500 mt-2 border-t pt-2">
                            Results from Statewide Patient Match 2.0 API · Enterprise IDs resolved across all QEs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
