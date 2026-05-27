import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  return NextResponse.json([
    { section: 'Problems', content: 'Hypertension' },
    { section: 'Medications', content: 'Lisinopril' },
  ])
}
