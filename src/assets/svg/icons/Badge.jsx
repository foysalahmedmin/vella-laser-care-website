import { forwardRef } from "react";

const Badge = forwardRef((props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="86"
      viewBox="0 0 72 86"
      fill="none"
      ref={ref}
      {...props}
    >
      <path
        d="M65.7066 24.073C64.811 21.3137 66.8369 16.3302 64.4506 13.0517C62.0523 9.75635 56.6488 10.1294 54.3553 8.45981C52.0753 6.80063 50.7903 1.54461 46.8686 0.271415C43.0168 -0.979268 39.0017 2.49815 35.9995 2.49815C33.0076 2.49815 28.9717 -0.976077 25.13 0.271415C21.2148 1.54293 19.9121 6.8092 17.6439 8.45981C15.3345 10.1405 9.95248 9.74812 7.54803 13.0517C5.16424 16.3274 7.18472 21.3234 6.29214 24.0732C5.43769 26.7044 0.832031 29.5484 0.832031 33.7258C0.832031 36.2878 2.55907 38.337 4.08287 40.1448C6.56273 43.0867 6.71004 43.4353 6.43575 47.4747C6.27853 49.7886 6.10066 52.4114 7.54803 54.4C9.71917 57.3832 14.2973 57.3434 16.9087 58.5676L9.15094 77.1891C8.61042 78.487 9.81441 79.8378 11.1655 79.4493L20.2529 76.837L24.7967 85.1286C25.4572 86.3339 27.2161 86.2773 27.7944 85.0263L35.9995 67.2775L44.2045 85.0263C44.7808 86.2733 46.5392 86.3384 47.2022 85.1286L51.7461 76.837L60.8334 79.4493C61.4537 79.628 62.1219 79.4345 62.5514 78.9526C62.981 78.4707 63.0963 77.785 62.8482 77.1891L55.0903 58.5674C57.7067 57.3409 62.2796 57.3833 64.4511 54.3997C66.8349 51.124 64.8146 46.1279 65.707 43.3782C66.5613 40.7476 71.1671 37.9029 71.1671 33.7256C71.1667 29.5577 66.5554 26.6864 65.7066 24.073ZM26.1425 80.5941L22.5534 74.0446C22.1759 73.3559 21.3717 73.0203 20.6164 73.2375L13.5959 75.2554L19.4661 61.1649C21.235 63.8908 22.9607 67.453 26.8997 67.453C28.9877 67.453 31.0715 66.4303 33.036 65.6822L26.1425 80.5941ZM51.3824 73.2375C50.6272 73.0205 49.8228 73.3557 49.4454 74.0446L45.8563 80.5941L38.9627 65.682C41.5313 66.6602 44.1981 68.0475 46.8686 67.1799C49.6265 66.2847 51.0441 63.4591 52.5326 61.1647L58.4029 75.2553L51.3824 73.2375ZM62.5114 42.3408C61.3867 45.8058 63.1374 50.4949 61.7346 52.4228C60.2255 54.4966 54.9972 54.0352 51.916 56.645C49.345 58.8756 48.0473 63.2651 45.8314 63.9849C43.6173 64.7021 39.6853 61.5938 35.9995 61.5938C32.2938 61.5938 28.3875 64.7049 26.1677 63.9849C23.8324 63.2265 22.5208 58.3855 19.6205 56.2753C18.1982 55.2403 16.3942 54.7897 14.6495 54.354C9.79005 53.1404 9.45193 52.6442 9.7877 47.702C9.91015 45.898 10.0366 44.0326 9.48755 42.341C8.38652 38.9507 4.19171 36.2545 4.19171 33.7256C4.19171 31.2044 8.39005 28.4899 9.48755 25.1106C10.6123 21.6456 8.86153 16.9561 10.2646 15.0283C11.6987 13.0579 16.6722 13.3215 19.6207 11.1758C22.5315 9.05727 23.8237 4.22754 26.1677 3.46632C28.3791 2.74876 32.3138 5.85733 35.9996 5.85733C39.6843 5.85733 43.6193 2.74792 45.8314 3.46632C48.1865 4.23107 49.4503 9.04484 52.3788 11.1758C55.3086 13.3082 60.307 13.0661 61.7349 15.0283C63.1451 16.9665 61.3801 21.6246 62.5119 25.1104C63.6165 28.5122 67.8076 31.1918 67.8076 33.7256C67.8074 36.2471 63.6107 38.9559 62.5114 42.3408Z"
        fill="currentColor"
      />
      <path
        d="M50.4274 27.1917L41.4988 25.8944L37.5059 17.8034C36.8908 16.5572 35.1085 16.5569 34.4932 17.8034L30.5003 25.8944L21.5717 27.1917C20.1969 27.3915 19.6449 29.0862 20.6406 30.0568L27.1015 36.3547L25.5763 45.2474C25.3419 46.6171 26.7828 47.6646 28.0135 47.0181L35.9997 42.8194L43.9859 47.0181C45.211 47.6619 46.6587 46.6242 46.4231 45.2474L44.8979 36.3547L51.3588 30.0568C52.3533 29.0869 51.8034 27.3916 50.4274 27.1917ZM41.9204 34.5655C41.5246 34.9513 41.3439 35.5073 41.4373 36.0522L42.5365 42.4608L36.7811 39.435C36.2921 39.1779 35.7069 39.1777 35.2178 39.435L29.4624 42.4608L30.5616 36.0522C30.655 35.5073 30.4743 34.9513 30.0785 34.5655L25.4223 30.0269L31.857 29.092C32.4042 29.0125 32.877 28.6688 33.1218 28.1732L35.9994 22.3424L38.877 28.1732C39.1217 28.6688 39.5945 29.0125 40.1418 29.092L46.5764 30.0269L41.9204 34.5655Z"
        fill="currentColor"
      />
    </svg>
  );
});
Badge.displayName = "Badge";

export { Badge };
