"use client";

import Banner from "@/components/shared/Banner";
import FAQ from "../../components/shared/Faq";
import { fetchMisi, fetchVisi } from "@/lib/data";
import { useEffect, useState } from "react";
import { contact_us } from "@/helper";
import Loader from "@/components/shared/Loader";

const InvestorRelation = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [visi, setVisi] = useState<any | undefined>({});
  const [misi, setMisi] = useState<any | undefined>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
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
    return <Loader></Loader>;
  }

  if (Object.keys(visi).length === 0 && Object.keys(misi).length === 0) {
    return null;
  }

  return (
    <div>
      <Banner mode="investor relation" title="Investor Relation" />
      <div className="lg:px-32 px-4 py-12">
        <div className="grid lg:grid-cols-2 lg:space-x-8">
          <section>
            <h1 className="font-semibold text-3xl">About Nawasena Avenue</h1>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus repudiandae laborum consectetur iste autem expedita
              aspernatur! Nam odio quidem deserunt dolor possimus id sapiente
              est laudantium, corporis ipsum deleniti. Quis.
              <span className="text-rose-500">[5]</span>
            </p>
          </section>
          <section>
            <h1 className="font-semibold text-3xl">Contact Us</h1>
            {contact_us.map((contact, index) => (
              <div key={index} className="flex items-center text-primary my-6">
                <div className="text-4xl">{contact.icon}</div>
                <div className="ml-4">
                  <h1 className="text-black/80 text-xl">{contact.title}</h1>
                  <h2 className="text-2xl font-bold">{contact.href}</h2>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="grid lg:grid-cols-2 my-4 mt-12 lg:space-x-8 lg:space-y-0 space-y-4">
          <section>
            <h1 className="font-semibold text-3xl">Vision</h1>
            <ul>
              {visi &&
                visi.map((val: any, id: number) => (
                  <li className="flex text-lg" key={id}>
                    <span className="text-primary mr-2">{id + 1}.</span>
                    {val.visi}
                  </li>
                ))}
            </ul>
          </section>
          <section>
            <h1 className="font-semibold text-3xl">Mission</h1>
            <ul>
              {misi &&
                misi.map((val: any, id: number) => (
                  <li className="flex text-lg" key={id}>
                    <span className="text-primary mr-2">{id + 1}.</span>
                    {val.misi}
                  </li>
                ))}
            </ul>
          </section>
        </div>
        <FAQ />
      </div>
    </div>
  );
};

export default InvestorRelation;
