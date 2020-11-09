'use strict';

module.exports = {
    find: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: "ticket.nodemy@gmail.com",
            from: "ticket.nodemy@gmail.com",
            replyTo: "ticket.nodemy@gmail.com",
            subject: "Testing sendgrid and strapi",
            text: "Message Sendgrid Hello Everyone"
        });
        ctx.send("Email sent");
    }
}