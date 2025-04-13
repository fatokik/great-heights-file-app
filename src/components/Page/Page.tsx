import { FC, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  title?: string;
}

//TODO
// make a prop that allows you to add more styles if need be

export const Page: FC<PageProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col w-screen h-screen p-4">
      <b>
        <h1 className="text-4xl px-10 py-7">{title}</h1>
      </b>
      {children}
    </div>
  );
};
export default Page;
