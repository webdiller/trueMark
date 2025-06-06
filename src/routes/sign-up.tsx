import { ViewSignUp } from "@/views/ViewSignUp"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/sign-up")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <ViewSignUp />
    </div>
  )
}
