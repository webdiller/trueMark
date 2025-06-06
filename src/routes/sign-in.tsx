import { createFileRoute } from "@tanstack/react-router"
import { ViewSignIn } from "@/views/ViewSignIn"

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <ViewSignIn />
    </div>
  )
}
