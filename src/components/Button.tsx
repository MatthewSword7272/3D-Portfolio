const Button = ({
  buttonText,
  className,
  id,
}: {
  buttonText: string;
  className?: string;
  id: string;
}) => {
  return (
    <a id={id} className={`${className ?? ""} cta-wrapper`}>
      <div className={"cta-button group"}>
        <div className={`bg-circle`}></div>
        <p className={"text"}>{buttonText}</p>
        <div className={"arrow-wrapper"}>
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
