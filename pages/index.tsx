import Container from "@/layouts/Container";
import Link from "next/link";
import "twin.macro";

const IndexPage = () => (
  <Container>
    <h1 tw="font-bold text-5xl md:text-6xl lg:text-7xl w-full md:w-5/6 leading-none mt-3">
      Hello Next.js 👋
    </h1>
    <p></p>
  </Container>
);

export default IndexPage;
