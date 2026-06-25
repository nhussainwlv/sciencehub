import { redirect } from "next/navigation";
import type { GcseSubjectId } from "@/data/curriculum/gcse";

interface PageProps {
  params: Promise<{ subject: string }>;
}

export default async function GcseSubjectPage({ params }: PageProps) {
  const { subject } = await params;
  redirect(`/gcse/${subject as GcseSubjectId}/aqa`);
}
