import { useContext } from "react";
import { CheckoutContext } from "../lib/CheckoutProvider";

export default function useCheckout() {
  const { state, dispatch } = useContext(CheckoutContext);

  function savePersonalInfo(payload) {
    dispatch({ type: "SAVE_PERSON", payload });
  }

  function saveAddress(payload) {
    dispatch({ type: "SAVE_ADDRESS", payload });
  }

  return {
    checkoutState: state,
    savePersonalInfo,
    saveAddress,
  };
}
