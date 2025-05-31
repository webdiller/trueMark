// _app.tsx
import { Link, Outlet, createFileRoute, useLocation, useNavigate, useParams } from "@tanstack/react-router"
import { useIsFetching, useIsMutating, useIsRestoring } from "@tanstack/react-query"
import { useEffect } from "react"
import clsx from "clsx"

export const Route = createFileRoute("/_app")({
  component: Layout1,
})

// Компонент-скелетон для загрузки
const LayoutSkeleton = () => (
  <div className="flex h-screen flex-col">
    <header className="bg-background border-b">
      <div className="container flex h-12 items-center gap-4">
        <div className="h-6 w-6" />
        <div className="h-4 w-12" />
        <div className="h-4 w-12" />
        <div className="h-4 w-12" />
      </div>
    </header>
    <div className="container mt-4 space-y-2">
      <div className="h-8 w-full" />
      <div className="h-8 w-full" />
      <div className="h-8 w-full" />
      <div className="grid grid-cols-2 gap-2">
        <div className="h-8" />
        <div className="h-8" />
      </div>
    </div>
    <div className="container mt-auto space-x-2 py-2">
      <div className="grid grid-cols-3 gap-2">
        <div className="h-8" />
        <div className="h-8" />
        <div className="h-8" />
      </div>
    </div>
  </div>
)

function Layout1() {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  const isRestoring = useIsRestoring()
  const isAnyFetchExist = isFetching >= 1 || isMutating >= 1 || isRestoring

  const useLocationAPI = useLocation()
  const { pathname } = useLocationAPI
  const navigate = useNavigate()
  const { todoId } = useParams({ strict: false })
  const currentParam = todoId

  return (
    <div className="flex flex-1 flex-col pb-12">
      <Outlet />
    </div>
  )
}

export default Layout1
