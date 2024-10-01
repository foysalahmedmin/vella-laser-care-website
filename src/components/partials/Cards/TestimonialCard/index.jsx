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
          <div className="flex items-center gap-2 border-l-4 border-primary/25 pl-2">
            <div>
              <img
                className="size-10 rounded-full object-cover object-center md:size-16"
                src={image}
                alt={name}
              />
            </div>
            <div>
              <h5 className="font-semibold capitalize">{name}</h5>
              <p className="capitalize">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
