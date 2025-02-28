import { project } from "@/constants/project";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function titleGenerator(titles) {
  return `${titles.join(" | ")} | ${project?.name}`;
}

export function pathProcessor(path = "") {
  return path?.replace(/^\/|\/$/g, "");
}

export function joinPaths(paths = []) {
  if (!paths.length) {
    return "";
  }
  const processedPaths = [];
  paths?.forEach((path) => path && processedPaths.push(pathProcessor(path)));
  return pathProcessor(processedPaths.join("/"));
}

export function activePathChecker(currentPath, path) {
  if (!currentPath || !path) {
    return false;
  } else {
    return (
      pathProcessor(currentPath) === pathProcessor(path) ||
      pathProcessor(currentPath).startsWith(pathProcessor(path) + "/")
    );
  }
}

export function roleChecker(role, userRole) {
  if (!role || !role?.length) {
    return true;
  }
  return userRole && role.includes(userRole);
}

export function toFixedAndLocaleStringCurrency({
  value = 0,
  fixed = 2,
  language = "en-US",
  currency,
}) {
  if (currency) {
    return Number(Number(value).toFixed(fixed)).toLocaleString(language, {
      style: "currency",
      currency: currency,
    });
  } else {
    return Number(Number(value).toFixed(fixed)).toLocaleString(language);
  }
}

export const numberToShortForm = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

export const shortFormToNumber = (shortForm) => {
  const suffix = shortForm.slice(-1).toUpperCase();
  const number = parseFloat(shortForm.slice(0, -1));

  switch (suffix) {
    case "K":
      return number * 1e3;
    case "M":
      return number * 1e6;
    case "B":
      return number * 1e9;
    default:
      return parseFloat(shortForm);
  }
};

export const bytesToMegabytes = (bytes) => {
  return (bytes / (1024 * 1024)).toFixed(2);
};

export const remToPx = (rem) => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return rem * rootFontSize;
};

export const pxToRem = (px) => {
  const rootFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize,
  );
  return px / rootFontSize;
};
