'use client'

import { useForm } from '@tanstack/react-form'

export function SearchForm() {
    const form = useForm({
        defaultValues: {
            lastName: '',
            firstName: '',
            dob: '',
            gender: 'Male',
            zip: '',
            mrn: '',
        },
        onSubmit: async ({ value }) => {
            console.log('Form submitted:', value)
        },
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                form.handleSubmit()
            }}
            className="space-y-4"
        >
            <div className="grid grid-cols-3 gap-4">
                <form.Field name="lastName">
                    {(field) => (
                        <input
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="Last Name"
                            className="input"
                        />
                    )}
                </form.Field>

                <form.Field name="firstName">
                    {(field) => (
                        <input
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="First Name"
                            className="input"
                        />
                    )}
                </form.Field>

                <form.Field name="dob">
                    {(field) => (
                        <input
                            type="date"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="input"
                        />
                    )}
                </form.Field>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <form.Field name="gender">
                    {(field) => (
                        <select
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="input"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Unknown</option>
                        </select>
                    )}
                </form.Field>

                <form.Field name="zip">
                    {(field) => (
                        <input
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="ZIP Code"
                            className="input"
                        />
                    )}
                </form.Field>

                <form.Field name="mrn">
                    {(field) => (
                        <input
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder="MRN (optional)"
                            className="input"
                        />
                    )}
                </form.Field>
            </div>

            <div className="flex gap-3">
                <button type="submit" className="btn-primary">
                    Search Patient Match 2.0
                </button>
                <button type="button" onClick={() => form.reset()} className="btn-secondary">
                    Clear
                </button>
            </div>
        </form>
    )
}
