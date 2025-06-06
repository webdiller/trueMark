import { ViewSurveys } from '@/views/ViewSurveys'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/surveys/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ViewSurveys />
}
