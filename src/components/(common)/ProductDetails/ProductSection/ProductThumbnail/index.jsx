import {
  Tabs,
  TabsContent,
  TabsItem,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

const ProductThumbnail = ({ product, className }) => {
  const { name, image, images: othersImages } = product;
  const isImages = othersImages?.length > 0;
  const images = [image, ...(isImages ? othersImages : [])];
  return (
    <>
      <div
        className={cn(
          "grid h-[32rem] w-full flex-1 grid-cols-1 grid-rows-1",
          className,
        )}
      >
        <Tabs
          defaultValue={0}
          className="static flex size-full flex-col-reverse gap-4 md:flex-row"
        >
          {isImages && (
            <TabsList className="flex h-40 w-full gap-4 overflow-hidden md:h-full md:w-1/3 md:flex-col xl:w-1/4">
              {images?.map((image, i) => (
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
                    src={image}
                    alt={name}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          )}
          <TabsContent className="flex-1">
            {images.map((image, i) => (
              <TabsItem
                key={i}
                value={i}
                className="size-full overflow-hidden rounded-md border bg-card p-[0.25em] shadow-inner"
              >
                <img
                  className="size-full rounded-md border object-cover object-center"
                  height={400}
                  width={400}
                  src={image}
                  alt={name}
                />
              </TabsItem>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ProductThumbnail;
