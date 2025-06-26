import { useEffect, useState } from "react";

const QrCodeSection = () => {
  const [qrImage, setQrImage] = useState(null);

  const token = localStorage.getItem("token");

  const fetchQrImage = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/qrcode/generate", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setQrImage(data.qrImage);
    } catch (error) {
      console.log("Failed to get Qr image", error);
    }
  };
  console.log(qrImage);

  useEffect(() => {
    fetchQrImage();
  }, []);
  return (
    <>
      <img src={qrImage} alt="not found" />

      <a
        className="bg-[#2e8b57] text-white font-medium px-2 py-1 rounded hover:bg-[#50906c]"
        href={qrImage}
        download="restaurant-qr-code.png"
      >
        Download QR Code
      </a>
    </>
  );
};

export default QrCodeSection;
