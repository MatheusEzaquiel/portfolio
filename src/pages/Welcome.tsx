import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { MdDownload } from "react-icons/md"
import { BsPersonFillCheck } from "react-icons/bs";
//import { MdPersonAddAlt1 } from "react-icons/md";

//import programmerSvg from "./../assets/programmer.svg"
import { Badge } from "../components/Badge"
import { SimpleButtonLink } from "../components/buttons/SimpleButtonLink"


export const Welcome = () => {

    return(

        <>
            <section className="w-full px-6 pt-12 pb-2 min-h-[70vh] bg-gradient-to-r from-blue-500 to-sky-700 relative lg:h-[80vh]">
                
                <div className="mx-auto flex flex-col items-left justify-left 
                md:w-[60%]
                lg:mt-16 lg:w-[70%] ">

                    <h2 className="text-white text-4xl mt-10
                    lg:text-[4.2rem] lg:font-bold" id="welcome">Hi! I'm Matheus B.</h2>

                    <div className="mt-2 flex flex-col my-4 lg:w-[85%]">

                        <h3 className="text-sky-900 font-medium text-2xl
                        md:text-xl
                        lg:text-3xl lg:mt-3">
                            and I'm a web Developer
                        </h3>

                        <div className="text-my text-white text-justify  mt-8
                        md:block md:w-[90%] md:hidden
                        lg:text-xl lg:w-[60%] lg:pt-4">
                            <p className="leading-relaxed">This is my web portfolio with some informations about me.
                                Here you are find my stacks, some projects and my social medias. I use the language Java with framework Spring to make the backend applications like API's and React to construct the frontend.
                            </p>
                        </div>

                        <div className="text-my text-white text-justify hidden 
                        md:block md:w-[90%]
                        lg:text-xl lg:w-[60%] lg:pt-4">
                            <p className="leading-relaxed">This is my web portfolio with some informations about me.
                                Here you are find my stacks, some projects and my social medias. I use the language Java with framework Spring to make the backend applications like API's and React to construct the frontend.
                            </p>
                        </div>
                        
                        
                    </div>

                    <div className="w-full mx-auto  pt-[4rem] gap-6
                    md:flex
                    lg:w-[60%] lg:mx-0 lg:gap-4">
                        
                        <SimpleButtonLink 
                        title="Contact" 
                        icon={<BsPersonFillCheck className="text-2xl"/>}
                        bgColor="bg-sky-900"
                        textColor="text-white"
                        />

                        <SimpleButtonLink 
                        title="Download CV" 
                        icon={<MdDownload className="text-2xl"/> }
                        bgColor="bg-white"
                        textColor="text-sky-900"
                        />

                    </div>

                   
                    
                    <div className="hidden w-[90%] flex flex-col gap-2 mx-auto 
                    lg:block lg:w-[18%] lg:absolute top-[40%] right-16">
                        <Badge 
                            title="Github"
                            username="matheusezaquiel"
                            link="https://www.github.com/MatheusEzaquiel"
                            icon={<FaGithub className="text-4xl"/>}
                        />

                        <Badge 
                            title="Linkedin"
                            username="MatheusEzaquiel"
                            link="https://linkedin.com/in/matheusezaquiel/"
                            icon={<FaLinkedin className="text-4xl"/>}
                        />

                        <Badge 
                            title="E-mail"
                            username="matheus.ezaquiel@outlook.com"
                            link="matheus.ezaquiel@outlook.com"
                            icon={<IoMdMail className="text-4xl"/>}
                        />

                        <Badge 
                            title="Discord"
                            username="Matheus.mbe#1815"
                            link="https://discord.com/login"
                            icon={<FaDiscord className="text-4xl"/>}
                        />


                    </div>
            
                </div>

                <div className="hidden w-[90%] h-[8vh] p-6 mx-auto flex items-center justify-between text-white text-4xl bg-sky-950 rounded-full absolute bottom-6
                md:w-[8%] md:h-[60%] md:flex-col md:top-1/2 md:right-6 md:transform -translate-y-1/2
                lg:hidden">

                    <div className="bg-white w-12 h-12 rounded-[100%] flex items-center justify-center hover:bg-purple-600">
                        <FaLinkedin className="text-sky-950" />
                    </div>
            
                    <div className="bg-white w-12 h-12 rounded-[100%] flex items-center justify-center hover:bg-purple-600">
                        <FaGithub className="text-sky-950" />
                    </div>
                
                    <div className="bg-white w-12 h-12 rounded-[100%] flex items-center justify-center hover:bg-purple-600">
                        <IoMdMail className="text-sky-950" />
                    </div>

                    <div className="bg-white w-12 h-12 rounded-[100%] flex items-center justify-center hover:bg-indigo-700">
                        <FaDiscord className="text-sky-950"/>
                    </div>
                
                </div>
            </section>

        </>
    )

}