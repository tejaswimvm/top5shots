"use client";
export default () => {
  const faqsList = [
    {
      q: "What is Top5Shots?",
      a: "Top5Shots is a platform where users can participate in exciting contests, showcase their skills, and win amazing prizes. Join now and be a part of our growing community!",
      href: "javascript:void(0)",
    },
    {
      q: "How do I participate in a contest?",
      a: "Simply visit the contests page, select the contest you're interested in, and follow the instructions provided. Most contests require uploading your work or submitting a response.",
      href: "javascript:void(0)",
    },
    {
      q: "Is there a fee to join contests?",
      a: "No, participating in contests on Top5Shots is free! We believe in creating a space for everyone to participate without barriers.",
      href: "javascript:void(0)",
    },
    {
      q: "Can I create my own contest?",
      a: "Yes! Top5Shots allows users to create and host their own contests. Simply sign up, and you'll have access to create a contest page with all the necessary tools and settings.",
      href: "javascript:void(0)",
    },
    {
      q: "What kind of prizes are offered in contests?",
      a: "Prizes vary from contest to contest. You can win cash prizes, gift cards, exclusive merchandise, and more! Be sure to check the contest page for details on the prizes available.",
      href: "javascript:void(0)",
    },
    {
      q: "How do I track my contest submissions?",
      a: "You can track your contest submissions and see the status on your profile page. You'll also be notified if there are any updates or results related to your entry.",
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
          <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            How can we help?
          </h3>
          <p className="text-gray-600">
            Everything you need to know about Top5Shots. Can’t find the answer
            you’re looking for? Feel free to{" "}
            <a
              className="text-indigo-600 font-semibold whitespace-nowrap"
              href="javascript:void(0)"
            >
              contact us
            </a>
            .
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto sm:max-w-xs"
          >
            <div className="relative">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
          </form>
        </div>
        <div className="mt-12">
          <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
            {faqsList.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <summary className="flex items-center justify-between font-semibold text-gray-700">
                  {item.q}
                </summary>
                <p
                  dangerouslySetInnerHTML={{ __html: item.a }}
                  className="text-gray-600 leading-relaxed"
                ></p>
                <a
                  href={item.href}
                  className="flex items-center gap-x-1 text-sm text-indigo-600 hover:text-indigo-400 duration-150 font-medium"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
