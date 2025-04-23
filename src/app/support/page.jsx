"use client";
import React, { useEffect } from "react";
import Head from "next/head";

export default function SupportPage({ title, description, keywords, imageUrl }) {
  const pageTitle = title || "Support - Top5Shots";
  const pageDescription =
    description ||
    "Need help? Contact our support team at Top5Shots for assistance. Browse FAQs or send us a message directly for faster help.";
  const pageKeywords =
    keywords || "Support, Top5Shots, help, contact, FAQs, customer service";
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
        <meta property="og:url" content={window.location.href} />
        {/* <meta property="og:image" content={pageImageUrl} /> */}
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Support - Top5Shots</h1>

        <p className="text-center text-gray-700 mb-10">
          Need help? We're here for you. Check our FAQ or reach out directly.
        </p>

        {/* Contact Info */}
        <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Contact Us</h2>
          <p className="text-gray-800">
            📧 Email: <a href="mailto:support@top5shots.com" className="text-blue-600 hover:underline">support@top5shots.com</a>
          </p>
          <p className="text-gray-800">
            📞 Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a>
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">❓ How do I submit my blog to Top5Shots?</h3>
              <p className="text-sm text-gray-600">Use the "Submit Blog" option in the navigation or contact us via email.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">❓ Can I edit my blog after publishing?</h3>
              <p className="text-sm text-gray-600">Yes, if you're an admin or contributor, go to your dashboard and click "Edit."</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">❓ Where can I find trending blogs?</h3>
              <p className="text-sm text-gray-600">Check out the homepage carousel or explore categories for the latest hot picks.</p>
            </div>
          </div>
        </div>

        {/* Contact Form (Optional) */}
        <div className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

// Default props (fallback data in case no dynamic data is passed)
SupportPage.defaultProps = {
  title: "Support - Top5Shots",
  description:
    "Need help? Contact our support team at Top5Shots for assistance. Browse FAQs or send us a message directly for faster help.",
  keywords: "Support, Top5Shots, help, contact, FAQs, customer service",
  imageUrl: "/path-to-your-image.jpg",
};
