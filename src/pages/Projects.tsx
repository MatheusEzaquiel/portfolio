// Projects.tsx
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import digitalPointImg from "./../assets/image/project-image/digital-point.png"
import showcaseImg from "./../assets/image/project-image/suplement-showcase.jpg"
import todolistImg from "./../assets/image/project-image/todolist.jpg"
import worldCupImg from "./../assets/image/project-image/world-cup-qatar.jpg"
import covidTestImg from "./../assets/image/project-image/covid-test.jpg"

interface CardProps {
  title: string
  description: string
  img: string
  previewLink?: string
  linkBtn: string
}

const Card = ({ title, description, img, previewLink, linkBtn }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 flex-1">{description}</p>
        <div className="mt-4 flex gap-2">
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-sky-500 text-white px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors"
            >
              Preview
            </a>
          )}
          <a
            href={linkBtn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-slate-800 text-white px-3 py-2 rounded-lg hover:bg-slate-900 transition-colors"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  )
}

export const Projects = () => {
  const projects = [
    {
      title: "Ponto de Registro Digital",
      description:
        "API para registro de horários digital. Java, Spring Boot, Data JPA, PostgreSQL, Axios, Lombok e mais.",
      img: digitalPointImg,
      linkBtn: "https://github.com/matheusezaquiel/ada",
    },
    {
      title: "Lista de tarefas",
      description:
        "Spring Boot + React.js. Crie, edite e exclua listas e anotações personalizadas.",
      img: todolistImg,
      previewLink: "https://matheusezaquiel.github.io/todolist-frontend/",
      linkBtn: "https://github.com/matheusezaquiel/todolist-api",
    },
    {
      title: "Vitrine virtual de Suplementos",
      description:
        "Exibição e gestão de estoque de suplementos. PHP, HTML5, CSS3, JS, Bootstrap.",
      img: showcaseImg,
      linkBtn: "https://github.com/MatheusEzaquiel/projeto-afsuplementos",
    },
    {
      title: "Consulta Covid",
      description:
        "Sistema para verificação de possível caso de COVID-19. PHP, Laravel, React.js, MySQL, Axios.",
      img: covidTestImg,
      linkBtn: "https://github.com/MatheusEzaquiel/consulta-covid",
    },
    {
      title: "OnePage Copa 2022",
      description:
        "Estudo de responsividade com temática da Copa 2022. HTML, CSS3, JS.",
      img: worldCupImg,
      previewLink: "https://matheusezaquiel.github.io/onepage-copa2022/",
      linkBtn: "https://github.com/MatheusEzaquiel/onepage-copa2022",
    },
  ]

  return (
    <section
      id="projects"
      className="w-full px-6 pt-12 pb-16 bg-slate-100"
    >
      <h2 className="text-4xl text-slate-900 font-bold text-center mb-10">
        Projetos
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Card {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}