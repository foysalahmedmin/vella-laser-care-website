import CheckoutLayout from "@/components/layouts/CheckoutLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RootLayout from "@/components/layouts/RootLayout";
import Loader from "@/components/partials/Loader";
import CheckoutPage from "@/pages/(common)/CheckoutPage";
import ErrorPage from "@/pages/(common)/ErrorPage";
import HomePage from "@/pages/(common)/HomePage";
import ParlorDetailsPage from "@/pages/(common)/ParlorDetailsPage";
import ParlorPage from "@/pages/(common)/ParlorPage";
import Success from "@/pages/(common)/Payment/Success.jsx";
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
        element: <CheckoutLayout />,
        children: [
          {
            path: "/checkout",
            element: <CheckoutPage />,
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
            path: "/parlor",
            element: <ParlorPage />,
          },
          {
            path: "/parlor/:id",
            element: <ParlorDetailsPage />,
          },
          {
            path: "/service/:id",
            element: <ServiceDetailsPage />,
          },
        ],
      },
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            path: "ssl_success",
            element: <Success />,
          },
        ],
      },
    ],
  },
];
