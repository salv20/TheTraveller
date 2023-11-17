const url = 'https://restcountries.com/v3.1/all';

export const CountryApi = async () => {

    const res = await fetch(url)
    const data = await res.json()
    return data
}
