import { useForm, Controller } from "react-hook-form";
import Select from "./../form/Select";
import useCountry from "../../hooks/useCountry";
import useDivision from "../../hooks/useDivision";
import useCity from "../../hooks/useCity";
import useTownship from "../../hooks/useTownship";

import Button from "../utils/Button";
import { useEffect } from "react";
import useCheckout from "../../hooks/useCheckout";

export default function Addresses({ onPrev, onNext }) {

  const { checkoutState } = useCheckout();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {},
  });

  const { countries } = useCountry();
  const { divisions, onCountryChange } = useDivision();
  const { cities, onDivisionChange } = useCity();
  const { townships, onCityChange } = useTownship();

  const country = watch("country");
  const division = watch("division");
  const city = watch("city");

  useEffect(() => {
    onCountryChange(country?.value);
  }, [country]);

  useEffect(() => {
    onDivisionChange(division?.value);
  }, [division]);

  useEffect(() => {
    onCityChange(city?.value);
  }, [city]);

  function handleFormSubmit(data) {
    console.log(data);
    onNext();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-4">
        <Controller
          name="address.country"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              placeholder="Select Country"
              value={value}
              options={getItems(countries?.results?.items || []) || []}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Controller
          name="address.division"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              placeholder="Select Division"
              value={value}
              options={getItems(divisions?.results || []) || []}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Controller
          name="address.city"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              placeholder="Select City"
              value={value}
              onChange={onChange}
              options={getItems(cities?.results) || []}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Controller
          name="address.township"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              placeholder="Select Township"
              value={value}
              onChange={onChange}
              options={getItems(townships?.results) || []}
            />
          )}
        />
      </div>

      <div className="flex justify-between mt-4">
        <Button text="Back" type="button" onClick={onPrev} />
        <Button text="Submit" type="submit" />
      </div>
    </form>
  );

}


function getDefaults(checkoutState) {
  return {
    
  }
}

function getItems(items) {
  if (!Array.isArray(items)) return null;
  return items.map((item) => ({
    value: item._id,
    label: item.name,
  }));
}
