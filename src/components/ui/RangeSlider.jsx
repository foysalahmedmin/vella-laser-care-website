"use client";

import { cn } from "@/lib/utils";
import { ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// RangeSliderContext
export const RangeSliderContext = createContext(null);

export const useRangeSliderContext = () => {
  const context = useContext(RangeSliderContext);

  if (!context) {
    throw new Error(
      "useRangeSliderContext must be used within <RangeSlider />",
    );
  }

  return context;
};

// RangeSlider component
const RangeSlider = forwardRef(
  (
    {
      className,
      initialMinValue = 2500,
      initialMaxValue = 7500,
      minGap = 500,
      minLimit = 0,
      maxLimit = 10000,
      stepSize = 100,
      children,
      ...props
    },
    ref,
  ) => {
    const [minValue, setMinValue] = useState(initialMinValue);
    const [maxValue, setMaxValue] = useState(initialMaxValue);

    const minInputRef = useRef(null);
    const maxInputRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
      const updateProgressBar = () => {
        if (minInputRef.current && maxInputRef.current) {
          minInputRef.current.value = minValue;
          maxInputRef.current.value = maxValue;
          progressRef.current.style.left = `${(minValue / minInputRef.current.max) * 100}%`;
          progressRef.current.style.right = `${100 - (maxValue / maxInputRef.current.max) * 100}%`;
        }
      };

      updateProgressBar();
    }, [minValue, maxValue]);

    const handleMinInputChange = (e) => {
      const value = parseInt(e.target.value);
      if (maxValue - value >= minGap) {
        setMinValue(value);
      }
    };

    const handleMaxInputChange = (e) => {
      const value = parseInt(e.target.value);
      if (value - minValue >= minGap) {
        setMaxValue(value);
      }
    };

    const handleMinRangeChange = (e) => {
      const value = parseInt(e.target.value);
      if (maxValue - value >= minGap) {
        setMinValue(value);
      }
    };

    const handleMaxRangeChange = (e) => {
      const value = parseInt(e.target.value);
      if (value - minValue >= minGap) {
        setMaxValue(value);
      }
    };

    return (
      <RangeSliderContext.Provider
        value={{
          minValue,
          maxValue,
          minGap,
          minLimit,
          maxLimit,
          stepSize,
          minInputRef,
          maxInputRef,
          progressRef,
          setMinValue,
          setMaxValue,
          handleMinInputChange,
          handleMaxInputChange,
          handleMinRangeChange,
          handleMaxRangeChange,
        }}
      >
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>
      </RangeSliderContext.Provider>
    );
  },
);

RangeSlider.displayName = "RangeSlider";

// RangeSliderInput component
const RangeSliderInput = forwardRef(({ className, ...props }, ref) => {
  const {
    minInputRef,
    maxInputRef,
    progressRef,
    minValue,
    maxValue,
    minLimit,
    maxLimit,
    stepSize,
    handleMinRangeChange,
    handleMaxRangeChange,
  } = useRangeSliderContext();

  return (
    <div className={cn("", className)} ref={ref} {...props}>
      <div className="slider shadow-inner">
        <div ref={progressRef} className="progress" />
      </div>
      <div className="range-input relative">
        <input
          type="range"
          ref={minInputRef}
          className="range-min"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          step={stepSize}
          onChange={handleMinRangeChange}
        />
        <input
          type="range"
          ref={maxInputRef}
          className="range-max"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          step={stepSize}
          onChange={handleMaxRangeChange}
        />
      </div>
    </div>
  );
});

RangeSliderInput.displayName = "RangeSliderInput";

// MinInput component
const MinInput = forwardRef(({ className, ...props }, ref) => {
  const { minValue, handleMinInputChange } = useRangeSliderContext();

  return (
    <label
      className={cn("input gap-0 divide-x rounded-r-none px-2 py-2", className)}
      ref={ref}
      {...props}
    >
      <span className="inline-block shrink-0 pr-1">
        <ArrowBigDownDash className="size-[1.25em]" strokeWidth={1} />
      </span>
      <input
        type="number"
        className="size-full bg-transparent pl-2 outline-none"
        value={minValue}
        onChange={handleMinInputChange}
      />
    </label>
  );
});

MinInput.displayName = "MinInput";

// MaxInput component
const MaxInput = forwardRef(({ className, ...props }, ref) => {
  const { maxValue, handleMaxInputChange } = useRangeSliderContext();

  return (
    <label
      className={cn("input gap-0 divide-x rounded-r-none px-2 py-2", className)}
      ref={ref}
      {...props}
    >
      <span className="inline-block shrink-0 pr-1">
        <ArrowBigUpDash className="size-[1.25em]" strokeWidth={1} />
      </span>
      <input
        type="number"
        className="size-full bg-transparent pl-2 outline-none"
        value={maxValue}
        onChange={handleMaxInputChange}
      />
    </label>
  );
});

MaxInput.displayName = "MaxInput";

export { MaxInput, MinInput, RangeSlider, RangeSliderInput };
