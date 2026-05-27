export function Badge({ level, label }: { level?: string; label?: string }) {
    const color =
        level === 'High' ? 'bg-green-100 text-green-700' :
            level === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-700'

    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>{label || level}</span>
}
