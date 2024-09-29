import { forwardRef } from "react";

const Vector = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M50.7528 29.2628C50.5463 28.8091 50.03 28.5822 49.6169 28.4688C47.2419 28.4688 26.7962 27.5614 26.7962 1.47448C26.7962 0.680528 26.1767 0 25.4538 0C24.731 0 24.1115 0.680528 24.1115 1.47448C24.1115 27.5614 3.66577 28.4688 1.39402 28.4688C1.08424 28.4688 0.774457 28.5822 0.567935 28.8091C0.361413 28.9225 0.258153 29.1493 0.154892 29.2628C-0.0516305 29.7164 -0.0516305 30.2836 0.154892 30.7372C0.361414 31.1909 0.877718 31.5312 1.39402 31.5312C1.39402 31.5312 1.39403 31.5312 1.49729 31.5312C3.87229 31.5312 24.2147 32.4386 24.2147 58.5255C24.2147 59.3195 24.8343 60 25.5571 60C26.2799 60 26.8995 59.3195 26.8995 58.5255C26.8995 32.552 47.2419 31.5312 49.6169 31.5312C50.1332 31.5312 50.5463 31.1909 50.8561 30.7372C51.0626 30.2836 51.0626 29.7164 50.7528 29.2628ZM25.4538 47.4102C22.4593 36.6352 15.1277 31.9849 9.34512 29.9433C15.1277 27.9017 22.4593 23.2514 25.4538 12.4764C28.4484 23.2514 35.7799 27.9017 41.5626 29.9433C35.7799 31.9849 28.4484 36.6352 25.4538 47.4102Z"
      ></path>
    </svg>
  );
});
Vector.displayName = "Vector";

export { Vector };
