import React, { useState } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import { formSubmit } from "../formApi/emailjs";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    formSubmit();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "The form was submitted successfully",
    });
  };
  return (
    <>
      <Header title={"Contact Us"} />
      <div className="flex lg:flex-row flex-col-reverse gap-12 justify-center items-center mb-24 mt-20">
        <iframe
          className="w-screen lg:w-[45vw]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5578553221344!2d91.77147997455522!3d26.178525391257626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59a204a3db3f%3A0xeeea27db7860be36!2sA%20Sai%20Creation!5e0!3m2!1sen!2sin!4v1706336484868!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <form
          id="contactUs"
          onSubmit={handleSubmit(submitHandler)}
          className="lg:w-[40vw] px-4 w-screen flex flex-col gap-12"
        >
          <h3 className="font-antic text-4xl">Contact Us</h3>
          <div className="flex flex-col">
            <label htmlFor="name" className="font-poppins text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              className="border-b-[1px] border-gray-300 w-[80%] h-[30px] focus:outline-0"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-poppins text-gray-600">
              Your Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              {...register("email")}
              className="border-b-[1px] border-gray-300 w-[80%] h-[30px] focus:outline-0"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-poppins text-gray-600">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              {...register("subject")}
              className="border-b-[1px] border-gray-300 w-[80%] h-[30px] focus:outline-0"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="font-poppins text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              {...register("message")}
              id="message"
              cols="10"
              rows="5"
              className="h-[35px] border-b-[1px] focus:outline-0 border-gray-300 w-[80%]"
              required
            ></textarea>
          </div>
          <div>
            <Button type={"submit"} disabled={isSubmitting ? true : false}>
              {isSubmitting ? "Sending" : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
