import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";
import App from "@/App";
import "@/global";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

root.render(
  <StrictMode>
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-[#292929] font-jockey flex items-center justify-center">
      <RouterProvider router={ router } fallbackElement={ <div>loading...</div> } />
    </div>
  </StrictMode>,
);
