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
  h2: (props: ComponentProps<"h2">) => (
    <h1
      className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mt-10 mb-3"
      {...props}
    />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h1
      className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mb-3 max-w-[80ch]" {...props} />
  ),
  
  pre: (props: ComponentProps<"pre">) => (
    <div className="rounded-lg outline-gray-300 outline-1 outline my-4">
      <pre {...props} className={twMerge(props.className, "p-4 text-wrap")} />
    </div>
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="text-sm bg-gray-100 p-1 rounded-md" {...props} />
  ),
  img: (props: ComponentProps<"img">) => (
    <div className="m-5 p-10">
      <img className="rounded-lg shadow-lg" {...props} />
    </div>
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-orange-500 hover:underline" {...props} />
  ),
};

export default function Docs() {
  const [opened, setOpened] = useState(false);

  const location = useLocation();

  // Hide the sidebar when the route changes
  useEffect(() => setOpened(false), [setOpened, location.pathname]);

  return (
    <div className="w-screen min-h-screen flex flex-col pb-24">
      <div>
        <Topnav max />
      </div>
      <div className="container flex-row flex sm:hidden mx-auto px-5 py-2 items-center bg-gray-50">
        <MinimalButton onClick={() => setOpened(!opened)}>Menu</MinimalButton>
      </div>
      <div className="border-t border-gray-100 flex lg:flex-row justify-start prose gap-8">
        <Sidebar opened={opened} setOpened={setOpened} />
        <main className="w-screen lg:w-auto p-8 prose">
          <MDXProvider components={mdxComponents}>
            <Outlet />
          </MDXProvider>
        </main>
      </div>
    </div>
  );
}
