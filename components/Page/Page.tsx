import { FC, ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  title?: string;
}

export const Page: FC<PageProps> = ({ children, title = "My Web App" }) => {
  return (
    <div>
      <h1 className="text-4xl px-3">{title}</h1>

      <main className="container mx-auto px-4">{children}</main>

      <footer>
        <p>© 2024 My Web App. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Page;
