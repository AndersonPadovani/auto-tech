import { ReactNode } from "react";

type BoxInputType = {
  boxName?: string;
  children?: ReactNode;
};

export const BoxInput = ({ boxName, children, ...rest }: BoxInputType) => {
  return (
    <div
      className="grid grid-cols-6 gap-5 w-full border-[1px] p-2 pt-10 rounded-3xl border-color-orange relative"
      {...rest}
    >
      <label
        hidden={boxName ? false : true}
        className="absolute -top-3 ml-4 bg-color-orange text-slate-200 p-[0.2rem] rounded-md"
      >
        {boxName}
      </label>
      {children}
    </div>
  );
};
