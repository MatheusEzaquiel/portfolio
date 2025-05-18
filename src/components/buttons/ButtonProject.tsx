interface btnData {
    title: string,
    bgColor: string,
    textColor: string,
    icon: JSX.Element,
    link: string,
    openModal?: any
}

export const ButtonProject = ({title, bgColor, textColor, icon, openModal}: btnData) => {

    return(
            <button className={`w-[40%] h-12 rounded-xl ${bgColor} ${textColor} font-medium flex items-center justify-center gap-2
            hover:bg-gradient-to-r from-blue-600 to-blue-900 hover:text-white hover:scale-125 duration-500 hover:border-blue-600
            lg:h-16
            xg:w-80`}
            onClick={openModal}>
            {icon} 
            {title}
            </button>
        
    )
}

export const ButtonProjectLink = ({title, bgColor, textColor, icon, link}: btnData) => {

    return(
        <a href={link} download target="_blank" className="w-[40%]" >
            <button className={`w-full h-12 rounded-xl ${bgColor} ${textColor} font-medium flex items-center justify-center gap-2
            hover:bg-gradient-to-r from-blue-600 to-blue-900 hover:text-white hover:scale-125 duration-500 hover:border-blue-600
            md:w-full
            lg:h-16
            xg:w-80`}>
            {icon} 
            {title}
            </button>
        </a>
    )
}