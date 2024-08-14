type DividerType = {
  titleName: string;
};

const Divider = ({ titleName }: DividerType) => {
  return (
    <span className="bg-color-orange w-full text-center p-3 max-lg:m-0 text-2xl font-bold text-slate-100 mb-24">
      {titleName}
    </span>
  );
};

export default Divider;
