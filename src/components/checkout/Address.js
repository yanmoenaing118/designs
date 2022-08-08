import { useForm, Controller } from "react-hook-form";
import Select from "./../form/Select";
import useCountry from "../../hooks/useCountry";
import useDivision from "../../hooks/useDivision";
import Button from "../utils/Button";
import { useEffect } from "react";

export default function Addresses({ onPrev }) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      country: {
        value: "62e4ad437a4b586d1d65eca4",
        label: "Myanmar",
      },
    },
  });

  const { countries, loading: cLoading, error: cError } = useCountry();
  const {
    divisions,
    loading: dLoading,
    error: dError,
    onCountryChange,
  } = useDivision();

  const country = watch("country");

  useEffect(() => {
    console.log(country);
    onCountryChange(country?.value);
  }, [country]);

  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-4">
        <Controller
          name="country"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              options={getItems(countries?.results?.items || []) || []}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Controller
          name="division"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              value={value}
              options={getItems(divisions?.results || []) || []}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="flex justify-between mt-4">
        <Button text="Next" type="button" onClick={onPrev} />
        <Button text="Submit" type="submit" />
      </div>
    </form>
  );
}

function getItems(items) {
  return items.map((item) => ({
    value: item._id,
    label: item.name,
  }));
}
