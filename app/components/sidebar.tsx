import { Link, useLocation } from "@orange-js/orange";
import { PropsWithChildren, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Sidebar({ opened }: { opened: boolean }) {
  const classes = twMerge("flex-col p-4 w-80 h-full text-gray-800 border-r border-gray-100 bg-white absolute sm:relative flex transition-all left-0", !opened && "-left-80 sm:-left-0")

  return (
    <aside className={classes}>
      <Section title="Getting Started">
        <SidebarLink to="/docs/welcome">Welcome to 🍊</SidebarLink>
        <SidebarLink to="/docs/quick-start">Quick Start</SidebarLink>
        <SidebarLink to="/docs/secret-sauce">Secret Sauce</SidebarLink>
        <SidebarLink to="/docs/todo">Spatial Compute</SidebarLink>
      </Section>

      <Section title="Data Layer">
        <SidebarLink to="/docs/todo">
          SQL Databases <CloudflareChip>Hyperdrive</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Object Storage <CloudflareChip>R2</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          SQLite <CloudflareChip>D1</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Durable Objects<CloudflareChip>Durable Object</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Key-Value Storage <CloudflareChip>KV</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Vector Database <CloudflareChip>Vectorize</CloudflareChip>
        </SidebarLink>
      </Section>

      <Section title="How do I" folded>
        <SidebarLink to="/docs/todo">Connect to a Database</SidebarLink>
        <SidebarLink to="/docs/todo">Create preview URLs</SidebarLink>
      </Section>

      <Section title="Features">
        <SidebarLink to="/docs/todo">
          Durable Execution <CloudflareChip>Workflows</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Queues <CloudflareChip>Queues</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Rate Limiting <CloudflareChip>Rate Limiting</CloudflareChip>
        </SidebarLink>
      </Section>
    </aside>
  );
}

function Section({
  title,
  children,
  folded = false,
}: PropsWithChildren<{ title: string; folded?: boolean }>) {
  const [open, setOpen] = useState(!folded);

  return (
    <section className="flex flex-col">
      <h2
        className="font-semibold text-xl hover:bg-gray-50 p-3 rounded-md hover:cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
      >
        {title}{!open && "..."}
      </h2>
      {open && <div className="pl-2 flex flex-col gap-1 mb-3">{children}</div>}
    </section>
  );
}

function SidebarLink({ to, children }: PropsWithChildren<{ to: string }>) {
  const location = useLocation();
  const active = location.pathname;

  return (
    <Link
      to={to}
      className="flex flex-row rounded-lg text-gray-700 hover:text-orange-500 data-[active=true]:text-orange-500 data-[active=true]:bg-gray-50 p-2"
      data-active={active === to && to !== "/docs/todo"}
    >
      {children}
    </Link>
  );
}

function CloudflareChip({ children }: PropsWithChildren) {
  return (
    <div className="inline-block ml-auto text-xs p-1 rounded text-white bg-orange-500 bg-opacity-50">
      {children}
    </div>
  );
}

function LibraryChip({ children }: PropsWithChildren) {
  return (
    <div className="inline-block ml-auto text-xs p-1 rounded text-white bg-gray-500 bg-opacity-50">
      {children}
    </div>
  );
}
