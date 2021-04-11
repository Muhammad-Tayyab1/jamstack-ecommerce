import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://storewithshop.myshopify.com/api/graphql",
        fetch,
        headers: {
            "X-Shopify-Storefront-Access-Token": "4d2fd7dfe121ca0e0fd490b981bfc3e6"
        }
    }),
    cache: new InMemoryCache()
})