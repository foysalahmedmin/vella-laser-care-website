import { lazy, Suspense } from "react";

// Partials
const Loader = lazy(() => import("@/components/partials/Loader"));

// Layouts
const AuthenticationLayout = lazy(
  () => import("@/components/layouts/AuthenticationLayout"),
);
const CommonLayout = lazy(() => import("@/components/layouts/CommonLayout"));
const HomeLayout = lazy(() => import("@/components/layouts/HomeLayout"));
const ParlorLayout = lazy(() => import("@/components/layouts/ParlorLayout"));
const RootLayout = lazy(() => import("@/components/layouts/RootLayout"));
const UserLayout = lazy(() => import("@/components/layouts/UserLayout"));

// Authentication Pages
const SignInPage = lazy(() => import("@/pages/(authentication)/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/(authentication)/SignUpPage"));

// Common Pages
const ErrorPage = lazy(() => import("@/pages/(common)/ErrorPage"));
const HomePage = lazy(() => import("@/pages/(common)/HomePage"));
const PrivacyPolicyPage = lazy(
  () => import("@/pages/(common)/PrivacyPolicyPage"),
);
const NotificationsPage = lazy(
  () => import("@/pages/(common)/NotificationsPage"),
);
const ShopPage = lazy(() => import("@/pages/(common)/ShopPage"));
const ProductDetailsPage = lazy(
  () => import("@/pages/(common)/ProductDetailsPage"),
);
const BlogsPage = lazy(() => import("@/pages/(common)/BlogsPage/index.jsx"));
const BlogDetailsPage = lazy(() => import("@/pages/(common)/BlogDetailsPage"));
const DoctorsPage = lazy(() => import("@/pages/(common)/DoctorsPage"));
const DoctorDetailsPage = lazy(
  () => import("@/pages/(common)/DoctorDetailsPage"),
);
const ParlorPage = lazy(() => import("@/pages/(common)/ParlorPage"));
const ParlorDetailsPage = lazy(
  () => import("@/pages/(common)/ParlorDetailsPage"),
);
const ServicesPage = lazy(() => import("@/pages/(common)/ServicesPage"));
const ServiceDetailsPage = lazy(
  () => import("@/pages/(common)/ServiceDetailsPage"),
);
const TrainingPage = lazy(() => import("@/pages/(common)/TrainingPage"));
const ContactPage = lazy(() => import("@/pages/(common)/ContactPage"));
const MeetPage = lazy(() => import("@/pages/(common)/MeetPage"));

// Parlor Pages
const BookingHistoryPage = lazy(
  () => import("@/pages/(parlor)/BookingHistoryPage"),
);
const WithdrawHistoryPage = lazy(
  () => import("@/pages/(parlor)/WithdrawHistoryPage"),
);
const EarningsPage = lazy(() => import("@/pages/(parlor)/EarningsPage"));
const ParlorDashboard = lazy(() => import("@/pages/(parlor)/ParlorDashboard"));
const ParlorProfilePage = lazy(
  () => import("@/pages/(parlor)/ParlorProfilePage"),
);

// User Pages
const UserDashboard = lazy(() => import("@/pages/(user)/UserDashboard"));
const UserProfilePage = lazy(() => import("@/pages/(user)/UserProfilePage"));

// Checkout Pages
const CheckoutPage = lazy(() => import("@/pages/(checkout)/CheckoutPage"));
const PaymentCancelledPage = lazy(
  () => import("@/pages/(checkout)/PaymentCancelledPage"),
);
const PaymentFailedPage = lazy(
  () => import("@/pages/(checkout)/PaymentFailedPage"),
);
const PaymentSuccessPage = lazy(
  () => import("@/pages/(checkout)/PaymentSuccessPage"),
);

