const Payment = require('../models/payment');

const create = async (data) => {
    const status = 1;
    const transactionId = Math.random().toString(36).slice(2);
    try {
        const payment = await Payment.create({
            payment_method: data.paymentMethod,
            amount: data.amount,
            transaction_id: transactionId,
            user_id: data.userId,
            course_id: data.courseId,
            enrollment_id: data.enrollId,
            status: status
        });
        return payment;
    } catch (err) {
        return false;
    }
}

module.exports = {
    create: create
}