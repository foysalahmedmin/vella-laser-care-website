import { urls } from "@/api/urls.js";
import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

const ProductThumbnail = ({ className, info }) => {
  return (
    <>
      <div
        className={cn(
          "grid h-[32rem] w-full flex-1 grid-cols-1 grid-rows-1",
          className,
        )}
      >
        <Tabs
          value={0}
          className="static flex size-full flex-col-reverse gap-4 md:flex-row"
        >
          {info?.media?.gallery?.length > 0 && (
            <TabsList className="flex h-40 w-full gap-4 overflow-hidden md:h-full md:w-1/3 md:flex-col xl:w-1/4">
              {[
                { path: info?.media?.thumbnail, type: "thumbnail" },
                ...info?.media?.gallery?.map((y) => {
                  return {
                    path: y,
                    type: "gallery",
                  };
                }),
              ]?.map((image, i) => (
                <TabsTrigger
                  className="block w-full flex-1 overflow-hidden rounded-md bg-card after:hidden"
                  activeClassName="hidden"
                  key={i}
                  value={i}
                >
                  <img
                    className="size-full object-cover object-center"
                    height={50}
                    width={50}
                    src={
                      image?.type === "gallery"
                        ? `${urls?.gallery}/${image?.path}`
                        : `${urls?.thumbnail}/${image?.path}`
                    }
                    alt={name}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          )}
          {info?.media?.gallery?.length > 0 && (
            <TabsContent className="flex-1">
              {[
                { path: info?.media?.thumbnail, type: "thumbnail" },
                ...info?.media?.gallery?.map((y) => {
                  return {
                    path: y,
                    type: "gallery",
                  };
                }),
              ]?.map((image, i) => (
                <TabsItem
                  key={i}
                  value={i}
                  className="size-full overflow-hidden rounded-md border bg-card p-[0.25em] shadow-inner"
                >
                  <img
                    className="size-full rounded-md border object-cover object-center"
                    height={400}
                    width={400}
                    src={
                      image?.type === "gallery"
                        ? `${urls?.gallery}/${image?.path}`
                        : `${urls?.thumbnail}/${image?.path}`
                    }
                    alt={name}
                  />
                </TabsItem>
              ))}
            </TabsContent>
          )}
        </Tabs>
      </div>
    </>
  );
};

export default ProductThumbnail;
