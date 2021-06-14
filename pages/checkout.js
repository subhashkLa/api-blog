import Stripe from "stripe";
import { parseCookies, setCookie } from "nookies";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import Layout from "../components/Layout";

const stripePromise = loadStripe("pk_test_DX0mLOd88pbW4efFl9MiG5Dp");

export const getServerSideProps = async (ctx) => {
  const stripe = new Stripe("sk_test_i5tDtePQwYbImhEgNeJZ1jUc");

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return {
      props: {
        paymentIntent,
      },
    };
  }

  paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "gbp",
  });

  setCookie(ctx, "paymentIntentId", paymentIntent.id);

  return {
    props: {
      paymentIntent,
    },
  };
};

const CheckoutPage = ({ paymentIntent }) => (
  <Elements stripe={stripePromise}>
    <Layout>
      <CheckoutForm paymentIntent={paymentIntent} />
    </Layout>
  </Elements>
);

export default CheckoutPage;
