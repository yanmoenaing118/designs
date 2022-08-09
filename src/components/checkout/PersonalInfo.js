import { useForm } from "react-hook-form";
import useCheckout from "../../hooks/useCheckout";
import Input from "../form/Input";
import Button from "../utils/Button";
export default function PersonalInfo({ onNext }) {
  const { checkoutState, savePersonalInfo } = useCheckout();

  const { register, handleSubmit } = useForm({
    defaultValues: getDefaults(checkoutState),
  });

  function handleFormSubmit(data) {
    savePersonalInfo(data);
    onNext();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input name="fullname" placeholder="Name" register={register} />
      <Input name="email" placeholder="Email" register={register} />
      <Input name="phone" placeholder="Phone" register={register} />
      <Button type="submit" text="Next" />
    </form>
  );
}

function getDefaults(checkoutState) {
  return {
    fullname: checkoutState.user.fullname || "",
    email: checkoutState.user.email || "",
    phone: checkoutState.user.phone || "",
  };
}
