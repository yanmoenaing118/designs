export default function Input({
  name,
  placeholder,
  register,
  validationOptions = {},
}) {
  return (
    <input
      placeholder={placeholder}
      className="w-full p-2 border mb-3"
      {...register(name, validationOptions)}
    />
  );
}
