import { Bell, ChevronDown } from 'lucide-react'

export function Header({ title }: { title: string }) {
    return (
        <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
            {/* Left side: Page title */}
            <h1 className="text-lg font-semibold text-gray-800">{title}</h1>

            {/* Right side: Nav + User */}
            <div className="flex items-center gap-6">
                {/* Notifications */}
                <button className="relative text-gray-500 hover:text-gray-700">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
                </button>

                {/* User profile */}
                <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-md">
                    <img
                        src="/avatar.png"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-800">Sara Lin</span>
                        <span className="text-xs text-gray-500">Erie County HD</span>
                    </div>
                    <ChevronDown size={16} className="text-gray-500" />
                </div>
            </div>
        </header>
    )
}
