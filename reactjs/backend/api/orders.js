<<<<<<< HEAD
//model ko import karao


module.exports.PlaceOrder = async (req, res) => {
    try {
        const { userId, addressId, } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            res.status(400).send({ message: "User not found" })
        }
        const address = await Address.findById(addressId)
        if (!address) {
            address.save()

        }
        await orders.save({ ...req.body, addressId, userId })
        res.status(200).send({})
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
// Will be called from user side

module.exports.updatePayment = async (req, res) => {
    try {
        const response = await orders.findByIdAndUpdate(req.params.id, { payment_status: req.body.payment_status })
        if (req.body.payment_status === 1) {
            const response = await orders.findByIdAndUpdate(req.params.id, { order_status: "In Transit" })
        }
        res.status(200).send({ message: "Payment updated successfully" })
    } catch (err) {
        console.log(err)
    }
}
// Will be called from admin only

module.exports.dashboard = async (req, res) => {
    try {
        const orders = await Order.find().countDocuments()
        const users = await User.find().countDocuments()
        const totalSales = await Order.find().select('totalAmount').reduce(add, 0)
        const add = (a, b) => a + b;
        res.status(200).send({ orders, users, totalSales })
    } catch (err) {
        console.log(err)
    }
}
=======
>>>>>>> 1313bb7b6af5c0b28713d7902728894a23f7b3ba
