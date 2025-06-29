const QRCode = require("qrcode");

const generateQRCode = async (req, res) => {
  try {
    const restaurantId = req.user._id;

    const url = `https://yourwebsite.com/menu?restaurantId=${restaurantId}`;

    QRCode.toDataURL(url, (err, qrCodeData) => {
      if (err) {
        console.log("Error generating QR code", err);
        return res.status(500).json({ message: "Failed to generate QR code" });
      }

      res.status(200).json({
        message: "QR code generated successfully",
        qrCode: qrCodeData, // Base64 image string
        url,
      });
    });
  } catch (error) {
    console.log("Error generating QR code", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { generateQRCode };
