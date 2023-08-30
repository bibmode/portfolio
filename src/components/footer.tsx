import { GetServerSideProps } from "next";

const Footer = () => {
  return (
    <div className="flex w-full justify-between container mx-auto py-4">
      <div className="w-56">
        <h6>© 2023 GennStudios</h6>
      </div>
      <div className="text-center ">
        <h5 className="font-handwriting">Genevieve Navales</h5>
      </div>
      <div className="flex w-56 items-center">
        <a
          className="mr-4 flex items-center justify-center"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github text-xl" />
        </a>
        <a
          className="mr-4 flex items-center justify-center"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin text-xl" />
        </a>
        <a
          className="mr-4 flex items-center justify-center"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-instagram text-xl" />
        </a>

        <a
          className="ml-auto"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Footer;
