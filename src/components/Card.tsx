import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { HiEye } from "react-icons/hi2";

import { ButtonProject, ButtonProjectLink } from "./buttons/ButtonProject"
import { PreviewModal } from "./PreviewModal"

export const Card = ({title, description, img, linkBtn, previewLink}: any) => {

    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="w-full h-[50vh] bg-slate-300 rounded-lg 
        md:min-w-[32vw]
        2xl:min-w-[24vw] ">

            <img className="h-[45%] w-[100%] rounded-t" src={img}/>

            <div className="mt-4 text-center px-6 pb-4">
                <h2 className="font-medium">{title}</h2>
                <p className="text-justify">{description}</p>
            </div>

            <div className="w-full mx-auto mt-4 flex items-center justify-center gap-2
            md:flex-row md:items-center md:justify-center md:gap-4 md:mt-0
            lg:mt-4">
                
                <ButtonProject
                title="Show"
                icon={<HiEye className="text-2xl"/>}
                bgColor="bg-white"
                textColor="text-sky-900"
                link={linkBtn}
                openModal={ () => setOpenModal(true)}
                />

                <ButtonProjectLink 
                 title="Go github" 
                 icon={<FaGithub className="text-2xl"/>}
                 bgColor="bg-sky-900"
                 textColor="text-white"
                 link={linkBtn}
                />

            </div>

            <PreviewModal 
            open={openModal}
            close={() => {setOpenModal(false)}}
            preview={previewLink}/>
            
        </div>
    )

}