export default function Sidebar() {
    return (
        <div className="w-56 bg-white border-r border-gray-200 flex-shrink-0">
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-sm font-semibold text-gray-800">NY Public Health Portal</h1>
                <p className="text-xs text-gray-500">SHIN-NY · Epidemiology</p>
            </div>
            <nav className="mt-2">
                <div className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 border-l-2 border-blue-700">
                    Patient Search
                </div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Cohorts</div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Clinical Data</div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Audit Log</div>
                <div className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">Admin</div>
            </nav>
        </div>
    )
}
