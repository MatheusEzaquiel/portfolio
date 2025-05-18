import { IoIosCloseCircle } from "react-icons/io"

export const PreviewModal = ({open, close, preview}: any) => {

    if(!open) {
        return null
    }

    return(
        <dialog open className="w-[90vw] h-[95%] rounded-lg absolute transform -translate-y-[70%] z-4">

            <div className="w-full h-[10%] bg-blue-500 flex items-center justify-between px-4">
                <p className="text-center text-white">View the project</p>
                <form method="dialog">
                    <button onClick={close}>
                        <IoIosCloseCircle className="text-white text-4xl"/>
                    </button>
                </form>
            </div>
            <iframe src={preview} frameBorder="0" 
            className="w-full h-[90%] overflow-hidden"
            style={{overflow: 'hidden' }}>

            </iframe>
            
        </dialog>
    )

}