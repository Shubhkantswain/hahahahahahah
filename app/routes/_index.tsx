import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const loader: LoaderFunction = async ({ context, params }) => {
  const { env, cf, ctx } = context.cloudflare;
   await delay(20000); // Wait for 20 seconds

  return json({ message: "Hello after 20 seconds!" });
};

export default function Index() {
  const results = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <div>
        A value from D1:
        <pre>{JSON.stringify(results)}</pre>
      </div>
    </div>
  );
}