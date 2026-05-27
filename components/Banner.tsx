export default function Banner() {
    return (
        <div className="bg-blue-700 text-white py-6 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <img src="/globe.svg" alt="Portal Logo" className="h-10 w-10" />
                <h1 className="text-2xl font-bold">Statewide Public Health Portal</h1>
            </div>
            <p className="text-sm italic">Connecting New York’s Public Health Data</p>
        </div>
    )
}
