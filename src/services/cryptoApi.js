import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_CRYPTO_API_KEY
}

const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders
})

const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinID) => createRequest(`/coin/${coinID}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinID, timePeriod}) => createRequest(`/coin/${coinID}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`)
        }),
    })
})

export const { 
    useGetCryptosQuery, 
    useGetCryptoDetailsQuery, 
    useGetCryptoHistoryQuery 
} = cryptoApi