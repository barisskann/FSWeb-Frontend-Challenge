import { projects } from "../../Data/data";
import { BsArrowRight } from "react-icons/bs";
export function Projects(params) {
  const render = projects.map((i, sayac) => (
    <div
      style={i.stil}
      className="project border max-sm:px-4 sm:px-4 lg:pl-10 rounded-xl max-sm:mt-8 sm:mt-8 "
      key={sayac}
    >
      <div className="font-bold text-3xl mt-12 lg:text-start sm:text-center max-sm:text-center ">
        {i.title}
      </div>
      <div className="mt-5 mb-8 max-sm:text-center sm:text-center lg:text-start lg:mt-4  w-3/4 font-normal max-sm:m-auto lg:m-0 sm:m-auto sm:mb-6 max-sm:mb-6 sm:mt-6 max-sm:mt-6 ">
        {i.about}
      </div>
      <div className="flex sm:justify-center lg:justify-start max-sm:w-3/4 lg:w-3/4 max-sm:flex-wrap max-sm:m-auto lg:m-0 lg:flex-wrap lg:mt-5    ">
        {i.software.map((i) => (
          <div className="border px-5 py-2 w-20  max-sm:mr-3 sm:mr-3 max-sm:mt-1 rounded-full lg:mr-5   mb-2 bg-white font-bold">
            {i}
          </div>
        ))}
      </div>
      <div className="mt-6 mb-20 flex justify-between font-semibold  text-xl">
        <a href="" className="hover:underline">
          {i.github}
        </a>
        <a
          href="#"
          
          className="mr-11 flex justify-center items-center hover:underline gap-2"
        >
          {i.app}
          <BsArrowRight />
        </a>
      </div>
      <div>
        <img className="max-sm:w-full m-auto" src={i.url}></img>
      </div>
    </div>
  ));

  return (
    <div className="bg-white pb-32">
      <div className="pt-20 text-center text-4xl font-medium pb-3 ">
        Projects
      </div>
      <div className="w-9/12 m-auto ">
        <div className="lg:flex  max-sm:text-center lg:text-start lg:gap-12">{render}</div>
        <div></div>
      </div>
    </div>
  );
}
