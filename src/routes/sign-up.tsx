import { ViewSignUp } from "@/views/ViewSignUp"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/sign-up")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ViewSignUp />
}
