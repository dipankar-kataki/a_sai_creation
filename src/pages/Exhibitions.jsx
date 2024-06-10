import React from "react";
import EventHeader from "../components/EventHeader";
import Section from "../components/Section";
import OurClients from "../components/OurClients";
import Appointment from "../components/Appointment";
import { FaDotCircle } from "react-icons/fa";
import Button from "../components/Button";
import InquiryForm from "../components/InquiryForm";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

const Exhibitions = () => {
  return (
    <>
      <div
        className={`h-[60vh] font-antic text-4xl text-white flex justify-center items-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url("/images/corporateevents/01.jpg")] bg-cover bg-center`}
      >
        <h1>Exhibitions</h1>
      </div>
      <div className="px-4 lg:px-8 pt-16 pb-8 flex lg:flex-row flex-col-reverse gap-12">
        <section className="lg:w-[20vw] w-full lg:block flex flex-col-reverse">
          <div data-aos="blur-in" data-aos-once>
            <h2 className="text-center font-semibold font-antic py-4 mb-4 bg-gray-100">
              SERVICES
            </h2>
            <ul>
              <li>
                <Link to={"/corporateevents"}>
                  <p className="font-roboto text-gray-400 flex items-center gap-4 pb-4 border-b-[1px] border-gray-300">
                    <div>
                      <FaDotCircle size={10} color="#D7A477" />
                    </div>
                    Corporate
                  </p>
                </Link>
              </li>
              <li>
                <Link to={"/roadsshows"}>
                  <p className="font-roboto text-gray-400 flex items-center gap-4 py-4 border-b-[1px] border-gray-300">
                    <div>
                      <FaDotCircle size={10} color="#D7A477" />
                    </div>
                    Road Shows
                  </p>
                </Link>
              </li>
              <li>
                <Link to={"/mallactivities"}>
                  <p className="font-roboto text-gray-400 flex items-center gap-4 py-4 border-b-[1px] border-gray-300">
                    <div>
                      <FaDotCircle size={10} color="#D7A477" />
                    </div>
                    Mall Activities
                  </p>
                </Link>
              </li>
              <li>
                <Link to={"/weddings"}>
                  <p className="font-roboto text-gray-400 flex items-center gap-4 pt-4">
                    <div>
                      <FaDotCircle size={10} color="#D7A477" />
                    </div>
                    Weddings
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:mt-16 mb-16" data-aos="blur-in" data-aos-once>
            <h2 className="text-center font-semibold font-antic py-4 mb-4 bg-gray-100">
              MISSION
            </h2>
            <p className="font-roboto text-gray-400 text-justify">
              To serve the best to the clients with complete dedication and
              devotion working from scratch to create the unique blue print for
              your entire wedding, making sure we have all the details you want
              to incorporate into the program. To deliver high-quality
              production and excellent services retain trust with clients over
              the long term
            </p>
          </div>
        </section>
        <section className="lg:w-[70vw] w-full">
          <div data-aos="blur-in" data-aos-once>
            <h2 className="font-roboto font-bold text-xl pb-4 mb-4 border-b-[1px] border-gray-200">
              Exhibitions: Where Organization Meets Impact
            </h2>
            <p className="font-roboto text-gray-500 mb-2">
              We believe that art is a universal language that transcends
              boundaries and our exhibitions are a testament to this belief. Our
              creafully curated exhibitions showcase a diverse range of artistic
              expressions, celebrating creativity, culture and craftsmanship.
            </p>
            <p className="font-roboto text-gray-500 ">
              Each exhibition is thoughtfully designed to provide a unique and
              immersive experience. From contemporary pieces that challenge the
              status quo to traditional artworks that honor our rich heritage,
              our exhibitions offer something for everyone. We invite you to
              explore our current and upcoming exhibitions, where every visit
              promisesto inspire and engage your senses.
            </p>
          </div>

          <Splide
            options={{
              autoplay: true,
              type: "loop",
              interval: 8000,
              pauseOnHover: false,
              pauseOnFocus: false,
            }}
          >
            <SplideSlide>
              <div className="my-6" data-aos="blur-in" data-aos-once>
                <img
                  src="/images/corporateevents/01.jpg"
                  loading="lazy"
                  className="h-[80vh] w-[100%] object-cover"
                  alt=""
                />
              </div>
            </SplideSlide>
          </Splide>
          <div data-aos="blur-in" data-aos-once>
            <p className="font-roboto text-gray-500 mb-2">
              Because we believe in the power of clear communication, our
              approach to organizing exhibitions begins with understanding your
              vision. We prioritize your message above all else, ensuring that
              every detail of your exhibition aligns perfectly with your
              objectives. Whether you're planning a product launch, a trade
              show, or a cultural exhibition, we start by scheduling a strategic
              planning session with you and your key stakeholders. This
              collaborative approach ensures that your goals are at the
              forefront of every decision.
            </p>
            <p className="font-roboto text-gray-500 mb-2">
              Our commitment to excellence is woven into every event we plan.
              Here are the three pillars that define our success:
            </p>
            <ol className="font-roboto text-gray-500 ml-4 mb-2">
              <li>
                1. <strong> Meeting Your Expectations </strong>: We guarantee
                the consistent and accurate fulfillment of your vision. Your
                satisfaction is our top priority.
              </li>
              <li>
                2. <strong> Value for Money </strong>: We offer competitive
                pricing without compromising on the quality of our services. Our
                goal is to provide exceptional value for every budget.
              </li>
              <li>
                3. <strong>Maximizing Your ROI </strong>: We strive to deliver
                significant returns on investment for every exhibition we
                organize.
              </li>
            </ol>
            <p className="font-roboto text-gray-500">
              In a world that's constantly evolving, the key to a successful
              exhibition lies in making the right choices that have a lasting
              impact. Communication is fundamental to what we do. We aim to be
              our preferred choice by alleviating the stress of event planning.
              With our reliable and professional approach, we ensure a seamless
              and worry-free exhibition experience at a reasonable cost.
            </p>
          </div>
        </section>
      </div>
      <Appointment />
    </>
  );
};

export default Exhibitions;
