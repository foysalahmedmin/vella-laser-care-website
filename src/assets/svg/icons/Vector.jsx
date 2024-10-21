import { forwardRef } from "react";

const Vector = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 51 60"
      ref={ref}
      {...props}
    >
      <path
        d="M50.7528 29.2628C50.5463 28.8091 50.03 28.5822 49.6169 28.4688C47.2419 28.4688 26.7962 27.5614 26.7962 1.47448C26.7962 0.680528 26.1767 0 25.4538 0C24.731 0 24.1115 0.680528 24.1115 1.47448C24.1115 27.5614 3.66577 28.4688 1.39402 28.4688C1.08424 28.4688 0.774457 28.5822 0.567935 28.8091C0.361413 28.9225 0.258153 29.1493 0.154892 29.2628C-0.0516305 29.7164 -0.0516305 30.2836 0.154892 30.7372C0.361414 31.1909 0.877718 31.5312 1.39402 31.5312C1.39402 31.5312 1.39403 31.5312 1.49729 31.5312C3.87229 31.5312 24.2147 32.4386 24.2147 58.5255C24.2147 59.3195 24.8343 60 25.5571 60C26.2799 60 26.8995 59.3195 26.8995 58.5255C26.8995 32.552 47.2419 31.5312 49.6169 31.5312C50.1332 31.5312 50.5463 31.1909 50.8561 30.7372C51.0626 30.2836 51.0626 29.7164 50.7528 29.2628ZM25.4538 47.4102C22.4593 36.6352 15.1277 31.9849 9.34512 29.9433C15.1277 27.9017 22.4593 23.2514 25.4538 12.4764C28.4484 23.2514 35.7799 27.9017 41.5626 29.9433C35.7799 31.9849 28.4484 36.6352 25.4538 47.4102Z"
        fill="currentColor"
      />
    </svg>
  );
});
Vector.displayName = "Vector";

const VectorGroup = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 84 84"
      ref={ref}
      {...props}
    >
      <path
        d="M82.8301 47.1688C82.6241 46.7301 82.109 46.5107 81.6969 46.401C79.3274 46.401 58.9293 45.5234 58.9293 20.2937C58.9293 19.5258 58.3111 18.8677 57.59 18.8677C56.8688 18.8677 56.2507 19.5258 56.2507 20.2937C56.2507 45.5234 35.8526 46.401 33.5861 46.401C33.277 46.401 32.968 46.5107 32.7619 46.7301C32.5559 46.8398 32.4529 47.0591 32.3498 47.1688C32.1438 47.6076 32.1438 48.1561 32.3498 48.5949C32.5559 49.0336 33.071 49.3627 33.5861 49.3627C33.5861 49.3627 33.5861 49.3627 33.6891 49.3627C36.0586 49.3627 56.3537 50.2403 56.3537 75.47C56.3537 76.2379 56.9719 76.896 57.693 76.896C58.4142 76.896 59.0323 76.2379 59.0323 75.47C59.0323 50.35 79.3274 49.3627 81.6969 49.3627C82.212 49.3627 82.6241 49.0336 82.9332 48.5949C83.1392 48.1561 83.1392 47.6076 82.8301 47.1688ZM57.59 64.7199C54.6024 54.299 47.2879 49.8015 41.5187 47.827C47.2879 45.8525 54.6024 41.355 57.59 30.9341C60.5776 41.355 67.8921 45.8525 73.6613 47.827C67.8921 49.8015 60.5776 54.299 57.59 64.7199Z"
        fill="currentColor"
      />
      <path
        d="M40.5905 18.6481C41.3117 18.6481 41.9298 17.9899 41.9298 17.1123C41.9298 16.3445 41.3117 15.6863 40.5905 15.6863C39.3543 15.6863 28.228 15.2475 28.228 1.42603C28.228 0.658167 27.6099 0 26.8887 0C26.1676 0 25.5494 0.658167 25.5494 1.42603C25.5494 15.2475 14.4232 15.6863 13.1869 15.6863C13.0839 15.6863 13.0839 15.6863 13.0839 15.6863C12.3628 15.796 11.8477 16.3445 11.8477 17.1123C11.8477 17.8802 12.4658 18.5384 13.1869 18.5384C14.5262 18.5384 25.5494 18.9771 25.5494 32.7986C25.5494 33.5665 26.1676 34.2247 26.8887 34.2247C27.5068 34.3344 28.125 33.6762 28.125 32.9083C28.125 19.0868 39.2512 18.6481 40.4875 18.6481H40.5905ZM26.7857 24.9006C25.1374 20.7323 22.1498 18.4287 19.3682 17.1123C22.3558 15.796 25.1374 13.273 26.7857 9.32403C28.434 13.4924 31.4216 15.796 34.2032 17.1123C31.2156 18.4287 28.434 20.9516 26.7857 24.9006Z"
        fill="currentColor"
      />
      <path
        d="M28.7429 65.1585C27.5066 65.1585 16.3803 64.7197 16.3803 50.8982C16.3803 50.1303 15.7622 49.4722 15.0411 49.4722C14.3199 49.4722 13.7018 50.1303 13.7018 50.8982C13.7018 64.7197 2.57553 65.1585 1.33927 65.1585C1.23625 65.1585 1.23625 65.1585 1.23625 65.1585C0.515105 65.2682 0 65.8166 0 66.5845C0 67.3524 0.618126 68.0105 1.33927 68.0105C2.67855 68.0105 13.7018 68.4493 13.7018 82.2708C13.7018 83.0387 14.3199 83.6968 15.0411 83.6968C15.6592 83.9162 16.2773 83.258 16.2773 82.3805C16.2773 68.559 27.4036 68.1202 28.6398 68.1202H28.7429C29.464 68.1202 30.0821 67.4621 30.0821 66.5845C30.0821 65.8166 29.464 65.1585 28.7429 65.1585ZM14.938 74.4825C13.1867 70.3141 10.3021 68.0105 7.52053 66.6942C10.5081 65.3779 13.2897 62.8549 14.938 58.9059C16.5864 63.0743 19.574 65.3779 22.3556 66.6942C19.3679 68.0105 16.5864 70.5335 14.938 74.4825Z"
        fill="currentColor"
      />
    </svg>
  );
});
VectorGroup.displayName = "VectorGroup";

export { Vector, VectorGroup };
