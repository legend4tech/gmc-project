"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthLayout from "./AuthLayout";
import Link from "next/link";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginValues) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast("Login successful!", {
      description: "You have been logged in.",
    });
    console.log(values);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast("Google Sign In", {
      description: "You have successfully signed in with Google.",
    });
  };

  return (
    <AuthLayout title="Welcome Back">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4BAF47] focus:border-[#4BAF47] block w-full p-2.5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="********"
                    {...field}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4BAF47] focus:border-[#4BAF47] block w-full p-2.5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#4BAF47] focus:ring-[#4BAF47] border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-[#4BAF47] hover:text-[#3d9d3a]"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              className="w-full bg-[#4BAF47] hover:bg-[#3d9d3a] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </motion.div>
        </form>
      </Form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            className="w-full mt-4 bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            Log in with Google
          </Button>
        </motion.div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don&#39;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#4BAF47] hover:text-[#3d9d3a] transition-colors duration-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
