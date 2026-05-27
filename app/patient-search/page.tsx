'use client'

import Layout from '@/components/Layout'
import { SearchForm } from '@/components/SearchForm'
import { ResultsTable } from '@/components/ResultsTable'

export default function PatientSearchPage() {
    return (
        <Layout title="Patient Search">
            <div className="space-y-6">
                {/* Search card */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-sm font-semibold text-gray-600 mb-4 uppercase">
                        Search Demographics
                    </h2>
                    <SearchForm />
                </div>

                {/* Results card */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-sm font-semibold text-gray-600 uppercase">
                            Match Results
                        </h2>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                            3 persons found
                        </span>
                    </div>
                    <ResultsTable />
                    <div className="text-xs text-gray-500 mt-3 border-t pt-2">
                        Results from Statewide Patient Match 2.0 API · Enterprise IDs resolved across all QEs
                    </div>
                </div>
            </div>
        </Layout>
    )
}
