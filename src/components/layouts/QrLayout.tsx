import { ReactNode } from "react";

type Props = {
  children: ReactNode
};

const QrLayout = ({ children }: Props) => {
  return (
    <section id="content" className="flex flex-col justify-center items-center min-h-screen w-full">
      <section className={"flex flex-col items-center justify-evenly max-h-full lg:flex-row lg:w-4/5 md:flex-col sm:flex-col"}>
        { children }
      </section>
    </section>
  );
};

export default QrLayout;
