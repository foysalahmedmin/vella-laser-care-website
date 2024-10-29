import {
  Star as StarFull,
  StarEmpty,
  StarHalf,
} from "@/assets/svg/icons/Stars";
import { cn } from "@/lib/utils";
import { forwardRef, useMemo } from "react";
import { SetFeedbackProducts } from "@/redux/slices/feedbackSlice.js";
import { useDispatch, useSelector } from "react-redux";

// Utility function to process the rating
export const ratingProcessor = (rating = 0, range = 5, total = 5) => {
  if (
    rating < 0 ||
    range < 0 ||
    range < rating ||
    isNaN(rating) ||
    isNaN(range)
  ) {
    return 0;
  }
  return (Number(rating) * total) / Number(range);
};

// Utility function to generate star states (full, half, empty)
const generateStars = (rating, total) => {
  const fullStars = Array.from({ length: Math.floor(rating) }, () => "full");
  const halfStars = Array.from(
    { length: !Number.isInteger(rating) ? 1 : 0 },
    () => "half",
  );
  const emptyStars = Array.from(
    { length: total - Math.ceil(rating) },
    () => "empty",
  );
  return [...fullStars, ...halfStars, ...emptyStars];
};

const StarRatingProvide = forwardRef(
  (
    {
      rating = 0,
      product,
      index,
      range: rangeProp = 5,
      total = 5,
      className,
      color = "#ff7f45",
      clickable = false,
      fullIcon = <StarFull />,
      halfIcon = <StarHalf />,
      emptyIcon = <StarEmpty />,
      ...props
    },
    ref,
  ) => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.feedback);
    const stars = useMemo(() => generateStars(rating, total), [rating, total]);

    const onStarSelect = (rate, name) => {
      if (!clickable) return;
      const newRating = ratingProcessor(rate + 1, rangeProp, total);
      const updatedInputs = products?.map((p) => ({ ...p }));
      updatedInputs[index][name] = newRating;
      dispatch(SetFeedbackProducts(updatedInputs));
    };

    return (
      <ul
        className={cn(
          "inline-flex items-center justify-center gap-[0.25em]",
          className,
        )}
        value={ratingProcessor(rating, rangeProp, total)}
        ref={ref}
        {...props}
      >
        {stars.map((state, index) => (
          <li
            key={index}
            className={state}
            style={{
              ...(clickable && { cursor: "pointer" }),
              ...((state === "full" || state === "half") &&
                color && {
                  color,
                }),
            }}
            onClick={() => onStarSelect(index, "rating")}
          >
            {state === "full"
              ? fullIcon
              : state === "half"
                ? halfIcon
                : emptyIcon}
          </li>
        ))}
      </ul>
    );
  },
);

StarRatingProvide.displayName = "StarRating";

export { StarRatingProvide };
