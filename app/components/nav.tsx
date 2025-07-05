import { Link } from "@orange-js/orange";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Topnav({
  button,
  max = false,
}: {
  max?: boolean;
  button?: ReactNode;
}) {
  const classes = twMerge("mx-auto px-4 py-6", !max && "container");

  return (
    <nav className={classes}>
      <div className="flex items-center justify-between ">
        <div className="flex flex-row items-center gap-2">
          {button}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-extrabold"
          >
            <span>🍊 Orange</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/docs/welcome"
            className="text-gray-700 hover:text-orange-500"
          >
            Docs
          </Link>
          <Link
            to="/docs/quick-start"
            className="text-gray-700 hover:text-orange-500"
          >
            Guide
          </Link>
        </div>
      </div>
    </nav>
  );
}
