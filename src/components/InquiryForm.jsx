import React, { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { formSubmit } from "../formApi/emailjs";

const InquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    // axios.post('https://formsubmit.co/ajax/saicreationsne@gmail.com', data)
    //     .then(response => {
    //         setIsSubmitting(false)
    //         Swal.fire({
    //             icon: "success",
    //             title: "Success",
    //             text: "The form was submitted successfully",
    //           });
    //     })
    //     .catch(error => {
    //         console.log(error)
    //         setIsSubmitting(false)
    //         Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: "Something went wrong!",
    //           });
    //     });
    formSubmit();
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "The form was submitted successfully",
    });
  };
  return (
    <section className="flex lg:flex-row flex-col items-center gap-12 mb-24">
      <div className="relative">
        <img
          src="/images/weddings/07.jpeg"
          loading="lazy"
          className="lg:w-[50vw] h-[80vh] object-cover"
          alt=""
          data-aos="blur-in"
          data-aos-once
        />
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)]"></div>
        <h2 className="absolute font-antic w-screen text-center text-4xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          We know how to make something special
        </h2>
      </div>
      <form
        id="contactUs"
        onSubmit={handleSubmit(submitHandler)}
        className="lg:w-[40vw] flex flex-col gap-12"
      >
        <h3 className="font-antic text-4xl">Get the party started!</h3>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-poppins text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name")}
            required
            className="border-b-[1px] border-gray-300 w-[90vw] lg:w-[80%] h-[30px] focus:outline-0"
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
            required
            className="border-b-[1px] border-gray-300 w-[90vw] lg:w-[80%] h-[30px] focus:outline-0"
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
            required
            className="border-b-[1px] border-gray-300 w-[90vw] lg:w-[80%] h-[30px] focus:outline-0"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-poppins text-gray-600">
            Message
          </label>
          <textarea
            name="email"
            {...register("message")}
            required
            id="message"
            cols="10"
            rows="5"
            className="h-[35px] w-[90vw] border-b-[1px] focus:outline-0 border-gray-300 lg:w-[80%]"
          ></textarea>
        </div>
        <div>
          <Button type={"submit"} disabled={isSubmitting ? true : false}>
            {isSubmitting ? "Sending" : "Send"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default InquiryForm;
