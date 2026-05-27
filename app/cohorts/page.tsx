'use client'

import { useForm, Field } from '@tanstack/react-form'
import { useSyncExternalStore } from 'react'
import { cohortStore } from './store'
import { Sidebar } from '../../components/Sidebar'
import Topbar from '../../components/Topbar'

function useCohorts() {
    return useSyncExternalStore(cohortStore.subscribe, () => cohortStore.state, () => cohortStore.state)
}

export default function Cohorts() {
    const { cohorts } = useCohorts()

    const form = useForm({
        defaultValues: { name: '', members: '' },
        onSubmit: async (values) => {
            const newCohort = { name: values.name, members: values.members.split(',') }
            cohortStore.setState(s => ({ cohorts: [...s.cohorts, newCohort] }))
        },
    })

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar />
                <div className="p-6 max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Cohorts</h2>
                    <form onSubmit={form.handleSubmit} className="space-y-4">
                        <Field name="name" form={form}>
                            {({ value, handleChange }) => (
                                <input value={value} onChange={e => handleChange(e.target.value)} placeholder="Cohort Name" className="border p-2 w-full rounded" />
                            )}
                        </Field>
                        <Field name="members" form={form}>
                            {({ value, handleChange }) => (
                                <textarea value={value} onChange={e => handleChange(e.target.value)} placeholder="Comma-separated patient IDs" className="border p-2 w-full rounded" />
                            )}
                        </Field>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Create Cohort</button>
                    </form>

                    <h3 className="mt-6 font-semibold">Existing Cohorts</h3>
                    <ul className="divide-y divide-gray-200 border rounded mt-2">
                        {cohorts.map((c, i) => (
                            <li key={i} className="p-2 flex justify-between">
                                <span>{c.name}</span>
                                <span className="text-sm text-gray-500">{c.members.length} members</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
