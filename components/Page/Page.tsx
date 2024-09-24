import { FC, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  title?: string;
}

//TODO
// make a prop that allows you to add more styles if need be

export const Page: FC<PageProps> = ({ children, title = "My Web App" }) => {
  return (
    <div>
      <b>
        <h1 className="text-4xl px-10 py-7">{title}</h1>
      </b>

      <main className="container mx-auto px-4">{children}</main>

      <footer>
        <p>© 2024 My Web App. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Page;
