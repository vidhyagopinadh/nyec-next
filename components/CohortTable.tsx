export function CohortTable() {
    const cohorts = [
        { name: 'TB Contact Investigation – Niagara', status: 'Active', patients: 18, created: 'May 20, 2026', updated: 'May 27, 2026' },
        { name: 'Erie County Flu Surveillance', status: 'Active', patients: 147, created: 'May 15, 2026', updated: 'May 27, 2026' },
        { name: 'WNY COVID-19 Follow-up', status: 'Active', patients: 89, created: 'Apr 12, 2026', updated: 'May 26, 2026' },
        { name: 'Childhood Lead Exposure – Buffalo', status: 'Active', patients: 34, created: 'Feb 26, 2026', updated: 'May 22, 2026' },
        { name: 'Opioid Overdose Surveillance Q1 2025', status: 'Closed', patients: 212, created: 'Jan 27, 2026', updated: 'Apr 27, 2026' },
    ]

    return (
        <table className="w-full text-sm border-collapse">
            <thead>
                <tr className="text-gray-500 uppercase text-xs border-b">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Patients</th>
                    <th className="p-2 text-left">Created</th>
                    <th className="p-2 text-left">Last Updated</th>
                </tr>
            </thead>
            <tbody>
                {cohorts.map((c) => (
                    <tr key={c.name} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium text-blue-700">{c.name}</td>
                        <td className="p-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                                {c.status}
                            </span>
                        </td>
                        <td className="p-2">{c.patients}</td>
                        <td className="p-2">{c.created}</td>
                        <td className="p-2">{c.updated}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
