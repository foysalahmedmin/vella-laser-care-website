import RootLayout from "@/components/layouts/RootLayout";
import Loader from "@/components/partials/Loader";
import HomePage from "@/pages/(common)/HomePage";
import { Suspense } from "react";

export const routes = [
  {
    path: "/",
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];
