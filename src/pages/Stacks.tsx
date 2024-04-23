export const Stacks = () => {

    return(

        <section id="stacks" className="w-full px-6 pt-12 pb-2 min-h-[70vh] bg-gradient-to-r from-slate-900 to-gray-800 relative  
       
        lg:h-[85vh]">

            <h2 className="text-4xl text-white font-bold text-center mb-10">Stacks</h2>

            <div className="flex items-top justify-center gap-16 md:gap-32 lg:gap-64">
                <div className="text-white">
                    
                    <article className="mb-6 text-center">
                        <i className="devicon-html5-plain text-[4rem] text-blue-500 hover:text-orange-500 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">HTML5</p>
                    </article>
        
                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-css3-plain text-[4rem] text-blue-500 hover:text-blue-400 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">CSS</p>
                    </article>
        
                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-bootstrap-plain text-[4rem] text-blue-500 hover:text-violet-600 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">Bootstrap</p>
                    </article>

                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-react-original text-[4rem] text-blue-500 hover:text-cyan-400 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">React</p>
                    </article>

                </div>


                <div className="text-white">
                    
                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-javascript-plain text-[4rem] text-blue-500 hover:text-yellow-400 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">JS</p>
                    </article>
                    
                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-postgresql-plain text-[4rem] text-blue-500 hover:text-white lg:text-[6rem]"></i>
                        <p className="text-center mt-2">PostgreSQL</p>
                    </article>

                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-github-original text-[4rem] text-blue-500 hover:text-violet-800 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">Github</p>
                    </article>
        
                </div>

                <div className="text-white">

                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-java-plain text-[4rem] text-blue-500 hover:text-red-600 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">Java</p>
                    </article>

                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-spring-plain text-[4rem] text-blue-500 hover:text-lime-500 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">Spring</p>
                    </article>
        
                    <article className="mb-6 text-center">
                        <i className="icon-stack devicon-git-plain text-[4rem] text-blue-500 hover:text-orange-700 lg:text-[6rem]"></i>
                        <p className="text-center mt-2">Git</p>
                    </article>
        
                </div>
            </div>
        </section>
    
    )

}