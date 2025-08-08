import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  return (
    <a
      href="#welcome"
      className="fixed bottom-6 right-6 z-50 bg-sky-800 hover:bg-sky-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
      aria-label="Voltar ao topo"
    >
      <FaArrowUp className="text-2xl" />
    </a>
  );
};

export default ScrollToTopButton;
