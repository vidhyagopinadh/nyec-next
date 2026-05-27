import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  // Collect query params
  const firstName = (searchParams.get('firstName') || '').toLowerCase()
  const lastName = (searchParams.get('lastName') || '').toLowerCase()
  const dob = searchParams.get('dob') || ''
  const gender = (searchParams.get('gender') || '').toLowerCase()
  const zip = searchParams.get('zip') || ''
  const mrn = searchParams.get('mrn') || ''

  // Dummy patient dataset
  const patients = [
    {
      name: 'Ramirez, Miguel A.',
      dob: '1985-04-12',
      gender: 'Male',
      address: 'Buffalo, NY 14201',
      confidence: '98%',
      sources: '4 QEs',
      mrn: '123',
    },
    {
      name: 'Ramirez, Miguel',
      dob: '1985-04-12',
      gender: 'Male',
      address: 'Niagara Falls, NY 14301',
      confidence: '71%',
      sources: '1 QE',
      mrn: '456',
    },
    {
      name: 'Ramirez, Miguel O.',
      dob: '1985-04-11',
      gender: 'Male',
      address: 'Cheektowaga, NY 14225',
      confidence: '63%',
      sources: '2 QEs',
      mrn: '789',
    },
    {
      name: 'Alice Johnson',
      dob: '1990-01-01',
      gender: 'Female',
      address: 'Albany, NY 12207',
      confidence: '95%',
      sources: '3 QEs',
      mrn: '321',
    },
    {
      name: 'Bob Smith',
      dob: '1985-05-12',
      gender: 'Male',
      address: 'Rochester, NY 14604',
      confidence: '88%',
      sources: '2 QEs',
      mrn: '654',
    },
  ]

  // Filter logic — match if any criteria provided
  const filtered = patients.filter(p => {
    return (
      (!firstName || p.name.toLowerCase().includes(firstName)) &&
      (!lastName || p.name.toLowerCase().includes(lastName)) &&
      (!dob || p.dob === dob) &&
      (!gender || p.gender.toLowerCase() === gender) &&
      (!zip || p.address.includes(zip)) &&
      (!mrn || p.mrn.includes(mrn))
    )
  })

  return NextResponse.json(filtered)
}
