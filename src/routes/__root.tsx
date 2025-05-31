import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = createRootRoute({
  component: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [queryClient] = useState(
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      }),
    )
    return (
      <div className="flex min-h-svh flex-col">
        <QueryClientProvider client={queryClient}>
          <div className="flex flex-1 flex-col">
            <Outlet />
          </div>
        </QueryClientProvider>
        <TanStackRouterDevtools />
      </div>
    )
  },
})
