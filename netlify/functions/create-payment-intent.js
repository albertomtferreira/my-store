require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
   try {
    const {amount} = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ["card"],
    })
    return {
        statusCode: 200,
        body: JSON.stringify({paymentIntent}),
    }
   }catch(error){
        console.log(error);
        return {
            statusCode: 400,
            body: JSON.stringify({error}),
        }
   }
   
}

// const { id } = JSON.parse(event.body);
// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1000,
//   currency: "usd",
//   description: "Software development services",
//   payment_method: id,
//   confirm: true,
// });
// return {
//   statusCode: 200,
//   body: JSON.stringify({ paymentIntent }),
// };