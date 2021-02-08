import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";
import tw from "twin.macro";

type Props = {
  [x: string]: any;
};

const Main = tw.main`w-full overflow-hidden flex-grow px-4 md:px-16 lg:px-32 xl:px-40 2xl:px-72`;

const Container = ({ children, ...props }: PropsWithChildren<Props>) => {
  return (
    <>
      <Header />
      <Main {...props}>{children}</Main>
    </>
  );
};

export default Container;
