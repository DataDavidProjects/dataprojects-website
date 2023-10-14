// Importing necessary components and data
import PrivacyContent from "@/components/Privacy";
import { Metadata } from "next";

// Metadata for the Privacy Policy page
export const metadata: Metadata = {
  title: "Privacy Policy - DataProjects SaaS",
  description: "Privacy Policy page for DataProjects SaaS services",
  // other metadata
};

const PrivacyPolicy = async () => {
  return (
    <>
      {/* <!-- ===== Privacy Policy Section Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="prose prose-lg">
            <PrivacyContent />
          </div>
        </div>
      </section>
      {/* <!-- ===== Privacy Policy Section End ===== --> */}
    </>
  );
};

export default PrivacyPolicy;
