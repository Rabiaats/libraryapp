import linkedinProfile from "../assets/img/linkedin.png";

const About = () => {
  return (
    <div className="dark:bg-gray-dark-main parallax flex justify-center pt-[150px]">
      <a
        href="https://www.linkedin.com/in/rabiaats/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="hover:cursor-pointer hover:scale-110"
          src={linkedinProfile}
          width={350}
          alt=""
        />
      </a>
    </div>
  );
};

export default About;
