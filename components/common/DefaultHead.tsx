import Head from "next/head";

const DefaultHead = (props: { title?: string }) => {
  return (
    <Head>
      <title>LNA{props.title && " - " + props.title}</title>
    </Head>
  );
};

export default DefaultHead;
