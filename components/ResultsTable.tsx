import { Badge } from './Badge'

const data = [
    { name: 'Ramirez, Miguel A.', dob: 'Apr 12, 1985', gender: 'Male', address: 'Buffalo, NY 14201', confidence: 'High', qes: 4 },
    { name: 'Ramirez, Miguel', dob: 'Apr 12, 1985', gender: 'Male', address: 'Niagara Falls, NY 14301', confidence: 'Medium', qes: 1 },
    { name: 'Ramirez, Miguel O.', dob: 'Apr 11, 1985', gender: 'Male', address: 'Cheektowaga, NY 14225', confidence: 'Medium', qes: 2 },
]

export function ResultsTable() {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="text-gray-500 uppercase text-xs border-b">
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">DOB</th>
                        <th className="p-2 text-left">Gender</th>
                        <th className="p-2 text-left">Address</th>
                        <th className="p-2 text-left">Match</th>
                        <th className="p-2 text-left">QE Sources</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.name} className="border-b hover:bg-gray-50">
                            <td className="p-2 font-medium text-blue-700">{row.name}</td>
                            <td className="p-2">{row.dob}</td>
                            <td className="p-2">{row.gender}</td>
                            <td className="p-2">{row.address}</td>
                            <td className="p-2"><Badge level={row.confidence} /></td>
                            <td className="p-2"><Badge label={`${row.qes} QEs`} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
