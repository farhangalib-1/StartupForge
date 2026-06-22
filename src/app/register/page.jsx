"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
  FieldError,
} from "@heroui/react";

const RegisterPage = () => {
  const [role, setRole] = useState("Founder");
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role,
    };

    console.log(data);

    /**
     * TODO:
     * 1. Upload image to ImgBB
     * 2. Get image URL
     * 3. Create user with Better Auth
     * 4. Save user data in MongoDB
     */
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-default-200 bg-white p-8 shadow-sm">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="text-4xl font-extrabold tracking-tight"
          >
            Startup
            <span className="text-blue-600">Forge</span>
          </Link>

          <h1 className="mt-6 text-2xl font-bold">
            Create your account
          </h1>

          <p className="mt-2 text-default-500">
            Join StartupForge and start collaborating with founders and innovators.
          </p>
        </div>

        <Form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <TextField isRequired name="name">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                  value
                )
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email Address</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Photo Upload */}
          <div className="space-y-2">
            <Label>Profile Photo</Label>

            <label
              htmlFor="photo"
              className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-default-300 p-8 text-center transition hover:border-primary hover:bg-primary/5"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="mb-4 h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-default-100 text-4xl">
                  📷
                </div>
              )}

              <h4 className="font-semibold">
                Click to upload photo
              </h4>

              <p className="mt-1 text-sm text-default-500">
                PNG, JPG or JPEG
              </p>

              <input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Role Selection */}
          <div>
            <Label>Role</Label>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole("Founder")}
                className={`rounded-2xl border p-4 text-sm font-medium transition-all ${
                  role === "Founder"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-default-200 hover:border-blue-300"
                }`}
              >
                🚀 Founder
              </button>

              <button
                type="button"
                onClick={() => setRole("Collaborator")}
                className={`rounded-2xl border p-4 text-sm font-medium transition-all ${
                  role === "Collaborator"
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-default-200 hover:border-blue-300"
                }`}
              >
                🤝 Collaborator
              </button>
            </div>
          </div>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Password must contain one lowercase letter";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          {/* Password Rules */}
          <div className="rounded-xl border bg-slate-50 p-4 text-sm">
            <p className="font-medium">Password Requirements</p>

            <ul className="mt-2 space-y-1 text-default-500">
              <li>✓ Minimum 6 characters</li>
              <li>✓ At least one uppercase letter</li>
              <li>✓ At least one lowercase letter</li>
            </ul>
          </div>

          {/* Submit */}
          <Button
            color="primary"
            type="submit"
            className="w-full"
            size="lg"
          >
            Create Account
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-default-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;