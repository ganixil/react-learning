import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './Reservation.css'
export default function ReservationForm(props) {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName:"",
    email: "",
    phoneNumber: "",
    people:"",
    date:"",
    occasion:"",
    preferences:""
  }
  function handleSubmit(e) {
    e.preventDefault();

    navigate('/confirmation')
  } 

  const ReservationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),

    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),

    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(
        /^[1-9]{3}[0-9]{3}[0-9]{4}$/g,
        "Invalid phone number"
      ),

    email: Yup.string().email().required("Email is required"),

    date: Yup.date().required("Date is required")

  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ReservationSchema}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <Form className="reservation-form" onSubmit={handleSubmit}>
              <div div className="form-row">
                <label htmlFor="firstName">First Name</label><br></br>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  className={errors.firstName && touched.firstName ?
                    "input-error" : null}
                /><br></br>
                <ErrorMessage name="firstName" component="span" className="error" />
              </div>
              <div div className="form-row">
                <label htmlFor="lastName">Last Name</label><br></br>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  className={errors.lastName && touched.lastName ?
                    "input-error" : null}
                /><br></br>
                <ErrorMessage name="lastName" component="span" className="error" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label><br></br>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={errors.email && touched.email ?
                    "input-error" : null}
                /><br></br>
                <ErrorMessage name="email" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="phone">Phone</label><br></br>
                <Field
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className={errors.phoneNumber && touched.phoneNumber ?
                    "input-error" : null}
                /><br></br>
                <ErrorMessage
                  name="phoneNumber"
                  component="span"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <Field
                  type="number"
                  name="people"
                  id="people"
                  className="people"
                  min={1}
                  max={50}
                />
              </div>
              <div>
                <label htmlFor="date">Date</label> <br></br>
                <Field
                  type="date"
                  name="date"
                  id="date"
                  className={errors.date && touched.date ?
                    "input-error" : null}
                /><br></br>
                <ErrorMessage
                  name="date"
                  component="span"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select
                  id="occasion"
                >
                  <option>None</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select
                  id="preferences"
                >
                  <option>None</option>
                  <option>Indoors</option>
                  <option>Outdoor (Patio)</option>
                  <option>Outdoor (Sidewalk)</option>
                </select>
              </div>
              <button
                type="submit"
                className={!(dirty && isValid) ? "redirect-button-disabled" : "redirect-button"}
                disabled={!(dirty && isValid)}
              >
                Reserve a Table
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  
  );
}
