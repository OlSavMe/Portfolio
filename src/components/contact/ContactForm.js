// import React from "react";
// import { useForm } from "react-hook-form";

// const ContactForm = () => {
//   const { handleSubmit, register, errors } = useForm();
//   const onSubmit = (values) => console.log(values);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         name="email"
//         ref={register({
//           required: "Required",
//           pattern: {
//             value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//             message: "invalid email address",
//           },
//         })}
//       />
//       {errors.email && errors.email.message}

//       <input
//         name="username"
//         ref={register({
//           validate: (value) => value !== "admin" || "Nice try!",
//         })}
//       />
//       {errors.username && errors.username.message}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ContactForm;

import React from "react";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <label htmlFor="name">Name: </label>
          <Field name="name" />

          <label htmlFor="email">Email: </label>
          <Field name="email" />

          <label htmlFor="message">Message: </label>
          <Field name="message" component="textarea" />

          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
