"use client";

import Banner from "@/components/shared/Banner";
import { contacts } from "@/helper";
import Input from "@/components/shared/Input";
import TextArea from "@/components/shared/TextArea";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Reservation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Banner mode="reservation" title="Reservation" />
      <main className="lg:px-32 px-4 ">
        <div className="grid lg:grid-cols-2 my-32  justify-between">
          <section>
            <h1 className="text-3xl font-medium">Nawasena Avenue</h1>
            <h2 className="text-2xl font-semibold">
              For Questions or Inquiries
            </h2>
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center text-primary my-6">
                <div className="text-4xl">{contact.icon}</div>
                <div className="ml-4">
                  <h1 className="text-black/80 text-xl">{contact.title}</h1>
                  <h2 className="text-2xl font-bold">{contact.href}</h2>
                </div>
              </div>
            ))}
          </section>
          <section className="">
            <h1 className="text-3xl font-medium">Get in touch</h1>
            <div className="grid grid-cols-2 w-10/12 gap-4 gap-y-12 mt-12">
              <Input id="name" placeholder="Your Name *" />
              <Input id="email" placeholder="Your Email *" />
              <Input id="number" placeholder="Your Number *" />
              <Input id="subject" placeholder="Your Subject *" />
            </div>
            <TextArea id="message" placeholder="Message*" />
            <button className="mt-4 py-2 px-4 text-xl font-semibold bg-primary text-white hover:text-white hover:bg-black transition-colors duration-200">
              SEND MESSAGE
            </button>
          </section>
        </div>
        <iframe
          data-aos="fade-up"
          className="w-full my-12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.8312714143535!2d112.08620537400823!3d-7.807679692212695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785998b0b58953%3A0x85f5b29da640e519!2sWarung%20Biru!5e0!3m2!1sid!2sid!4v1715056477187!5m2!1sid!2sid"
          height="400"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </div>
  );
};

export default Reservation;
