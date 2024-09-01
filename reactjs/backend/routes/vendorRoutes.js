const { createVendor, getVendor, getVendorById, deleteManyVendors, deleteVendorById, updateVendorById } = require('../api/vendors')
const { upload } = require('../middleware/imageUploader')
const router = require('express').Router()

router.post('/create-vendor', upload.single('profile_picture'), createVendor)

router.get('/get-vendors', getVendor)
router.get('/get-vendor/:vendor-id', getVendorById)
router.delete('/delete-vendor/:vendor_id', deleteVendorById)
router.delete('/delete-many-vendors', deleteManyVendors)
router.put('/update-vendor/:vendor_id', updateVendorById)

module.exports = router;