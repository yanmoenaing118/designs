import { useForm, Controller, set } from "react-hook-form";
import Select from "./../form/Select";
import useCountry from "../../hooks/useCountry";
import useDivision from "../../hooks/useDivision";
import useCity from "../../hooks/useCity";
import useTownship from "../../hooks/useTownship";

import Button from "../utils/Button";
import { useEffect } from "react";
import useCheckout from "../../hooks/useCheckout";

export default function Addresses({ onPrev, onNext }) {
  const { checkoutState, saveAddress } = useCheckout();

  const { handleSubmit, control, watch, setValue, getValues } = useForm();

  const { countries } = useCountry();
  const { divisions, onCountryChange } = useDivision();
  const { cities, onDivisionChange } = useCity();
  const { townships, onCityChange } = useTownship();

  const country = watch("country");
  const division = watch("division");
  const city = watch("city");
  const township = watch("township");



  useEffect(() => {
    if (!country) return;
    if (division?.value !== country?.value) {
      setValue("division", null);
      setValue("city", null);
      setValue("township", null);
    }
    onCountryChange(country?.value);
  }, [country]);

  useEffect(() => {
    if (!division) return;
    if (city && city?.value !== division?.value) {
      setValue("city", null);
      setValue("township", null);
    }
    onDivisionChange(division?.value);
  }, [division]);

  useEffect(() => {
    if (!city) return;
    if (township && township?.value !== city?.value) {
      setValue("township", null);
    }
    onCityChange(city?.value);
  }, [city]);

  function handleFormSubmit(data) {
    saveAddress(data);
    onNext();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-4">
        <Controller
          name="country"
          control={control}
          defaultValue={checkoutState.user.address.country}
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
          name="division"
          control={control}
          defaultValue={checkoutState.user.address.division}
          render={({ field: { onChange, value } }) => (
            <Select
              disabled={!country}
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
          name="city"
          control={control}
          defaultValue={checkoutState.user.address.city}
          render={({ field: { onChange, value } }) => (
            <Select
              disabled={!country || !division}
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
          name="township"
          control={control}
          defaultValue={checkoutState.user.address.township}
          render={({ field: { onChange, value } }) => (
            <Select
              disabled={!country || !division || !city}
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
    country: checkoutState.user.address.country || null,
    division: { ...checkoutState.user.address.division } || null,
    city: { ...checkoutState.user.address.city } || null,
    township: { ...checkoutState.user.address.township } || null,
  };
}

function getItems(items) {
  if (!Array.isArray(items)) return null;
  return items.map((item) => ({
    value: item._id,
    label: item.name,
  }));
}
