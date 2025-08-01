import { Link, useLocation } from "@orange-js/orange";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function useSwipe(
  ref: React.RefObject<HTMLElement | null>,
  onSwipe: () => void
) {
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    function handleStart(e: TouchEvent) {
      setStartX(e.touches[0].clientX);
    }

    function handleEnd(e: TouchEvent) {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 50) {
        onSwipe();
      }
    }

    el.addEventListener("touchstart", handleStart);
    el.addEventListener("touchend", handleEnd);

    return () => {
      el.removeEventListener("touchstart", handleStart);
      el.removeEventListener("touchend", handleEnd);
    };
  }, [ref, onSwipe, startX]);
}

export function Sidebar({
  opened,
  setOpened,
}: {
  opened: boolean;
  setOpened: (o: boolean) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const onSwipe = () => setOpened(false);
  const classes = twMerge(
    "flex-col p-4 w-96 min-h-full text-gray-800 border-r border-gray-100 bg-white static lg:relative flex transition-all left-0",
    !opened && "-left-96 lg:-left-0"
  );

  useSwipe(ref, onSwipe);

  return (
    <aside className={classes} ref={ref}>
      <Section title="Getting Started">
        <SidebarLink to="/docs/welcome">Welcome to 🍊</SidebarLink>
        <SidebarLink to="/docs/bindings">Bindings</SidebarLink>
        <SidebarLink to="/docs/data-loading">Data Loading</SidebarLink>
        <SidebarLink to="/docs/actions">Actions</SidebarLink>
        <SidebarLink to="/docs/context">Context</SidebarLink>
        {/* <SidebarLink to="/docs/secret-sauce">Secret Sauce</SidebarLink> */}
        {/* <SidebarLink to="/docs/todo">Spatial Compute</SidebarLink> */}
      </Section>

      {/* <Section title="Data Layer">
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
          Durable Objects<CloudflareChip>DO</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Key-Value Storage <CloudflareChip>KV</CloudflareChip>
        </SidebarLink>
        <SidebarLink to="/docs/todo">
          Vector Database <CloudflareChip>Vectorize</CloudflareChip>
        </SidebarLink>
      </Section> */}

      <Section title="How do I">
        <SidebarLink to="/docs/todo">Connect to a Database</SidebarLink>
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
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <h2
        className="font-semibold text-xl hover:bg-gray-50 p-3 rounded-md hover:cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
      >
        {title}
        {!open && "..."}
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
    <div className="font-mono inline-block ml-auto text-xs p-1 rounded text-white bg-orange-500 bg-opacity-50">
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
