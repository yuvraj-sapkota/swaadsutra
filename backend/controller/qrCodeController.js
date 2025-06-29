const QRCode = require("qrcode");

const generateQRCode = async (req, res) => {
  const restaurantId = req.restaurant; // auth middleware bata
  console.log("kajsoedi", req.user);

  const publicUrl = `https://swaadsutra.onrender.com/menupage/${restaurantId}`;

  try {
    const qrImage = await QRCode.toDataURL(publicUrl);
    res.json({ qrImage, publicUrl });
  } catch (err) {
    res.status(500).json({ message: "QR Code generation failed" });
  }
};

module.exports = { generateQRCode };
