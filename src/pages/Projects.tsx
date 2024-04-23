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

            <h2 className="text-4xl text-slate-900 font-bold text-center mb-10">Projects</h2>

            <div className="w-[full] h-[100%] flex gap-4 p-2 overflow-x-auto
            md:flex-row md:overflow-y-auto">

                <Card 
                title="Digital Point Register (ADA)"
                description="This is a Digital point register used for register the employee hours"
                img={digitalPointImg}
                previewLink=""
                linkBtn="https://github.com/matheusezaquiel/ada"
                />

                <Card 
                title="To Do List"
                description="It's a to do list maked with Spring Boot (Java) + React.js"
                img={todolistImg}
                previewLink="https://matheusezaquiel.github.io/todolist-frontend/"
                linkBtn="https://github.com/matheusezaquiel/todolist-api"
                />

                <Card 
                title="Suplement showcase"
                description="It's a web suplement showcase maked with PHP and HTML5 / CSS3/ JS"
                img={showcaseImg}
                previewLink=""
                linkBtn="https://github.com/MatheusEzaquiel/projeto-afsuplementos"
                />

                <Card 
                title="Consulta Covid"
                description="It's a web appointment when the user mark your symptoms and  recive the result (infected, probable infected, normal)"
                img={covidTestImg}
                previewLink=""
                linkBtn="https://github.com/MatheusEzaquiel/consulta-covid"
                />

                <Card 
                title="OnePage Copa 2022"
                description="It's a responsive onepage about the world cup 2022 maked with HTML5, CSS3 and JS."
                img={worldCupImg}
                previewLink="https://matheusezaquiel.github.io/onepage-copa2022/"
                linkBtn="https://github.com/MatheusEzaquiel/onepage-copa2022"
                />
                
            </div>
        </section>
    )

}