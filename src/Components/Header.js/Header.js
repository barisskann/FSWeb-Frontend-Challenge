import { Email, HeaderData } from "../../Data/data";

export function Header(params) {
  const render = HeaderData.map((i, sayac) => (
    <div key={sayac} className="header w-full lg:flex relative ">
      <div className=" mr-20 flex-1 sm:w-full max-sm:w-full ">
        <div className="lg:w-24 text-3xl mb-5 text-center sm:w-full max-sm:w-full  	">
          {i.hi}
        </div>
        <div className="header-content font-medium sm:w-full max-sm:w-full  mb-14">
          {i.content}
        </div>
        <div className="header-pos  " style={{ color: "#E92577" }}></div>
        <div className="lg:flex lg:justify-start max-sm:flex sm:flex max-sm:justify-center sm:justify-center max-sm:gap-4 sm:gap-4 ">
          <a href="">
            {" "}
            <img className=" mr-5" src={i.headerBrands.linkedin} />
          </a>
          <a href="">
            {" "}
            <img src={i.headerBrands.github} />
          </a>
        </div>
        <div className="header-mail font-normal mt-5 mb-24">
          <Email />
        </div>
      </div>
      <div className=" mt-14 ">
        <div className="image-item  ">
          <img className="max-sm:w-full sm:w-full" src={i.headerBrands.image} />
        </div>
      </div>
    </div>
  ));
  return <div className="lg:w-9/12 m-auto max-sm:w-9/12 sm:w-9/12 "> {render}</div>;
}
