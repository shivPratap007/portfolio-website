import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState<TForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<TErrors>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: TErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSending(true);
    try {
      await emailjs.send(
        "service_ajlpxa3",
        "template_nh2lb04",
        formData,
        "LtNW_e6xx8qKNSOTp"
      );
      toast.success("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1 }}
      className="p-4 lg:w-3/4 mx-auto"
      id="contact"
    >
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let’s Connect
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col lg:flex-row lg:space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-4 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mb-4 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="mb-4 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSending}
          className={`mb-8 w-full rounded-lg border border-gray-300 bg-stone-800 px-4 py-2 text-sm font-semibold text-white ${
            isSending ? "cursor-not-allowed opacity-50" : "hover:bg-stone-700"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </form>
    </motion.div>
  );
}

type TErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type TForm = {
  name: string;
  email: string;
  message: string;
};
