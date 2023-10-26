// Importing necessary components and data
import TermofServiceContent from "@/components/TermofService";
import { Metadata } from "next";

// Metadata for the Term of Service page
export const metadata: Metadata = {
  title: "DataProjects | Term of Service",
  description: "Term of Service page for DataProjects SaaS services",
  // other metadata
};

const TermofService = async () => {
  return (
    <>
      {/* <!-- ===== Term of Service Section Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="prose prose-lg">
            <TermofServiceContent />
          </div>
        </div>
      </section>
      {/* <!-- ===== Term of Service Section End ===== --> */}
    </>
  );
};

export default TermofService;
