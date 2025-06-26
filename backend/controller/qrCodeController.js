const QRCode = require("qrcode");

const generateQRCode = async (req, res) => {
  const restaurantId = req.restaurant; // auth middleware bata aako

  const publicUrl = `http://192.168.1.11:5173/menupage/${restaurantId}`;

  try {
    const qrImage = await QRCode.toDataURL(publicUrl);
    res.json({ qrImage, publicUrl });
  } catch (err) {
    res.status(500).json({ message: "QR Code generation failed" });
  }
};

module.exports = { generateQRCode };
