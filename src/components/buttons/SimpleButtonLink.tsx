interface btnData {
    title: string,
    bgColor: string,
    textColor: string,
    icon: JSX.Element
}

export const SimpleButtonLink = ({title, bgColor, textColor, icon,}: btnData) => {

    return(
        <a href="./doc/curriculo-matheus-bezerra-ezaquiel.pdf" download target="_blank" className="mx-auto md:mx-0
        md:w-1/2" >
            <button className={`w-full
            lg:w-40 h-16 rounded-xl p-2 my-4 ${bgColor} ${textColor} font-medium hover:bg-gradient-to-r from-blue-600 to-blue-900 hover:text-white hover:scale-125 duration-500 hover:border-blue-600
            md:w-full
            lg:w-64 lg:h-20 flex items-center justify-center gap-2
            xg:w-80`}>
            {icon} 
            {title}
            </button>
        </a>
    )
}