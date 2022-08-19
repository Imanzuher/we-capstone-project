import React from "react";
import { Formik, Field, Form } from "formik";
function ContactForm() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", subject: "", message: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="w-full flex flex-col justify-center  max-w-2xl m-auto bg-gray-200 p-11 mb-28">
        <h1 className="font-bold text-2xl text-gray-700 mb-10">Get In Touch</h1>
        <div className="flex  mb-6">
          <div className="w-full   mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>

            <div className="max-w-sm mr-3">
              <Field
                name="firstName"
                type="text"
                className="appearance-none block w-full mr-0  text-gray-700 border   py-3 px-4 mb-3 leading-tight focus:outline-amber-600 focus:outline-1 focus:bg-white"
              />
            </div>
          </div>
          <div className="w-full ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>

            <div className="max-w-sm ">
              <Field
                name="lastName"
                type="text"
                className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-amber-600 focus:outline-1 focus:bg-white focus:border-gray-500"
                id="grid-last-name"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
          </div>
          <div className="md:w-full">
            <Field
              name="subject"
              type="text"
              className="appearance-none block w-full  text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-amber-600 focus:outline-1 focus:bg-white "
            />
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full ">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="subject"
            >
              Message
            </label>
          </div>
          <div className="md:w-full ">
            <Field
              name="message"
              as="textarea"
              className="appearance-none block w-full h-32  text-gray-700 border border-gray-200  py-3 px-4 mb-3 leading-tight focus:outline-amber-600 focus:outline-1 focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div class="flex flex-wrap  mb-6">
          <div class="md:w-1/3"></div>
          <div class="md:w-full">
            <button
              class="shadow w-full rounded-md bg-amber-500 hover:bg-amber-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 "
              type="submit"
            >
              SEND MESSAGE
            </button>
          </div>
        </div>
        <div class="md:flex flex-wrap  mb-6">
          <div class="md:w-1/3"></div>
          <div class="md:w-full">
            <button
              class="shadow w-full rounded-md bg-amber-500 hover:bg-amber-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 "
              type="reset"
            >
              RESET
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
