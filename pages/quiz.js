import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import Quiz from "../components/quiz/Quiz";

const AblyChatComponent = dynamic(
  () => import("../components/chat/AblyChatComponent"),
  { ssr: false }
);

export default function quiz() {
  return (
    <Layout>
      <div className="container">
        <Quiz></Quiz>
      </div>
    </Layout>
  );
}
