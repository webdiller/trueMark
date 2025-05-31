import { ViewNotes } from "@/views/ViewNotes"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/todos/")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ViewNotes />
}
