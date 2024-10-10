import Header from "@/components/partials/Header";
import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <>
      <Header variant="authentication" />
      <main
        style={{
          backgroundImage: `url(${"/images/backgrounds/authentication-background.png"})`,
        }}
        className="bg-cover bg-fixed bg-center bg-no-repeat"
      >
        <section className="grid min-h-screen-minus-header place-items-center bg-background/50 px-container py-12 backdrop-blur">
          <div className="h-fit w-fit">
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthenticationLayout;
