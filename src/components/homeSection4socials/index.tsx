import { SiGithub } from "react-icons/si";
import { Hover } from "../../styles/tailwind.c";

const Section4Socials = () => {
  return (
    <a
      href="#"
      className={`flex flex-col items-center justify-center font-medium text-lg no-underline p-4 min-w-21 rounded-lg ${Hover}`}
    >
      <div className="mb-2.5">
        <SiGithub size={25} />
      </div>
      <span>GitHub</span>
    </a>
  );
};

export default Section4Socials;
