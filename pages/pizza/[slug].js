import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/* right side */}
        <div className={css.size}>
          <size>Size</size>
          <div className={css.SizeVaraints}>
            <div>Small</div>
            <div>Medium</div>
            <div>Large</div>
          </div>
        </div>
        {/* Qty counter */}
        <div className={css.quantity}>
          <span>Quantity</span>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
