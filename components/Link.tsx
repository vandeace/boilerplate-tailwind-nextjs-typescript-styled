import React, { PropsWithChildren } from "react";
import { default as NextLink } from "next/link";
import "twin.macro";

type Props = {
  href: String;
  [x: string]: any;
};

export default function Link({
  href,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <NextLink href={href} passHref>
      <a tw="hover:text-blue-600 duration-200" href={href} {...props}>
        {children}
      </a>
    </NextLink>
  );
}
