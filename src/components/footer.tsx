import { GetServerSideProps } from "next";

const Footer = () => {
  return (
    <div className="flex flex-col items-stretch w-full justify-between pt-20 lg:container lg:mx-auto px-8 lg:px-0 text-center">
      <p className="font-handwriting text-xl mb-4">Genevieve Navales</p>
      <p className="text-2xl my-4">
        Living, learning, & leveling up
        <br />
        one day at a time.
      </p>
      <hr className="h-[2px] bg-slate-200 my-10" />
      <div className="flex  w-full justify-between items-center mb-8">
        <h5 className="flex-1 text-start hidden sm:block">
          © 2023 GennStudios
        </h5>
        <div className="flex flex-grow justify-center">
          <a
            href="https://github.com/bibmode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:border-violet-600 hover:bg-violet-600 transition-all duration-200 w-12 h-12 flex items-center justify-center border border-slate-500 rounded-full mr-3"
          >
            <i className="fa-brands fa-github text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/genevieve-navales-03065120b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:border-violet-600 hover:bg-violet-600 transition-all duration-200 w-12 h-12 flex items-center justify-center border border-slate-500 rounded-full mr-3"
          >
            <i className="fa-brands fa-linkedin-in text-xl" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vievenavales@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:border-violet-600 hover:bg-violet-600 transition-all duration-200 w-12 h-12 flex items-center justify-center border border-slate-500 rounded-full"
          >
            <i className="fa-regular fa-envelope text-xl" />
          </a>
        </div>
        <a
          href="https://github.com/bibmode/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-end hidden sm:block hover:text-violet-500"
        >
          Source Code
        </a>
      </div>
      <div className="flex justify-between mb-10 sm:hidden">
        <h5 className="text-start ">© 2023 GennStudios</h5>
        <a
          href="https://github.com/bibmode/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-end"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Footer;
