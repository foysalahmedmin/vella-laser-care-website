import ReactToaster from "@/components/partials/ReactToaster";
import Providers from "@/components/providers";
import { routes } from "@/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <>
      <Providers>
        <RouterProvider router={router} />
        <ReactToaster />
      </Providers>
    </>
  );
};

export default App;
