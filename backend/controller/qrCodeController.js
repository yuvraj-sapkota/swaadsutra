const QRCode = require("qrcode");

const generateQRCode = async (req, res) => {
  const restaurantId = req.user.id;

  const publicUrl = `https://swaadsutra.onrender.com/menupage/`;
  console.log(publicUrl);

  try {
    const qrImage = await QRCode.toDataURL(publicUrl);
    res.json({ qrImage, publicUrl });
  } catch (err) {
    res.status(500).json({ message: "QR Code generation failed" });
  }
};

module.exports = { generateQRCode };
