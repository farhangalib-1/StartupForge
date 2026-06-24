"use client";

import Link from "next/link";
import { useState } from "react";
import {
Button,
FieldError,
Form,
Input,
Label,
TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
const [loading, setLoading] = useState(false);

const router = useRouter();

const handleSubmit = async (e) => {
e.preventDefault();

try {
  setLoading(true);

  const formData = new FormData(e.currentTarget);

  const email = formData.get("email");
  const password = formData.get("password");

  const { data, error } = await authClient.signIn.email({
    email,
    password,
  });
  if(!error){
    alert("Loggged in successfully")
  }
  if (error) {
    alert(error.message || "Login Failed");
    setLoading(false);
    return;
  }

  router.replace("/");
} catch (error) {
  console.error(error);
  setLoading(false);
}


};

return ( <section className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10"> <div className="w-full max-w-lg rounded-3xl border border-default-200 bg-white p-8 shadow-sm">
{/* Logo */} <div className="mb-8 text-center"> <Link
         href="/"
         className="text-4xl font-extrabold tracking-tight"
       >
Startup<span className="text-blue-600">
Forge </span> </Link>

      <h1 className="mt-6 text-2xl font-bold">
        Welcome Back
      </h1>

      <p className="mt-2 text-default-500">
        Sign in to continue your startup journey.
      </p>
    </div>

    <Form
      className="flex flex-col gap-5"
      onSubmit={handleSubmit}
    >
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

        <Input
          variant="bordered"
          placeholder="john@example.com"
        />

        <FieldError />
      </TextField>

      {/* Password */}
      <TextField
        isRequired
        name="password"
        type="password"
      >
        <Label>Password</Label>

        <Input
          variant="bordered"
          placeholder="Enter your password"
        />

        <FieldError />
      </TextField>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Submit */}
      <Button
        color="primary"
        type="submit"
        size="lg"
        className="w-full"
        isLoading={loading}
      >
        Sign In
      </Button>
    </Form>

    <p className="mt-6 text-center text-sm text-default-500">
      Don't have an account?{" "}
      <Link
        href="/register"
        className="font-semibold text-blue-600 hover:underline"
      >
        Register
      </Link>
    </p>
  </div>
</section>


);
};

export default LoginPage;
