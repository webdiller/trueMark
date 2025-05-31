import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import queryString from "query-string"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import "./index.css"

// Настройка для TanStack Router
const customStringifySearch = (search: Record<string, unknown>) => {
  const stringified = queryString.stringify(search, {
    arrayFormat: "bracket-separator",
    skipNull: true,
    skipEmptyString: true,
    encode: false,
  });
  if (stringified === "") return "";
  return `?${stringified}`;
}

// Кастомная десериализация
const customParseSearch = (search: string) => {
  const parsed = queryString.parse(search, {
    arrayFormat: "bracket-separator",
    parseNumbers: true,
    parseBooleans: true,
  });
  return parsed;
}

const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({ routeTree, context: { queryClient }, stringifySearch: customStringifySearch, parseSearch: customParseSearch })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}
