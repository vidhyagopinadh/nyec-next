import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json([
    { id: 1, userId: 'admin', action: 'login', createdAt: '2026-05-01T10:00:00Z' },
    { id: 2, userId: 'investigator', action: 'search patient', createdAt: '2026-05-20T09:00:00Z' },
  ])
}
