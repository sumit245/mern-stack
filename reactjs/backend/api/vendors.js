const Vendor = require("../models/vendors.model");

module.exports.createVendor = async (req, res) => {
  console.log(req.body)
  //TODO: modify the api to store images in a directory
  try {
    let vendor_id = await Vendor.countDocuments({})
    vendor_id = 'VEND'.concat(vendor_id.toString().padStart(4, "0"))
    console.log(vendor_id)
    const vendor = new Vendor({ ...req.body, vendor_id: vendor_id })
    await vendor.save()
    console.log('vendor created')
    res.status(200).send(vendor)
  } catch (err) {
    res.status(500).send(err)
  }
}
// Create Vendor

module.exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    if (vendors.length < 1) {
      return res.status(404).send({ message: "No vendors found" });
    }
    res.status(200).send(vendors);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.getVendorByID = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.vendor_id);
    if (!vendor) {
      return res.status(404).send({ message: "Vendor not found" });
    }
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.updateVendorByID = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(
      req.params.vendor_id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports.deleteVendorByID = async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.vendor_id);
    res.status(200).send(vendor);
  } catch (err) {
    res.status(500).send(err);
  }
};
