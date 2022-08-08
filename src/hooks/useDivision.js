import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import fetcher from "../lib/fetcher";


export default function useDivision() {
  const [country, setCountry] = useState("");


  const { data, error } = useSWRImmutable(
    country !== ""
      ? `https://d2-olive-api.venuslab.co/api/v1.0.0/location/country/${country}`
      : null,
    fetcher
  );

  function onCountryChange(country) {
    if (country) {
      setCountry(country);
    }
  }


  return {
    divisions: data,
    loading: !data && !error,
    error: error || (data && data.error),
    onCountryChange,
  };
}
