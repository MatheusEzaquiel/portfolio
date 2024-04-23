import { useState } from "react"
import { IoIosSend } from "react-icons/io"

import sendEmailFigure from "./../assets/illustration/send-email.svg"
import emailjs from "@emailjs/browser"

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e: any) => {
        e.preventDefault()
        console.log(formData)

        if(formData.name === "" || formData.email === "" || formData.message === "") {
            alert("Some field is blank!")
            return;
        }

        const templateParams = { from_name: formData.name, message: formData.message, email: formData.email }

        emailjs.send("service_5izuyte", "template_ctyn5p6", templateParams, "YRKpEfGlyvVyVOXUz")
        .then( (response) => {

            console.log("Email sent", response.status, response.text)
            formData.name = ""
            formData.message = ""
            formData.email = ""

        }, (ex) => {
            console.log("Error: ", ex)
        })

    };

    return(

        <section id="contact" className="w-full h-[80vh] px-6 pt-12 pb-2 min-h-[70vh] bg-gradient-to-r from-slate-900 to-gray-800 relative  
        md:flex md:justify-around
        lg:h-[80vh]">

            <div className="md:w-1/2 flex flex-col items-center">
                <h2 className="text-4xl text-white font-bold text-center mb-10">Contato</h2>
                
                <div className="my-4 mx-auto mt-2 xl:mt-0">
                    <h2 className="text-white text-center font-medium">Entre em contato <br className="md:hidden"/> <span className="text-sky-600 border-b border-sky-600">me envie uma mensagem</span></h2>
                </div>
                
                <div className="w-[90%] lg:h-[75%] bg-white p-6 rounded-lg
                lg:p-12
                xl:w-[80%]">

                    <form onSubmit={sendEmail} className="mx-auto flex flex-col items-left">
                        <div className="m-2 w-[90%] flex flex-col items-left mx-auto">
                            <label htmlFor="name" className="font-medium">Nome:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="bg-gray-200 mt-2 p-2 text-gray-500 rounded-lg focus:outline-none"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Anônimo"
                            />
                        </div>
                        <div className="m-2 w-[90%] flex flex-col items-left mx-auto">
                            <label htmlFor="email" className="font-medium">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-200 mt-2 p-2 text-gray-500 rounded-lg focus:outline-none"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="usuario@email.com"
                            />
                        </div>
                        <div className="m-2 w-[90%] flex flex-col items-left mx-auto">
                            <label htmlFor="message" className="font-medium">Mensagem:</label>
                            <textarea
                                id="message"
                                name="message"
                                className="bg-gray-200 mt-2 p-2 text-gray-500 rounded-lg focus:outline-none"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Escreva sua mensagem..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-[90%] h-12 bg-sky-600 text-white mx-auto my-6 rounded-xl font-medium flex items-center justify-center gap-2
                        hover:bg-blue-600 hover:text-white hover:scale-125 duration-500 hover:border-blue-600
                        lg:h-16
                        xl:w-80 xl:mt-6">
                            <IoIosSend className="text-2xl"/>
                            Enviar
                        </button>
                    </form>

                </div>
            </div>

            <img src={sendEmailFigure} alt="illustration-send-email" className="hidden
            md:block md:w-[45%]"/>

        </section>
    
    )

}