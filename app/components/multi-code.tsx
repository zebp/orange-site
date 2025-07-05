import { useState } from "react";
import { Dropdown } from "./dropdown";

export function MultiCodeBlock({ options }: { options: Record<string, React.ReactNode> }) {
  const [option, setOption] = useState(Object.keys(options)[0]);

  return (
    <div className="relative">
      <div className="absolute w-40 top-0 right-0">
        <Dropdown className="rounded-tl-none rounded-br-none border-t-0 border-r-0" selected={option} options={Object.keys(options)} onSelect={setOption} />
      </div>
      {options[option]}
    </div>
  );
}