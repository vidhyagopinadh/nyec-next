import Layout from '@/components/Layout'
import { Card } from '@/components/Card'

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="grid grid-cols-4 gap-6">
        <Card title="Searches Today">5</Card>
        <Card title="Patients Found">7 (84% match rate)</Card>
        <Card title="Active Cohorts">4</Card>
        <Card title="QE Sources Online">17/19 · Stable</Card>
      </div>

      <Card title="Recent Patient Searches">
        <ul className="divide-y text-sm">
          <li className="py-2">Chen, David · 1 match · May 27, 8:40 PM</li>
          <li className="py-2">Smith, John · 0 matches · May 27, 8:39 PM</li>
          <li className="py-2">Ramirez, Miguel · 3 matches · May 27, 7:58 PM</li>
          <li className="py-2">Johnson, Maria · 1 match · May 27, 6:03 PM</li>
        </ul>
      </Card>

      <Card title="System Notices">
        <div className="space-y-2 text-sm">
          <p><strong>Scheduled Maintenance:</strong> HIE Node B offline Sunday 2:00 AM EST</p>
          <p><strong>Data Delay:</strong> Western NY lab results may be delayed up to 4 hours</p>
        </div>
      </Card>
    </Layout>
  )
}
