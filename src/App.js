import React, { useState } from "react";
import ReactSelectInput from "./components/ReactSelectInput";
import { useForm, Controller } from "react-hook-form";
import { phone } from "phone";
import PersonalInfo from "./components/checkout/PersonalInfo";
import Addresses from "./components/checkout/Address";
import ConfirmCheckout from "./components/checkout/ConfirmCheckout";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function App() {
  const [step, setStep] = useState(3);

  let content = null;

  switch (step) {
    case 1:
      content = <PersonalInfo onNext={() => setStep(step + 1)} />;
      break;
    case 2:
      content = <Addresses onPrev={() => setStep(step - 1)} onNext={() => setStep(step + 1)} />;
      break;
      case 3:
        content = <ConfirmCheckout onPrev={() => setStep(step - 1)} onNext={() => setStep(step + 1)} />;
        break;
    default:
      return <div>N</div>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md my-5 p-10">
      <h1 className="font-extrabold mb-5">Step - {step} of 3 </h1>
      {content}
    </div>
  );
}
