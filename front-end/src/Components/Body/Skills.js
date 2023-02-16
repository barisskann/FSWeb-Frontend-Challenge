import { Skills } from "../../Data/data";

export function SkillsPage(params) {
  const render = Skills.map((i, sayac) => {
    return (
      <div key={sayac}>
        <div className="w-28 h-28  " style={i?.stil}>
          <img className="m-auto h-full" src={i.url}></img>
        </div>
        <div className="">{i.software}</div>
      </div>
    );
  });
  return (
    <div className="bg-white  m-auto ">
      <h1 className="text-center pt-20 text-5xl font-medium mb-14">Skills</h1>
      <div className="lg:flex lg:w-9/12 max-sm:w-1/2 max-sm:m-auto sm:w-1/2 lg:flex-wrap lg:justify-center  sm:m-auto  max-sm:flex sm:flex max-sm:flex-wrap sm:flex-wrap max-sm:justify-center sm:justify-center gap-12 pb-24">
        {render}
      </div>
    </div>
  );
}
