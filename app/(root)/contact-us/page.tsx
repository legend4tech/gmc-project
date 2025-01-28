import ContactForm from "@/components/contact-us/ContactForm";
import ContactInfo from "@/components/contact-us/ContactInfo";
import CTA from "@/components/contact-us/CTA";
import SocialMedia from "@/components/contact-us/SocialMedia";
import { NavBar } from "@/components/root/NavBar";

export default function ContactPage() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-green-800 mb-8 text-center">
            Get in Touch
          </h1>
          <CTA />
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <ContactForm />
            </div>
            <div className="space-y-8">
              <ContactInfo />
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
