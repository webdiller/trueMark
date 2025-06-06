// _app.tsx
import { Link, Outlet, createFileRoute, useLocation, useNavigate, useParams } from "@tanstack/react-router"
import { useIsFetching, useIsMutating, useIsRestoring } from "@tanstack/react-query"
import { useEffect } from "react"
import clsx from "clsx"
import { Sidebar } from "@/widgets/Sidebar"

export const Route = createFileRoute("/_app")({
  component: Layout1,
})

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
    <div className="flex bg-[#F7F8FB] flex-1 flex-col pb-12">
      <div className="flex flex-1">
        <div className="max-w-[300px] min-w-[300px]">
          <Sidebar />
        </div>
        <div className="flex-1 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout1
