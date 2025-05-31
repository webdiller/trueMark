import { ViewNoteItem } from "@/views/ViewNoteItem"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_app/todos/$todoId/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { todoId } = Route.useParams()
  return <ViewNoteItem />
}
