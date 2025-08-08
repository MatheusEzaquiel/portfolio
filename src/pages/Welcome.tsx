import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import TextType from "../components/TextType";
import { Badge } from "../components/Badge";
import { SimpleButtonLink, SimpleButtonNavigate } from "../components/buttons/SimpleButtonLink";
import ScrollToTopButton from "../components/buttons/ButtonScrollTop";

const socialLinks = [
  { title: "Github", username: "matheusezaquiel", link: "https://www.github.com/MatheusEzaquiel", icon: <FaGithub className="text-4xl" /> },
  { title: "Linkedin", username: "MatheusEzaquiel", link: "https://linkedin.com/in/matheusezaquiel/", icon: <FaLinkedin className="text-4xl" /> },
  { title: "E-mail", username: "matheus.ezaquiel@outlook.com", link: "mailto:matheus.ezaquiel@outlook.com", icon: <IoMdMail className="text-4xl" /> },
  { title: "Discord", username: "Matheus.mbe#1815", link: "https://discord.com/login", icon: <FaDiscord className="text-4xl" /> }
];

export const Welcome = () => {
  return (
    <section
      id="welcome"
      className="w-full px-6 pt-12 pb-2 min-h-[70vh] bg-gradient-to-r from-blue-500 to-sky-700 relative lg:h-[80vh]"
    >
      <div className="mx-auto flex flex-col md:w-[60%] lg:mt-16 lg:w-[70%]">
        <h2 className="text-white text-4xl mt-10 lg:text-[4.2rem] lg:font-bold">
          <TextType
            text={["Olá, eu sou o Matheus", "", "sou Desenvolvedor Backend"]}
            typingSpeed={150}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
          />
        </h2>

        <p className="text-white text-justify mt-8 md:w-[90%] lg:text-xl lg:w-[60%] lg:pt-4 leading-relaxed">
          Este é meu portfólio web com algumas informações sobre mim. Aqui você
          encontrará minhas stacks, alguns de meus projetos e minhas redes
          sociais.
        </p>

        <div className="w-[90%] mx-auto pt-[4rem] gap-6 md:flex md:items-center lg:w-[60%] lg:mx-0 lg:gap-4">
          <SimpleButtonNavigate
            title="Contato"
            icon={<BsPersonFillCheck className="text-2xl" />}
            bgColor="bg-sky-900"
            textColor="text-white"
            link="#contact"
          />
          <SimpleButtonLink
            title="Download CV"
            icon={<MdDownload className="text-2xl" />}
            bgColor="bg-white"
            textColor="text-sky-900"
            link="portfolio/src/assets/docs/matheus-bezerra-ezaquiel.pdf"
          />
        </div>

        <div className="hidden lg:block lg:w-[18%] lg:absolute top-[40%] right-16">
          {socialLinks.map((item) => (
            <Badge key={item.title} {...item} />
          ))}
        </div>
      </div>

      <div className="hidden w-[90%] h-[8vh] p-6 mx-auto text-white text-4xl bg-sky-950 rounded-full absolute bottom-6 md:w-[8%] md:h-[60%] md:flex md:flex-col md:items-center md:justify-between md:top-1/2 md:right-6 md:-translate-y-1/2 lg:hidden">
        {socialLinks.map((item) => (
          <div
            key={item.title}
            className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-purple-600"
          >
            {item.icon}
          </div>
        ))}
      </div>

      <ScrollToTopButton />
    </section>
  );
};