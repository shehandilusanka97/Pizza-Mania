import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [size, setSize] = useState(1);
  const [qty, setQty] = useState(1);

  // Handle Qty
  const handleQty = (type) => {
    type === "inc"
      ? setQty((prev) => prev + 1)
      : qty === 1
      ? null
      : setQty((prev) => prev - 1);
  };

  // Add to cart btn 
  const addPizza=useStore((state)=>state.addPizza)
  const addToCart=()=>{
    addPizza({...pizza,price: pizza.price[size],quantity:qty,size:size})
    console.log('Pizza added')
  }
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
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>

          <span>
            {" "}
            <span style={{ color: "var(--themeRed)" }}>Rs.</span>
            {pizza.price[size]}
          </span>

          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVaraints}>
              <div
                onClick={() => setSize(0)}
                className={size === 0 ? css.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>
          {/* Qty counter */}
          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                objectFit="contain"
                onClick={()=>handleQty("dec")}
                alt=""
              />
              <span>{qty}</span>
              <Image
                src={RightArrow}
                height={20}
                width={20}
                objectFit="contain"
                onClick={()=>handleQty("inc")}
                alt=""
              />
            </div>
          </div>
          {/* buttom  */}
          <div className={`btn ${css.btn}`} onClick={addToCart}>Add to Cart</div>
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
