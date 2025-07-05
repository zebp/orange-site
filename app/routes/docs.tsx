import { Outlet, useLocation } from "@orange-js/orange";
import { Topnav } from "~/components/nav";
import { MDXProvider } from "@mdx-js/react";
import { ComponentProps, useEffect, useState } from "react";
import { Sidebar } from "~/components/sidebar";
import { twMerge } from "tailwind-merge";
import { MinimalButton } from "~/components/button";
import { GoSidebarCollapse } from "react-icons/go";

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
    <div className="rounded-lg outline-gray-300 outline my-4">
      <pre {...props} className={twMerge(props.className, "p-4 text-wrap")} />
    </div>
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="text-sm bg-gray-100 font-mono p-1 rounded-md" {...props} />
  ),
  img: (props: ComponentProps<"img">) => (
    <div className="m-5 p-10">
      <img className="rounded-lg shadow-lg" {...props} />
    </div>
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-orange-500 hover:underline" {...props} />
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="shadow-lg my-4">
      <table
        className="border-collapse border border-gray-200 table-auto w-full"
        {...props}
      />
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="bg-gray-50 rounded-lg" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="p-2 font-semibold text-left border border-gray-200"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="p-2 border border-gray-200" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc list-inside" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal list-inside" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="mb-2" {...props} />
  )
};

export default function Docs() {
  const [opened, setOpened] = useState(false);

  const location = useLocation();

  // Hide the sidebar when the route changes
  useEffect(() => setOpened(false), [setOpened, location.pathname]);

  return (
    <>
      <Topnav
        max
        button={<SidebarToggle opened={opened} setOpened={setOpened} />}
      />
      <div className="w-screen min-h-screen flex flex-col">
        <div className="flex-row flex lg:hidden mx-auto w-full px-5 py-2 items-center bg-gray-50">
          <MinimalButton onClick={() => setOpened(!opened)}>Menu</MinimalButton>
        </div>
        <div className="border-t border-gray-100 flex lg:flex-row justify-start prose">
          <Sidebar opened={opened} setOpened={setOpened} />
          <div className="flex flex-col w-full">
            <header className="flex justify-center py-3 border-b border-gray-100">
              🚧 These docs are under construction 🚧
            </header>
            <main className="w-screen lg:w-auto prose pt-8 px-4 md:px-10 lg:px-20 pb-24">
              <MDXProvider components={mdxComponents}>
                <Outlet />
              </MDXProvider>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarToggle({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (o: boolean) => void;
}) {
  return (
    <div className="p-2 block lg:hidden bg-red-500" onClick={() => setOpened(!opened)}>
      {opened ? <GoSidebarCollapse className="w-6 h-6" /> : <GoSidebarCollapse className="w-6 h-6" />}
    </div>
  );
}
