import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Simulated delay function
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Server-side loader function (Waits for 20s before returning response)
export const loader: LoaderFunction = async () => {
  await delay(5000); // Wait for 20 seconds

  return json({ message: "Hello after 20 seconds!" });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="text-white text-center mt-10">
      <h1 className="text-2xl font-bold">Server-Side Rendered Page</h1>
      <p className="mt-2 text-lg">{data.message}</p>
    </div>
  );
}
