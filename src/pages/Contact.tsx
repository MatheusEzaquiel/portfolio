import { useState } from "react";
import { IoIosSend } from "react-icons/io";

import sendEmailFigure from "./../assets/illustration/send-email.svg";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Por favor, preencha todos os campos!");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
      email: formData.email,
    };

    emailjs
      .send("service_5izuyte", "template_ctyn5p6", templateParams, "YRKpEfGlyvVyVOXUz")
      .then(
        (response) => {
          setSuccessMessage("Mensagem enviada com sucesso! Obrigado.");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          setErrorMessage("Erro ao enviar a mensagem, tente novamente.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-[70vh] bg-gradient-to-r from-slate-900 to-gray-800 px-6 py-12 md:flex md:justify-around lg:min-h-[80vh] lg:items-center"
    >
      <div className="md:w-1/2 flex flex-col items-center text-center md:text-left">
        <h2 className="text-4xl text-white font-extrabold mb-10 tracking-wide drop-shadow-lg">
          Contato
        </h2>

        <p className="text-white mb-6 text-lg max-w-md">
          Entre em contato{" "}
          <span className="text-sky-400 border-b-2 border-sky-400 font-semibold">
            me envie uma mensagem
          </span>
        </p>

        <div className="w-full max-w-lg bg-white rounded-xl p-8 shadow-lg
          transform transition-transform duration-500 hover:scale-[1.03]"
        >
          <form onSubmit={sendEmail} className="flex flex-col gap-5">
            <label className="flex flex-col text-gray-700 font-semibold text-left">
              Nome:
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 rounded-md border border-gray-300 px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-sky-500
                  transition duration-300 ease-in-out
                  placeholder-gray-400"
                autoComplete="off"
              />
            </label>

            <label className="flex flex-col text-gray-700 font-semibold text-left">
              E-mail:
              <input
                type="email"
                name="email"
                placeholder="usuario@email.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 rounded-md border border-gray-300 px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-sky-500
                  transition duration-300 ease-in-out
                  placeholder-gray-400"
                autoComplete="off"
              />
            </label>

            <label className="flex flex-col text-gray-700 font-semibold text-left">
              Mensagem:
              <textarea
                name="message"
                placeholder="Escreva sua mensagem..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-2 rounded-md border border-gray-300 px-4 py-2 resize-none
                  focus:outline-none focus:ring-2 focus:ring-sky-500
                  transition duration-300 ease-in-out
                  placeholder-gray-400"
              />
            </label>

            {errorMessage && (
              <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-600 font-semibold text-sm">{successMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className={`flex items-center justify-center gap-2 bg-sky-600 text-white font-bold
                rounded-xl px-6 py-3 mt-3
                hover:bg-sky-700 hover:scale-110
                transition-transform duration-300
                disabled:bg-gray-400 disabled:cursor-not-allowed`}
            >
              <IoIosSend className="text-2xl" />
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <img
          src={sendEmailFigure}
          alt="Ilustração de envio de email"
          className="w-full max-w-md animate-float"
          loading="lazy"
        />
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};