import { redirect } from "next/navigation";
import { auth } from "../lib/auth";
import { requireUser } from "../lib/hooks";

export default async function Dashboard() {
  const session = await requireUser();
  return (
    <div>
      <h1>hello from the dasboard</h1>
    </div>
  );
}
