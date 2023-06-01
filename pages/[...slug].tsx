import React from "react";
import payload from "payload";
import { GetServerSideProps } from "next";
import { Type as PageType } from "../collections/Property";
import NotFound from "../components/NotFound";
import Head from "../components/Head";

export type Props = {
  page?: PageType;
  statusCode: number;
};

const Page: React.FC<Props> = (props) => {
  const { page } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <main>
      <Head />
      <header>
        <h1>{page.title}</h1>
      </header>

      <footer></footer>
    </main>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug && (ctx.params.slug as string[]).join("/");

  const pageQuery = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};
