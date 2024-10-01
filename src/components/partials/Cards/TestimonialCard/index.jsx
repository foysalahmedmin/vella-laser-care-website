import { StarRating } from "@/components/ui/StarRating";

const TestimonialCard = ({ item }) => {
  const { image, name, designation, rating, feedback, service } = item;
  return (
    <div>
      <div className="flex items-start gap-4">
        <div>
          <img
            className="size-14 rounded-md object-cover object-center md:size-20"
            src={service.image}
            alt={service.name}
          />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <StarRating className="text-xl" rating={rating} />
            <p className="font-semibold">{feedback}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 border-l-2 border-primary/25 pl-4">
              <img
                className="size-10 rounded-full object-cover object-center md:size-12"
                src={image}
                alt={name}
              />
            </div>
            <div className="flex-1">
              <h5 className="mb-1 font-bold capitalize leading-none">{name}</h5>
              <p className="capitalize">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
