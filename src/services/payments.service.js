const axios = require("axios");

class PaymentService {
    async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
        payer_email: "test_user_93916206@testuser.com",
        items: [
        {
            title: "Alquiler",
            description: "Alquiler",
            picture_url: "http://www.myapp.com/myimage.jpg",
            category_id: "category123",
            quantity: 1,
            unit_price: 2500
        }
        ],
        back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
        }
    };

    const payment = await axios.post(url, body, {
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });

    return payment.data;
    }
}

module.exports = PaymentService;