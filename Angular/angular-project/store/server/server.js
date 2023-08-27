const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()
app.use(express.static("public"))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cors({ origin: true, credentials: true }))

const stripe = require("stripe")(
  "sk_test_51NDVytAcIhU0j62R8o5hnpPVRBdW0dUZy8MBSWv8duEAaMya5w4Lp9XPz5GI1u1H43605jPWoTCxTSPPVTHDhfRI00AqJ3n3gL"
)

app.post("/checkout", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_item: req.body.items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.product],
          },
          unit_amount: item.price * 100,
        },
        quantity:item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:4242/sucess.html",
      cancel_url: "http://localhost:4242/cancel.html",
    })
    res.status(200).json(session)
  } catch (error) {
    next(error)
  }
})

app.listen(4242, () => console.log("app is running on 4242"))
