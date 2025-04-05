import React, { useState } from "react";
import { toast } from "react-toastify";


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Invalid email format.";
        if (!formData.password) newErrors.password = "Password is required.";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match.";
        if (!formData.termsAccepted)
            newErrors.termsAccepted = "You must accept the terms and conditions.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix the errors in the form.");
        } else {
            setErrors({});
            toast.success("Sign-up successful!");
            console.log("Form Data Submitted:", formData);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className={`form-group ${errors.name ? "error" : ""}`}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setErrors({ ...errors, name: "" })}
                    />
                    {errors.name && <small>{errors.name}</small>}
                </div>
                <div className={`form-group ${errors.email ? "error" : ""}`}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setErrors({ ...errors, email: "" })}
                    />
                    {errors.email && <small>{errors.email}</small>}
                </div>
                <div className={`form-group ${errors.password ? "error" : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onFocus={() => setErrors({ ...errors, password: "" })}
                    />
                    {errors.password && <small>{errors.password}</small>}
                </div>
                <div className={`form-group ${errors.confirmPassword ? "error" : ""}`}>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onFocus={() => setErrors({ ...errors, confirmPassword: "" })}
                    />
                    {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
                </div>
                <div className="form-group checkbox-group">
                    <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                    />
                    <label htmlFor="termsAccepted">
                        I accept the <a href="/terms">terms and conditions</a>
                    </label>
                    {errors.termsAccepted && <small>{errors.termsAccepted}</small>}
                </div>
                <button type="submit" className="submit-btn">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;