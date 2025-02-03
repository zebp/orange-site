import { Link } from "@orange-js/orange";
import { ComponentProps } from "react";

export const LinkButton = (props: ComponentProps<typeof Link>) => (
  <Link
    {...props}
    className="bg-orange-500 hover:bg-orange-600 transition-colors ease-in-out whitespace-nowrap text-white px-4 py-3 rounded-md"
  />
);

export const MinimalLink = (props: ComponentProps<typeof Link>) => (
  <Link {...props} className="text-orange-500 px-4 py-3 whitespace-nowrap" />
);

export const MinimalButton = (props: ComponentProps<"button">) => (
  <button {...props} className="text-orange-500 px-4 py-3 whitespace-nowrap" />
);