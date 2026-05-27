export default function Topbar() {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-800">Patient Search</span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">SL</div>
                Sara Lin · Erie County HD
            </div>
        </div>
    )
}
