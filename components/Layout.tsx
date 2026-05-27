import { Sidebar } from './Sidebar'
import { Header } from './Header'

export default function Layout({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title={title} />
                <main className="p-6 space-y-6">{children}</main>
            </div>
        </div>
    )
}
