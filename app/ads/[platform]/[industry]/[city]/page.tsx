import { redirect } from "next/navigation";
export const dynamicParams = true;

export default function Page({
  params,
}: {
  params: {
    platform: string;
    industry: string;
    city: string;
  };
}) {
  // default type fallback
  redirect(`/ads/${params.platform}/${params.industry}/${params.city}/examples`);
}