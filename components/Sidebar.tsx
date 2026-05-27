import { Home, Users, FileText, ShieldCheck, Settings } from 'lucide-react'

export function Sidebar() {
    const items = [
        { icon: Home, label: 'Search', active: true },
        { icon: Users, label: 'Cohorts' },
        { icon: FileText, label: 'Clinical Data' },
        { icon: ShieldCheck, label: 'Audit Log' },
        { icon: Settings, label: 'Admin' },
    ]

    return (
        <aside className="w-56 bg-white border-r border-gray-200 flex flex-col py-6">
            <div className="px-6 mb-6">
                <h1 className="text-lg font-semibold text-blue-700">NY Public Health Portal</h1>
                <p className="text-xs text-gray-500">SHIN-NY · Epidemiology</p>
            </div>
            <nav className="space-y-1">
                {items.map(({ icon: Icon, label, active }) => (
                    <div
                        key={label}
                        className={`flex items-center gap-3 px-6 py-2 cursor-pointer rounded-md ${active ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <Icon size={18} />
                        {label}
                    </div>
                ))}
            </nav>
        </aside>
    )
}
