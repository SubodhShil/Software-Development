import React from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, AlertCircle } from "lucide-react";

function CreatePost() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="card shadow">
            <div className="card-body">
                <h2 className="card-title mb-4">Create Account</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <Mail size={20} />
                            </span>
                            <input
                                type="email"
                                id="email"
                                className={`form-control ${
                                    errors.email ? "is-invalid" : ""
                                }`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                                        message: "Please enter a valid email"
                                    }
                                })}
                            />
                            {errors.email && (
                                <div className="invalid-feedback d-flex align-items-center">
                                    <AlertCircle size={16} className="me-1" />
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <Lock size={20} />
                            </span>
                            <input
                                type="password"
                                id="password"
                                className={`form-control ${
                                    errors.password ? "is-invalid" : ""
                                }`}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters"
                                    }
                                })}
                            />
                            {errors.password && (
                                <div className="invalid-feedback d-flex align-items-center">
                                    <AlertCircle size={16} className="me-1" />
                                    {errors.password.message}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            id="terms"
                            className={`form-check-input ${
                                errors.terms ? "is-invalid" : ""
                            }`}
                            {...register("terms", {
                                required:
                                    "You must accept the terms and conditions"
                            })}
                        />
                        <label className="form-check-label" htmlFor="terms">
                            I accept the terms and conditions
                        </label>
                        {errors.terms && (
                            <div className="invalid-feedback d-flex align-items-center">
                                <AlertCircle size={16} className="me-1" />
                                {errors.terms.message}
                            </div>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;
