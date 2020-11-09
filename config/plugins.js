module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
            defaultFrom: "ticket.online@gmail.com",
            defaultReplyto: "ticket.online@gmail.com",
        },
    },
});