import { Outlet, useLocation } from "@orange-js/orange";
import { Topnav } from "~/components/nav";
import { MDXProvider } from "@mdx-js/react";
import { ComponentProps, useEffect, useState } from "react";
import { Sidebar } from "~/components/sidebar";
import { twMerge } from "tailwind-merge";
import { MinimalButton } from "~/components/button";

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
  const [opened, setOpened] = useState(false);

  const location = useLocation();

  // Hide the sidebar when the route changes
  useEffect(() => setOpened(false), [setOpened, location.pathname])

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <div>
        <Topnav max />
      </div>
      <div className="container flex-row flex sm:hidden mx-auto px-5 py-2 items-center bg-gray-50">
        <MinimalButton onClick={() => setOpened(!opened)}>Menu</MinimalButton>
      </div>
      <div className="border-t border-gray-100 h-screen flex lg:flex-row justify-start prose gap-8">
        <Sidebar opened={opened} />
        <main className="p-8">
          <MDXProvider components={mdxComponents}>
            <Outlet />
          </MDXProvider>
        </main>
      </div>
    </div>
  );
}
