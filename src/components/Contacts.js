import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, formState: { errors }, handleSubmit } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_yyCJusHZfuwCkqlgfGmj5";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        subject: data.subject,
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contactez-moi</h1>
        <p>Veuillez remplir le formulaire ci-dessous si mon profil vous intéresse.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Objet"
                  name="subject"
                  {...register("subject", {required: 'OOPS, you forget to add the subject.', 
                  maxLength: {
                      value: 30,
                      message: 'L\'objet ne doit pas dépasser 30 caractères'
                  }})}
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom Prénom"
                  name="name"
                  {...register("name", {required: 'Please enter your name.', minLength: {
                    value: 5,
                    message: 'Please enter at least 5 characters'
                  },
                })}   
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register("email", {required: 'Please provide your email', 
                  pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email'}
                  })} 
                    
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.email && errors.email.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Numéro de téléphone (optionnel)"
                  name="subject"
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* MESSAGE */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  {...register("message", {required: 'Please write your message.'})}
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
              {errors.message && errors.message.message}
              </span>
              <button className="btn-main-offer contact-btn" type="submit">contactez-moi</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;
