import { redirect } from "next/navigation";
import LandingContent from "@/components/section/LandingContent";

interface GenderLandingPageProps {
  params: Promise<{
    gender: string;
  }>;
}

export default async function GenderLandingPage({
  params,
}: GenderLandingPageProps) {
  const { gender } = await params;

  if (gender === "women") {
    redirect("/");
  }

  return (
    <>
      <LandingContent gender={gender} />
    </>
  );
}
