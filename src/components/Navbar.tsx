import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    

    return (

        <header>

            <div className="bg-gradient-to-r from-blue-500 to-sky-700 w-full h-[10vh] text-white text-2xl flex justify-between px-6 items-center
            md:flex-row-reverse
            lg:px-20">

                {/* Desktop Navbar */}
                <nav className="hidden md:block md:flex justify-around md:items-center
                md:gap-16 md:text-lx">
                    <a href="#welcome">Welcome</a>
                    <a href="#stacks">Stacks</a>
                    <a href="#projects">Projects</a>
                </nav>

                <button onClick={toggleMenu} className="inline-flex md:hidden">
                    { isOpen ? <MdClose  fontSize={"2.5rem"}/> : <MdMenu  fontSize={"2.5rem"}/>}
                </button>

                <h1 className="text-xl lg:text-3xl">MB | Lists</h1>
            </div>

           

                {/* Mobile Navbar */}
                {
                    isOpen ? (
                    <div >

                        <nav className="flex justify-around items-center text-xl py-6 bg-gradient-to-r from-blue-600 to-sky-800 text-white font-semibold md:hidden">
                            <a href="#welcome">Welcome</a>
                            <a href="#stacks">Stacks</a>
                            <a href="#projects">Projects</a>
                        </nav>
                    
                    </div>
                    ) : null
                
                }

        </header>
        

    )

}