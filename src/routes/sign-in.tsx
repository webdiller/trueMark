import { createFileRoute } from "@tanstack/react-router"
import { ViewSignIn } from "@/views/ViewSignIn"

export const Route = createFileRoute("/sign-in")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ViewSignIn />
}
