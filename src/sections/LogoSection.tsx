import { logoIconsList } from "../constants";

const LogoIcon = ({ imgPath, name }: { imgPath: string; name: string }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={imgPath} alt={name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map(({ imgPath, name }) => (
            <LogoIcon key={name} name={name} imgPath={imgPath} />
          ))}
          {logoIconsList.map(({ imgPath, name }) => (
            <LogoIcon key={name} name={name} imgPath={imgPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
