import { LeadForm } from "./LeadForm/LeadForm";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("form-token")?.value;
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)] text-center">
      <LeadForm token={token} />
    </div>
  );
}
