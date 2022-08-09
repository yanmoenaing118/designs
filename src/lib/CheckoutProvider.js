import { createContext, useReducer } from "react";

export const CheckoutContext = createContext();

const initialState = {
  user: {
    fullname: "",
    email: "",
    phone: "",
    address: {
      country: "",
      division: "",
      city: "",
      township: "",
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_PERSON":
      return {
        ...state,
        user: {
          fullname: action.payload.fullname,
          email: action.payload.email,
          phone: action.payload.phone,
          address: { ...state.user.address },
        },
      };
    case "SAVE_ADDRESS":
      return {
        ...state,
        user: {
          ...state.user,
          address: action.payload,
        },
      };
    default:
      throw new Error();
  }
}

export default function CheckoutProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CheckoutContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
