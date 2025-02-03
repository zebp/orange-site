import { Link } from "@orange-js/orange";
import { twMerge } from "tailwind-merge";

export function Topnav({ max = false }: { max?: boolean }) {
  const classes = twMerge("mx-auto px-4 py-6 flex items-center justify-between", !max && "container");

  return (
    <nav className={classes}>
      <Link to="/" className="flex items-center space-x-2 text-2xl font-extrabold">
        <span>🍊 Orange</span>
      </Link>
      <div className="space-x-4">
        <Link to="/docs/welcome" className="text-gray-700 hover:text-orange-500">
          Docs
        </Link>
        <Link to="/docs/quick-start" className="text-gray-700 hover:text-orange-500">
          Guide
        </Link>
      </div>
    </nav>
  );
}