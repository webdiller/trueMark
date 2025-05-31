import { createFileRoute } from "@tanstack/react-router"
import { ViewNoteItemCreate } from "@/views/ViewNoteItemCreate"

export const Route = createFileRoute("/_app/todos/create")({
  component: RouteComponent,
})

function RouteComponent() {
  return <ViewNoteItemCreate />
}
