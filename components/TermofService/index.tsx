"use client";
import { motion } from "framer-motion";
// components/Privacy/PrivacyContent.js
const TermofServiceContent = () => {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top"
      >
        <section className="text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4">
            Term of Service of DataProjects
          </h2>
          <p className="text-center">Effective Date: 14/10/2023</p>
        </section>
        <section className="space-y-8 text-justify">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Introduction
            </h2>
            <p>
              DataProjects S.r.l., based in Italy, provides various digital
              services related to Artificial Intelligence. This Term of Service
              outlines how we handle and protect your personal data in
              accordance with the applicable laws and regulations.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              DataProjectsEngine
            </h2>
            <p>
              DataProjectsEngine, is created as a support for only creators and
              collaborators linked to DataProjects. With the use of the app,
              every user automatically accepts the responability for the final
              content and agree to the Privacy Policy Provided in the section
              Privacy Policy. The app provides authentication and personalized
              workflow according to the private and individual deals with
              DataProjects.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Contacts
            </h2>
            <p className="text-center">
              For any inquiries or concerns regarding this Term of Service,
              please reach out to us at:
            </p>
            <address className="text-center">
              DataProjects
              <br />
              Via Washington,Milano,20144
              <br />
              Milano, Italy
              <br />
              Email: davis.dataproject@gmail.com
              <br />
              Phone: +39 3363180611
            </address>
            <p className="text-center">Effective Date: 14/10/2023</p>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default TermofServiceContent;
