"use client";

import { fetchFaq, fetchMisi, fetchVisi } from "@/lib/data";
import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [faqItems, setFaqItems] = useState<FaqItem[] | undefined>([]);
  const [visi, setVisi] = useState<Object[] | undefined>([]);
  const [misi, setMisi] = useState<Object[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqData = await fetchFaq();
        setFaqItems(faqData);

        const visiData = await fetchVisi();
        setVisi(visiData);

        const misiData = await fetchMisi();
        setMisi(misiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!faqItems) {
    return null;
  }

  return (
    <section className="mt-24 flex md:w-8/12 md:mx-auto mx-4 justify-between md:flex-row flex-col items-center">
      <div className="py-8 ">
        <div className="text-center">
          <FaQuestion className="text-[32px] text-primary mx-auto" />
          <h1 className="font-semibold text-[28px] w-8/12 mx-auto my-4">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className="md:px-5 ">
        <div className="grid divide-y divide-neutral-200  mx-auto mt-8">
          {faqItems.map((faq, id) => (
            <div key={id} className="py-4">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="md:w-96 w-64">{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-neutral-600 mt-3 md:w-96 w-full">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
