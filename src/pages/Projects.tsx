import digitalPointImg from "./../assets/image/project-image/digital-point.png"
import showcaseImg from "./../assets/image/project-image/suplement-showcase.jpg"
import todolistImg from "./../assets/image/project-image/todolist.jpg"
import worldCupImg from "./../assets/image/project-image/world-cup-qatar.jpg"
import covidTestImg from "./../assets/image/project-image/covid-test.jpg"
import { Card } from "../components/Card"

export const Projects = () => {
    
    return (

        <section id="projects" className="w-full px-6 pt-12 pb-2 h-[92vh] pb-10 bg-slate-200 to-sky-700 relative
        lg:h-[80vh]">

            <h2 className="text-4xl text-slate-900 font-bold text-center mb-10">Projetos</h2>

            <div className="w-[full] h-[100%] flex gap-4 p-2 overflow-x-auto
            md:flex-row md:overflow-y-auto">

                <Card 
                title="Ponto de Registro Digital"
                description="Este é um ponto de registro de horários digital. Essa API foi construída em Java, Spring Boot, Data JPA, PostgreSQL, Axios Lombok e outras ferramentas do ecossistema Spring"
                img={digitalPointImg}
                previewLink=""
                linkBtn="https://github.com/matheusezaquiel/ada"
                />

                <Card 
                title="Lista de tarefas"
                description="Lista de Tarefas feita com Spring Boot e React.js, Crie um usuário próprio e aproveite para criar, editar excluir Listas e manipulas listas e anotações"
                img={todolistImg}
                previewLink="https://matheusezaquiel.github.io/todolist-frontend/"
                linkBtn="https://github.com/matheusezaquiel/todolist-api"
                />

                <Card 
                title="Vitrine virtual de Suplementos"
                description="Sistema web para exibir suplementos e items relacionados à venda, encaminhando pedidos via whatsapp. Além disso também é possível manipular e ter o controle de itens do estoque. Tecnologias utilizadas: PHP / HTML5 / CSS3/ JS / Bootstrap"
                img={showcaseImg}
                previewLink=""
                linkBtn="https://github.com/MatheusEzaquiel/projeto-afsuplementos"
                />

                <Card 
                title="Consulta Covid"
                description="Sistema de consulta de possível caso de covid, você insere seus sintomas e informações adicionais e recebe o resultado com base nos sintomas. Tecnologias utilizadas: PHP, Laravel, React.js, MySQL e Axios"
                img={covidTestImg}
                previewLink=""
                linkBtn="https://github.com/MatheusEzaquiel/consulta-covid"
                />

                <Card 
                title="OnePage Copa 2022"
                description="Site de estudo de responsividade com a temática copa do mundo 2022. Feito com HTML, CSS3 e JS"
                img={worldCupImg}
                previewLink="https://matheusezaquiel.github.io/onepage-copa2022/"
                linkBtn="https://github.com/MatheusEzaquiel/onepage-copa2022"
                />
                
            </div>
        </section>
    )

}