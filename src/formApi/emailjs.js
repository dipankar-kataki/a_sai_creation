export const formSubmit = () => {
  emailjs.sendForm("service_mvsjesi", "template_qmpmx81", "#contactUs").then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
};
