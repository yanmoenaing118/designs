import { useForm } from "react-hook-form";
import Input from "../form/Input";
import Button from "../utils/Button";
export default function PersonalInfo({ onNext }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
    },
  });

  function handleFormSubmit(data) {
    console.log(data);
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
