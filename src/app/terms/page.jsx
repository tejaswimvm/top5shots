"use client";
import React, { useEffect } from "react";
import Head from "next/head";

export default function TermsOfService({ title, description, keywords, imageUrl }) {
  const pageTitle = title || "Terms of Service - Top5Shots";
  const pageDescription =
    description ||
    "Read the terms and conditions for using Top5Shots, including platform use, content ownership, account responsibilities, and more.";
  const pageKeywords =
    keywords || "Terms of Service, Top5Shots, conditions, platform use, content ownership";
  const pageImageUrl = imageUrl || "/path-to-your-image.jpg";

  useEffect(() => {
    // Add any dynamic logic here if needed to handle other SEO changes.
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageImageUrl} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Terms of Service</h1>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            Welcome to Top5Shots! By accessing or using our platform, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-xl font-semibold text-black">1. Use of the Platform</h2>
          <p>
            You agree to use Top5Shots only for lawful purposes and in a way that does not violate the rights of others.
          </p>

          <h2 className="text-xl font-semibold text-black">2. Content Ownership</h2>
          <p>
            All content you post remains yours, but by submitting it to Top5Shots, you grant us a non-exclusive right to display and promote it.
          </p>

          <h2 className="text-xl font-semibold text-black">3. Account Responsibilities</h2>
          <p>
            You are responsible for keeping your login credentials secure. Do not share your account with others.
          </p>

          <h2 className="text-xl font-semibold text-black">4. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the platform for any violation of these terms.
          </p>

          <h2 className="text-xl font-semibold text-black">5. Modifications</h2>
          <p>
            We may update these terms from time to time. Continued use of the site implies acceptance of the revised terms.
          </p>

          <p className="mt-6 text-gray-600">
            If you have questions about these Terms, contact us at{" "}
            <a href="mailto:support@top5shots.com" className="text-blue-600 underline">
              support@top5shots.com
            </a>.
          </p>
        </div>
      </div>
    </>
  );
}

// Default props (fallback data in case no dynamic data is passed)
TermsOfService.defaultProps = {
  title: "Terms of Service - Top5Shots",
  description:
    "Read the terms and conditions for using Top5Shots, including platform use, content ownership, account responsibilities, and more.",
  keywords: "Terms of Service, Top5Shots, conditions, platform use, content ownership",
  imageUrl: "/path-to-your-image.jpg",
};
