import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    { id: 1, name: 'Admin User', role: 'admin', lastLogin: '2026-05-01' },
    { id: 2, name: 'Investigator', role: 'investigator', lastLogin: '2026-05-20' },
  ])
}
