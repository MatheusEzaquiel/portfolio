import digitalPointImg from "./../assets/image/project-image/digital-point.png"
import showcaseImg from "./../assets/image/project-image/showcase.png"
import todolistImg from "./../assets/image/project-image/todolist.jpg"
import { Card } from "../components/Card"

export const Projects = () => {
    
    return (

        <section className="w-full px-6 pt-12 pb-2 min-h-[70vh] bg-slate-200 to-sky-700 relative lg:h-[80vh]">

            <h2 className="text-4xl text-slate-900 font-bold text-center mb-10">Projects</h2>

            <div className="flex flex-col gap-4 p-2
            md:flex-row md:overflow-y-auto">

                <Card 
                title="Digital Point Register (ADA)"
                description="This is a Digital point register used for register the employee hours"
                img={digitalPointImg}
                linkBtn="https://github.com/matheusezaquiel/ada"
                previewLink=""
                />

                <Card 
                title="To Do List"
                description="It's a to do list maked with Spring Boot (Java) + React.js"
                img={todolistImg}
                linkBtn="https://github.com/matheusezaquiel/todolist-api"
                previewLink="https://matheusezaquiel.github.io/todolist-frontend/"
                />

                <Card 
                title="Suplement showcase"
                description="It's a web suplement showcase maked with PHP and HTML5 / CSS3/ JS"
                img={showcaseImg}
                linkBtn="https://github.com/MatheusEzaquiel/projeto-afsuplementos"
                previewLink=""
                />

                <Card 
                title="Consulta Covid"
                description="It's a web suplement showcase maked with PHP and HTML5 / CSS3/ JS"
                img={showcaseImg}
                linkBtn="https://github.com/MatheusEzaquiel/consulta-covid"
                previewLink=""
                />

                <Card 
                title="OnePage Copa 2022"
                description="It's a web suplement showcase maked with PHP and HTML5 / CSS3/ JS"
                img={showcaseImg}
                linkBtn="https://github.com/MatheusEzaquiel/onepage-copa2022"
                previewLink="https://matheusezaquiel.github.io/onepage-copa2022/"
                />

                  <Card 
                title="Consulta Covid"
                description="It's a web suplement showcase maked with PHP and HTML5 / CSS3/ JS"
                img={showcaseImg}
                linkBtn="https://github.com/MatheusEzaquiel/consulta-covid"
                previewLink=""
                />

                <Card 
                title="OnePage Copa 2022"
                description="It's a web suplement showcase maked with PHP and HTML5 / CSS3/ JS"
                img={showcaseImg}
                linkBtn="https://github.com/MatheusEzaquiel/onepage-copa2022"
                previewLink="https://matheusezaquiel.github.io/onepage-copa2022/"
                />
                
            </div>
        </section>
    )

}