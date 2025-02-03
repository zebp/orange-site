import { Outlet } from "@orange-js/orange";
import { Topnav } from "~/components/nav";
import { MDXProvider } from "@mdx-js/react";
import { ComponentProps } from "react";
import { Sidebar } from "~/components/sidebar";
import { twMerge } from "tailwind-merge";

const mdxComponents = {
  h1: (props: ComponentProps<"h1">) => (
    <h1
      className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
      {...props}
    />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <div className="rounded-lg outline-gray-300 outline-1 outline mt-3">
      <pre
      {...props}
      className={twMerge( props.className, "p-4")}
    />
    </div>
  ),
};

export default function Docs() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div>
        <Topnav max />
      </div>
      <div className="border-t border-gray-100 h-screen flex flex-row justify-start prose gap-8">
        <Sidebar />
        <main className="p-8">
          <MDXProvider components={mdxComponents}>
            <Outlet />
          </MDXProvider>
        </main>
      </div>
    </div>
  );
}
