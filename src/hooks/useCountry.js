import useSWRImmutable from 'swr/immutable'
import fetcher from '../lib/fetcher';


export default function useCountry() {
    const { data, error } = useSWRImmutable(`https://d2-olive.venuslab.co/api/location/country`, fetcher);
    return {
        countries: data,
        loading: !data && !error,
        error: error || data && data.error
    }

}