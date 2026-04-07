import { redirect } from "next/navigation";
export const dynamicParams = true;

type PageParams = {
  platform: string;
  industry: string;
  city: string;
};

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { platform, industry, city } = await params;
  redirect(`/ads/${platform}/${industry}/${city}/examples`);
}