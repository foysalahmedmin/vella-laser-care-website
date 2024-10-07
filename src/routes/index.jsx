import HomeLayout from "@/components/layouts/HomeLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "@/components/layouts/RootLayout";
import Loader from "@/components/partials/Loader";
import ErrorPage from "@/pages/(common)/ErrorPage";
import HomePage from "@/pages/(common)/HomePage";
import ProductDetailsPage from "@/pages/(common)/ProductDetailsPage";
import ServiceDetailsPage from "@/pages/(common)/ServiceDetailsPage";
import ShopPage from "@/pages/(common)/ShopPage";
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
        element: <HomeLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: "/shop",
            element: <ShopPage />,
          },
          {
            path: "/product/:id",
            element: <ProductDetailsPage />,
          },
          {
            path: "/service/:id",
            element: <ServiceDetailsPage />,
          },
        ],
      },
    ],
  },
];
