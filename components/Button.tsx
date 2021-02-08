import React, { PropsWithChildren } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  variant?: "primary" | "secondary" | "white" | "outlined";
  size?: "sm" | "md" | "lg";
  as?: string;
  [x: string]: any;
};

const buttonSize = {
  sm: tw`py-2 px-4`,
  md: tw`py-2 px-6 md:px-8`,
  lg: tw`py-3 px-6 md:px-8`,
};

const buttonVariant = {
  primary: tw`bg-gray-900 shadow text-white hover:bg-opacity-90 hover:text-white duration-300`,
  secondary: tw`bg-gray-300 shadow text-gray-900 hover:bg-opacity-90 duration-300`,
  white: tw`bg-white shadow text-gray-900 hover:bg-gray-300 duration-300`,
  outlined: tw`border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white duration-300`,
};

const buttonBase = tw`rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600`;

const getStyle = ({ variant = "primary", size = "md" }: Props) => ({
  ...buttonBase,
  ...buttonVariant[variant],
  ...buttonSize[size],
});

const StyledButton = styled.button<Props>(getStyle);

export default function Button({
  variant = "primary",
  size = "md",
  as,
  href,
  children,
  ...props
}: PropsWithChildren<Props>) {
  return as === "a" ? (
    <Link href={href}>
      <StyledButton as="a" variant={variant} size={size} href={href} {...props}>
        {children}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
