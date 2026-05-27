import Layout from '@/components/Layout'
import { CohortTable } from '@/components/CohortTable'

export default function Cohorts() {
    return (
        <Layout title="Cohorts">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Patient Cohorts</h2>
                <button className="btn-primary">+ New Cohort</button>
            </div>
            <CohortTable />
        </Layout>
    )
}
