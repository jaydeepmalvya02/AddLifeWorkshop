import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    qualification: "",
    ampc_number: "",
    specialization: "Pulmonologist",
    other_specialization: "",
    mobile: "",
    email: "",
    city: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg("");

    try {
      const response = await fetch("http://localhost:7000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMsg("Registration successful!");
        setFormData({
          name: "",
          institution: "",
          qualification: "",
          ampc_number: "",
          specialization: "Pulmonologist",
          other_specialization: "",
          mobile: "",
          email: "",
          city: "",
        });
      } else {
        setResponseMsg(result.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("Error connecting to server!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f8f6ff] to-white p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl">
        <div className="bg-yellow-300 rounded-t-2xl px-6 py-4 text-lg font-bold text-gray-900">
          REGISTER NOW
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {[
            { name: "name", label: "Name*", type: "text", required: true },
            {
              name: "institution",
              label: "Institution*",
              type: "text",
              required: true,
            },
            {
              name: "qualification",
              label: "Qualification*",
              type: "text",
              required: true,
            },
            {
              name: "ampc_number",
              label: "AMPC Number",
              type: "text",
              required: false,
            },
            {
              name: "mobile",
              label: "Mobile Number*",
              type: "text",
              required: true,
            },
            {
              name: "email",
              label: "Email Address*",
              type: "email",
              required: true,
            },
            { name: "city", label: "City*", type: "text", required: true },
          ].map((field) => (
            <div key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                required={field.required}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-600 placeholder-gray-500"
              />
            </div>
          ))}

          <div>
            <select
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-600 text-gray-700"
            >
              <option value="Pulmonologist">Pulmonologist</option>
              <option value="Rheumatology">Rheumatology</option>
              <option value="Other">Other - Please specify</option>
            </select>
          </div>

          {formData.specialization === "Other" && (
            <div>
              <input
                type="text"
                name="other_specialization"
                placeholder="Please specify your specialization"
                value={formData.other_specialization}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-purple-600 placeholder-gray-500"
              />
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              {isSubmitting ? "Registering..." : "Register Now"}
            </button>
          </div>

          {responseMsg && (
            <div className="text-center text-sm text-purple-700 font-medium">
              {responseMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
