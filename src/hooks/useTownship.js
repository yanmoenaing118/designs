import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import fetcher from "../lib/fetcher";


export default function useTownship() {
  const [city, setCity] = useState("");


  const { data, error } = useSWRImmutable(
    city !== ""
      ? `https://d2-olive.venuslab.co/api/location/township?city=${city}`
      : null,
    fetcher
  );

  function onCityChange(city) {
    if (city) {
      setCity(city);
    }
  }
  return {
    townships: data,
    loading: !data && !error,
    error: error || data?.error,
    onCityChange,
  };
}
