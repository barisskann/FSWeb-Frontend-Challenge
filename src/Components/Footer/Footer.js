import { footer } from "../../Data/data";
export function Footer(params) {
  const render = footer.map((i) => (
    <div className="lg:flex  lg:items-center lg:mr-6 m-auto   relative max-sm:w-9/12  max-sm:pt-7 lg:justify-center lg:ml-14">
      <div className="text-5xl lg:w-1/2 max-sm:w-full sm:w-full max-sm-text-center lg:justify-center   	 relative  ">
        <div className="relative  max-sm:w-full lg:w-full">{i.slogan}</div>
        <div className="footer"></div>
      </div>
      <div className="lg:w-1/4 font-medium text-2xl max-sm:flex max-sm:flex-col sm:flex sm:flex-col  max-sm:mt-5 max-sm:text-center sm:text-center sm:mt-5 lg:text-start ">
        <div className="hover:underline" style={i.github.stil}>
          {i.github.title}
        </div>
        <div className="hover:underline">{i.personalBlog}</div>
        <div className="hover:underline" style={i.linkedin.stil}>
          {i.linkedin.title}
        </div>
        <div className="hover:underline" style={i.Email.stil}>
          {i.Email.title}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="sm:pt-8 ">
      <div className="max-sm:pb-10 lg:pb-20 sm:pb-10 max-sm-9/12 m-auto sm:w-9/12 ">
        {render}
      </div>
    </div>
  );
}
