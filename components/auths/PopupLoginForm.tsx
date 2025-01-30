"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
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
import { toast } from "sonner";

// Define the form schema using Zod
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function PopupLoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form with react-hook-form and zod resolver
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: LoginValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast.success("Login successful!", {
      description: "You have been logged in.",
    });
    console.log(values);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#263C28]">
        Log In
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
  );
}
