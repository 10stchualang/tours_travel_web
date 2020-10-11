import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
require('dotenv').config()

const options = {
    jwt: {},
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: null // If set, new users will be directed here on first sign in
    },
    events: {
        signIn: async (message) => { /* on successful sign in */ },
        signOut: async (message) => { /* on signout */ },
        createUser: async (message) => { /* user created */ },
        linkAccount: async (message) => { /* account linked to a user */ },
        session: async (message) => { /* session is active */ },
        error: async (message) => { /* error in authentication flow */ }
    },
    // Configure one or more authentication providers
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

    ],

}

export default (req, res) => NextAuth(req, res, options)