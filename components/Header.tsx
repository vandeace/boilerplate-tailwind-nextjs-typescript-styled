import React, { useState } from "react";
import tw, { styled, css } from "twin.macro";
import { routes } from "utils/config";
import Button from "./Button";
import Link from "./Link";

const StyledHeader = styled.header`
  ${tw`sticky top-0 w-full px-4 md:px-16 lg:px-32 xl:px-40 2xl:px-72 py-7 bg-white-blue bg-opacity-90 flex justify-between items-center z-10`}
  backdrop-filter: blur(10px)
`;

const StyledList = styled.ul(({ isMenuOpen }: { isMenuOpen: boolean }) => [
  isMenuOpen
    ? tw`flex flex-col fixed md:static w-full md:w-auto h-screen md:h-auto inset-0 md:inset-auto items-center justify-center md:justify-start bg-white-blue md:bg-transparent md:flex-row z-10`
    : tw`hidden md:flex items-center`,
]);

const StyledButton = styled(Button)(({ isOpen }) => [
  isOpen
    ? [
        tw`md:hidden z-30 fixed`,
        css`
          right: 1rem;
          top: 1rem;
        `,
      ]
    : tw`md:hidden`,
]);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen, "isMenuOpen");
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <h1 tw="text-3xl font-black text-blue-700 uppercase">
            Insan <span>Mandiri</span>
          </h1>
        </Link>
      </div>
      <StyledButton
        size="sm"
        onClick={() => setIsMenuOpen((prevOpen) => !prevOpen)}
        isOpen={isMenuOpen}
      >
        <span tw="font-semibold">{isMenuOpen ? "Close" : "Menu"}</span>
      </StyledButton>
      <StyledList isMenuOpen={isMenuOpen}>
        {routes.map((menu, index) => (
          <li
            tw="first:mr-0 first:mt-0 first:md:mr-4 mt-6 mr-0 md:mr-4 md:mt-0"
            key={index}
          >
            <Link href={menu.path} tw="font-light text-2xl">
              {menu.name}
            </Link>
          </li>
        ))}
      </StyledList>
    </StyledHeader>
  );
};

export default Header;
