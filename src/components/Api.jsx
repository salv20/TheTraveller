const countriesUrl = 'https://restcountries.com/v3.1/all';

export const CountryApi = async () => {
    try {
        const res = await fetch(countriesUrl)
        if (res.ok) {
            const data = await res.json()
            return data

        } else throw ('Incorrect url')

    } catch (error) {
        return (error.message ? `${error.message} please check internet connection and reload.` : error)
    }
}
