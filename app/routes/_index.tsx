import Sample from "~/components/sample.mdx";
import { LinkButton, MinimalLink } from "~/components/button";
import { Topnav } from "~/components/nav";

export function Hero() {
  return (
    <main className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/2 lg:pr-16 flex flex-col">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Simple, Fast, Distributed,{" "}
            <span className="text-[#f28021]">Cloudflare</span>
            <br />
            Apps.
          </h1>
          <p className="text-xl text-gray-800 mb-8">
            Orange is a full-stack framework built on React Router v7 to make
            Cloudflare's developer platform simple.
          </p>
        </div>
        <div className="space-x-4">
          <LinkButton to="/docs/welcome">Get Started</LinkButton>
          <MinimalLink to="https://github.com/zebp/orange-js">
            GitHub
          </MinimalLink>
        </div>
      </div>
      <div className="m-w-[55ch] p-8 rounded-lg lg:shadow-lg hidden xl:block mt-12 lg:mt-0">
        <Sample />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col py-8 px-12">
      <Topnav />
      <Hero />
    </div>
  );
}
