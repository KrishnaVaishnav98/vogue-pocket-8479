import React, { useState } from "react";
import styles from "../CSS/Form.module.css";
import offer from "../Images/offer-removebg-preview.png";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Application() {
  const { id } = useSelector((store) => {
    return {
      id: store.authReducer.currentUser.id,
    }
  })
  console.log("======", id);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    contact: "",
    gender: "",
    dob: "",
    employment: "",
    income: "",
    creditscore: "",
    category: ""
  });

  const [currentPart, setCurrentPart] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setCurrentPart(currentPart + 1);
  };

  const handlePrev = () => {
    setCurrentPart(currentPart - 1);
  };

  const handleSubmitFormData = async (e) => {

    try {
      // Make a PATCH request using axios
      const response = await axios.patch(
        `https://money-mentor.onrender.com/LoginUsers/${id}`,
        formData
      );
      console.log(response.data);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Data has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      // Reset form data if needed
      setFormData({
        fullname: "",
        email: "",
        address: "",
        contact: "",
        gender: "",
        dob: "",
        employment: "",
        income: "",
        creditscore: "",
        category: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.creditscore >= 650) {
      handleSubmitFormData();
      navigate("/products");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'We are unable to forward your form at this time due to the low credit score.Your credit score is below 650. Please improve your credit score and try again.',
      })
      setFormData({
        fullname: "",
        email: "",
        address: "",
        contact: "",
        gender: "",
        dob: "",
        employment: "",
        income: "",
        creditscore: "",
        category: "",
      });
    }

  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles["image-section"]}>
          <div className={styles["image-container"]}>
            <img
              src="https://homefirstindia.com/app/uploads/2020/08/home-loan-terminology.jpg"
              alt="Image"
            />
          </div>
        </div>

        <div className={styles["form-section"]}>
          <div className={styles.vl}></div>
          <div className={styles["form-content"]}>
            {currentPart === 1 && (
              <div>
                <form>
                  <div className={styles["form-group"]}>
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["button-container"]}>
                    <button type="button" onClick={handleNext}>
                      Next
                    </button>
                  </div>
                </form>
                <img src={offer} alt="" />
              </div>
            )}

            {currentPart === 2 && (
              <div>
                <form>
                  <div className={styles["form-group"]}>
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="homeloan">Home loan</option>
                      <option value="educationloan">Education loan</option>
                      <option value="personalloan">Personal loan</option>
                      <option value="businessloan">Business loan</option>
                    </select>
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Employment</label>
                    <select
                      name="employment"
                      value={formData.employment}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Employment</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="student">Student</option>
                    </select>
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Income</label>
                    <select
                      name="income"
                      value={formData.income}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Income</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div className={styles["form-group"]}>
                    <label>Credit Score</label>
                    <input
                      type="number"
                      name="creditscore"
                      value={formData.creditscore}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles["button-container"]}>
                    <button type="button" onClick={handlePrev}>
                      Previous
                    </button>
                    <button className={formData.creditscore === "" ? styles.disabled : ""} disabled={formData.creditscore === ""} type="button" onClick={handleSubmit}>
                      Submit
                    </button>
                  </div>
                </form>
                <img src={offer} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
