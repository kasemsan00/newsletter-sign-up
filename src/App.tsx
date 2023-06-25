import "./App.css";

import Layout from "./layout/Layout.tsx";
import SubscribeForm from "./components/SubscribeForm.tsx";
import { useState } from "react";
import ThankYou from "./components/ThankYou.tsx";

export default function App() {
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <Layout>
      {!isSubmit && (
        <SubscribeForm
          onEmailChange={(value) => {
            setEmail(value);
          }}
          onSubmit={() => {
            setIsSubmit(true);
          }}
        />
      )}
      {isSubmit && <ThankYou emailSubscribe={email} />}
    </Layout>
  );
}
