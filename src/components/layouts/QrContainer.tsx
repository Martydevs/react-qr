import { ReactNode } from "react";

type Props = {
  children: ReactNode
};

const QrContainer = ({ children }: Props) => {
  return (
    <section id="content" className="flex flex-col justify-center items-center min-h-screen w-full">
      <section className={"w-4/5 flex items-center justify-between max-h-full lg:flex-row md:flex-row sm:flex-col"}>
        { children }
      </section>
    </section>
  );
};

export default QrContainer;
