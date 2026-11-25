import { BrowserRouter, Route, Routes } from 'react-router-dom'

function DashboardPlaceholder() {
  return (
    <main className="min-h-screen bg-background p-6 text-text-primary">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent-yellow px-3 py-1 text-xs font-bold text-primary-dark">
              KURUMBAR ADMIN
            </span>
            <h1 className="mt-3 text-2xl font-bold text-primary-dark">
              Kurumbar Administration Console
            </h1>
            <p className="mt-1 text-sm text-text-secondary">
              Moderation queues for Members, Matrimony, Sales, Job Portal, and Community News.
            </p>
          </div>
          <button
            type="button"
            className="min-h-11 cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DashboardPlaceholder />} />
      </Routes>
    </BrowserRouter>
  )
}
