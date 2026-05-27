import Layout from '@/components/Layout'
import { SearchForm } from '@/components/SearchForm'
import { ResultsTable } from '@/components/ResultsTable'

export default function PatientSearchPage() {
    return (
        <Layout title="Patient Search">
            <div className="space-y-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase">Search Demographics</h2>
                    <SearchForm />
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase">Match Results</h2>
                    <ResultsTable />
                </div>
            </div>
        </Layout>
    )
}
