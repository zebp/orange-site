import rrLogo from "./rr_logo_light.svg";

export function ReactRouter({ link }: { link: string }) {
  return (
    <div className="w-full flex justify-center gap-2 mt-12">
      This page was adapted from the <img alt="React Router" src={rrLogo} className="w-6 h-6 pb-1 mx-1 inline-block" />React Router docs.{" "}
      <a href={link} className="text-blue-500">See original</a>
    </div>
  );
}
