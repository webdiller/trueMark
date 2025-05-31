import { createLazyFileRoute } from "@tanstack/react-router"
import { ViewHome } from "@/views/ViewHome"

export const Route = createLazyFileRoute("/")({
  component: App,
})

function App() {
  return <ViewHome />
}

export default App
