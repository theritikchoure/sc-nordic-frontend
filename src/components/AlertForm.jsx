import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createAlert } from "../api/endpoints/alerts";
import "../styles/AlertForm.css";

// Yup validation schema
const alertSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  criteria: Yup.string().oneOf(["gt", "lt"]).required(),
  value: Yup.number().required("Value is required"),
  frequency: Yup.string().required("Frequency is required"),
  priceSignal: Yup.string().required("Price signal is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone must be digits only")
    .min(10, "Phone must be at least 10 digits")
    .required("Phone is required"),
});

function AlertForm() {
  // API call function
  async function handleSubmit(values) {
    try {
      const response = await createAlert(values);
      console.log("Alert created:", response.data.data);
      alert("Alert created successfully!");
    } catch (err) {
      console.error("Create alert error:", err.response?.data || err.message);
      alert("Failed to create alert");
    }
  }

  return (
    <div className="bg-white">
      <div className="form-box">
        <h4>Create Alert</h4>
        <Formik
          initialValues={{
            name: "",
            criteria: "gt",
            value: "",
            frequency: "Everyday",
            priceSignal: "DK - 1",
            email: "",
            phone: "",
          }}
          validationSchema={alertSchema}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
        >
          {() => (
            <Form className="form-fields">
              <label>
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </label>

              <label>
                Criteria
                <div className="radio-group">
                  <label className="radio-option">
                    <Field type="radio" name="criteria" value="gt" />
                    Greater Than
                  </label>
                  <label className="radio-option">
                    <Field type="radio" name="criteria" value="lt" />
                    Less Than
                  </label>
                </div>
                <ErrorMessage
                  name="criteria"
                  component="div"
                  className="error"
                />
              </label>

              <label>
                <Field name="value" type="number" placeholder="Value" />
                <ErrorMessage name="value" component="div" className="error" />
              </label>

              <label>
                <Field as="select" name="frequency">
                  <option value="Everyday">Everyday</option>
                  <option value="Weekdays">Weekdays</option>
                </Field>
                <ErrorMessage
                  name="frequency"
                  component="div"
                  className="error"
                />
              </label>

              <label>
                Price Signal
                <Field as="select" name="priceSignal">
                  <option value="DK - 1">DK - 1</option>
                </Field>
                <ErrorMessage
                  name="priceSignal"
                  component="div"
                  className="error"
                />
              </label>

              <label>
                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </label>

              <label>
                <Field name="phone" type="text" placeholder="Phone" />
                <ErrorMessage name="phone" component="div" className="error" />
              </label>

              <div className="button-wrapper">
                <button type="submit">Submit</button>
              </div>
              {/* <button type="submit">Submit</button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AlertForm;
