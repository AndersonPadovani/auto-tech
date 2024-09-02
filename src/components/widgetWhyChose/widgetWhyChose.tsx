type widgetWhyChoseType = {
  srcIcon: string;
  titleName: string;
  description: string;
};

const WidgetWhyChose = ({
  srcIcon,
  titleName,
  description,
}: widgetWhyChoseType) => {
  return (
    <div className="flex flex-col w-[40%] min-w-80 gap-5 text-color-text">
      <div className="flex w-full p-2  bg-color-orange items-center customHover justify-center gap-5">
        <img src={srcIcon} alt="Icone de pessoas juventude" className="w-14 " />
        <h3 className="font-bold text-xl">{titleName}</h3>
      </div>

      <p className="text-pretty text-center pl-3 pr-3">{description}</p>
    </div>
  );
};

export default WidgetWhyChose;