export const routes = [
  {
    path: "/",
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorPage />
      </Suspense>
    ),
    element: (
      <Suspense fallback={<Loader />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        element: (
          <Suspense fallback={<Loader />}>
            <HomeLayout />
          </Suspense>
        ),
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: (
          <Suspense fallback={<Loader />}>
            <CommonLayout />
          </Suspense>
        ),
        children: [
          {
            path: "/privacy-policy",
            element: (
              <Suspense fallback={<Loader />}>
                <PrivacyPolicyPage />
              </Suspense>
            ),
          },
          {
            path: "/notifications",
            element: (
              <Suspense fallback={<Loader />}>
                <NotificationsPage />
              </Suspense>
            ),
          },
          {
            path: "/contact",
            element: (
              <Suspense fallback={<Loader />}>
                <ContactPage />
              </Suspense>
            ),
          },
          {
            path: "/shop",
            element: (
              <Suspense fallback={<Loader />}>
                <ShopPage />
              </Suspense>
            ),
          },
          {
            path: "/product/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <ProductDetailsPage />
              </Suspense>
            ),
          },
          {
            path: "/blogs",
            element: (
              <Suspense fallback={<Loader />}>
                <BlogsPage />
              </Suspense>
            ),
          },
          {
            path: "/blog/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <BlogDetailsPage />
              </Suspense>
            ),
          },
          {
            path: "/parlors",
            element: (
              <Suspense fallback={<Loader />}>
                <ParlorPage />
              </Suspense>
            ),
          },
          {
            path: "/parlor/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <ParlorDetailsPage />
              </Suspense>
            ),
          },
          {
            path: "/services",
            element: (
              <Suspense fallback={<Loader />}>
                <ServicesPage />
              </Suspense>
            ),
          },
          {
            path: "/service/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <ServiceDetailsPage />
              </Suspense>
            ),
          },
          {
            path: "/doctors",
            element: (
              <Suspense fallback={<Loader />}>
                <DoctorsPage />
              </Suspense>
            ),
          },
          {
            path: "/doctor/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <DoctorDetailsPage />
              </Suspense>
            ),
          },
          {
            path: "/training",
            element: (
              <Suspense fallback={<Loader />}>
                <TrainingPage />
              </Suspense>
            ),
          },
          {
            path: "/meet/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <MeetPage />
              </Suspense>
            ),
          },
          {
            path: "/checkout",
            element: (
              <Suspense fallback={<Loader />}>
                <CheckoutPage />
              </Suspense>
            ),
          },
          {
            path: "/ssl_success",
            element: (
              <Suspense fallback={<Loader />}>
                <PaymentSuccessPage />
              </Suspense>
            ),
          },
          {
            path: "/ssl_failed",
            element: (
              <Suspense fallback={<Loader />}>
                <PaymentFailedPage />
              </Suspense>
            ),
          },
          {
            path: "/ssl_cancelled",
            element: (
              <Suspense fallback={<Loader />}>
                <PaymentCancelledPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/authentication",
        element: (
          <Suspense fallback={<Loader />}>
            <AuthenticationLayout />
          </Suspense>
        ),
        children: [
          {
            path: "sign-in",
            element: (
              <Suspense fallback={<Loader />}>
                <SignInPage />
              </Suspense>
            ),
          },
          {
            path: "sign-up",
            element: (
              <Suspense fallback={<Loader />}>
                <SignUpPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/user",
        element: (
          <Suspense fallback={<Loader />}>
            <UserLayout />
          </Suspense>
        ),
        children: [
          {
            path: "dashboard",
            element: (
              <Suspense fallback={<Loader />}>
                <UserDashboard />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<Loader />}>
                <UserProfilePage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/parlor",
        element: (
          <Suspense fallback={<Loader />}>
            <ParlorLayout />
          </Suspense>
        ),
        children: [
          {
            path: "dashboard",
            element: (
              <Suspense fallback={<Loader />}>
                <ParlorDashboard />
              </Suspense>
            ),
          },
          {
            path: "profile",
            element: (
              <Suspense fallback={<Loader />}>
                <ParlorProfilePage />
              </Suspense>
            ),
          },
          {
            path: "earnings",
            element: (
              <Suspense fallback={<Loader />}>
                <EarningsPage />
              </Suspense>
            ),
          },
          {
            path: "booking-history",
            element: (
              <Suspense fallback={<Loader />}>
                <BookingHistoryPage />
              </Suspense>
            ),
          },
          {
            path: "withdraw-history",
            element: (
              <Suspense fallback={<Loader />}>
                <WithdrawHistoryPage />
              </Suspense>
            ),
          },
          {
            path: "shop",
            element: (
              <Suspense fallback={<Loader />}>
                <ShopPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
];
