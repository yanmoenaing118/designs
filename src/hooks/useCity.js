import { useState } from "react";
import useSWRImmutable from "swr/immutable";
import fetcher from "../lib/fetcher";

export default function useCity() {
  const [division, setDivision] = useState("");
  const router = useRouter();

  const { data, error } = useSWRImmutable(
    division !== ""
      ? `https://d2-olive-api.venuslab.co/api/v1.0.0/location/city?division=${division}`
      : null,
    fetcher
  );

  function onDivisionChange(division) {
    if (division) {
      setDivision(division);
    }
  }
  return {
    cities: data,
    loading: !data && !error,
    error: error || data?.error,
    onDivisionChange,
  };
}
