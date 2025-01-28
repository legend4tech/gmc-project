"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

// Form validation schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message must not exceed 500 characters." }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  // Initialize intersection observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    console.log(values);
    toast("Message Sent!", {
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
    setCharacterCount(0);
  }

  // Animation variants
  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={formAnimation}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name Field */}
          <motion.div variants={itemAnimation}>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-green-50 border-green-200 focus:border-green-500 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemAnimation}>
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
                      className="bg-green-50 border-green-200 focus:border-green-500 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div variants={itemAnimation}>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-green-50 border-green-200 focus:border-green-500 transition-all duration-300">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemAnimation}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      className="resize-none bg-green-50 border-green-200 focus:border-green-500 transition-all duration-300"
                      maxLength={500}
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.slice(0, 500);
                        field.onChange(value);
                        setCharacterCount(value.length);
                      }}
                    />
                  </FormControl>
                  <motion.div
                    className="bg-green-200 h-1 rounded-full mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${(characterCount / 500) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="text-sm text-green-600 mt-1">
                    {characterCount}/500 characters
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemAnimation}>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
}
