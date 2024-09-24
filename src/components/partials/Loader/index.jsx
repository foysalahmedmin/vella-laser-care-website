import PortalRoot from "@/components/portals/PortalRoot";
import { cn } from "@/lib/utils";

const Span = ({ children, className, ...props }) => (
  <span
    className={cn(
      "m-2 block animate-loading-spin rounded-full border-2 border-background border-l-border border-r-border border-t-primary",
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

const NestedSpan = ({ depth, className, ...props }) => {
  if (depth === 0) {
    return (
      <Span
        className={cn(
          "border-primary border-b-primary border-l-primary border-t-primary",
          className,
        )}
        {...props}
      />
    );
  }

  return (
    <Span className={className} {...props}>
      <NestedSpan className={className} depth={depth - 1} {...props} />
    </Span>
  );
};

const Loader = ({ className, spanProps, depth = 7 }) => {
  return (
    <PortalRoot>
      <main
        className={cn(
          "fixed left-0 right-0 top-0 z-[100000] flex h-screen w-screen items-center justify-center bg-background/75 backdrop-blur-sm",
          className,
        )}
      >
        <div>
          <NestedSpan {...spanProps} depth={depth} />
        </div>
      </main>
    </PortalRoot>
  );
};

export default Loader;
