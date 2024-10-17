import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import CheckoutLayout from "@/components/layouts/CheckoutLayout";
import CommonLayout from "@/components/layouts/CommonLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import ParlorLayout from "@/components/layouts/ParlorLayout";
import RootLayout from "@/components/layouts/RootLayout";
import UserLayout from "@/components/layouts/UserLayout";
import Loader from "@/components/partials/Loader";
import SignInPage from "@/pages/(authentication)/SignInPage";
import SignUpPage from "@/pages/(authentication)/SignUpPage";
import CheckoutPage from "@/pages/(common)/CheckoutPage";
import DoctorDetailsPage from "@/pages/(common)/DoctorDetailsPage";
import DoctorsPage from "@/pages/(common)/DoctorsPage";
import ErrorPage from "@/pages/(common)/ErrorPage";
import HomePage from "@/pages/(common)/HomePage";
import Meet from "@/pages/(common)/Meet/Meet.jsx";
import NotificationsPage from "@/pages/(common)/NotificationsPage";
import ParlorDetailsPage from "@/pages/(common)/ParlorDetailsPage";
import ParlorPage from "@/pages/(common)/ParlorPage";
import Success from "@/pages/(common)/Payment/Success.jsx";
import ProductDetailsPage from "@/pages/(common)/ProductDetailsPage";
import ServiceDetailsPage from "@/pages/(common)/ServiceDetailsPage";
import ShopPage from "@/pages/(common)/ShopPage";
import CustomerRequestPage from "@/pages/(parlor)/CustomerRequestPage";
import EarningsPage from "@/pages/(parlor)/EarningsPage";
import ParlorDashboard from "@/pages/(parlor)/ParlorDashboard";
import ParlorProfilePage from "@/pages/(parlor)/ParlorProfilePage";
import UserDashboard from "@/pages/(user)/UserDashboard";
import UserProfilePage from "@/pages/(user)/UserProfilePage";
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
        element: <CommonLayout />,
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
            path: "/parlors",
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
          {
            path: "/doctors",
            element: <DoctorsPage />,
          },
          {
            path: "/doctor/:id",
            element: <DoctorDetailsPage />,
          },
          {
            path: "/notifications",
            element: <NotificationsPage />,
          },
          {
            path: "ssl_success",
            element: <Success />,
          },
          {
            path: "/meet/:id",
            element: <Meet />,
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
        path: "/authentication",
        element: <AuthenticationLayout />,
        children: [
          {
            path: "sign-in",
            element: <SignInPage />,
          },
          {
            path: "sign-up",
            element: <SignUpPage />,
          },
        ],
      },
      {
        path: "/user",
        element: <UserLayout />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
          },
          {
            path: "profile",
            element: <UserProfilePage />,
          },
        ],
      },
      {
        path: "/parlor",
        element: <ParlorLayout />,
        children: [
          {
            path: "dashboard",
            element: <ParlorDashboard />,
          },
          {
            path: "profile",
            element: <ParlorProfilePage />,
          },
          {
            path: "earnings",
            element: <EarningsPage />,
          },
          {
            path: "customer-request",
            element: <CustomerRequestPage />,
          },
          {
            path: "shop",
            element: <ShopPage />,
          },
        ],
      },
    ],
  },
];
