// app/company/[slug]/page.tsx (assuming you're using App Router)

import CompanyDetailPage from "@/components/Company/CompanyDetailPage";

const Page = ({ params }) => {
  const { slug } =  params;

  return (
    <div>
      console.log(slug)
      <CompanyDetailPage slug={slug} />
    </div>
  );
};

export default Page;
