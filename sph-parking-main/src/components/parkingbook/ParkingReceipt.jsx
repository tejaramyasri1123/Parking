import React, { useContext, useRef } from "react";
import qr from "./Qr.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import UserContext  from "../../Context/UserContext";

const ParkingReceipt = ({ visible, onClose, start, end, loc, veh, paid }) => {
  

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
    
  };

  const containerRef = useRef(null);

  const handleDownloadPDF = () => {
    const buttons = document.querySelectorAll(".download-button");
    buttons.forEach((button) => {
      button.classList.add("hide-button");
    });

    html2canvas(containerRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("parking_receipt.pdf");

      buttons.forEach((button) => {
        button.classList.remove("hide-button");
      });
    });
  };

  const handleDownloadPNG = () => {
    const buttons = document.querySelectorAll(".download-button");
    buttons.forEach((button) => {
      button.classList.add("hide-button");
    });

    html2canvas(containerRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "parking_receipt.png";
      link.href = imgData;
      link.click();

      buttons.forEach((button) => {
        button.classList.remove("hide-button");
      });
    });
  };

  var currentDate = new Date();

  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();

  var formattedDay = (day < 10 ? "0" : "") + day;
  var formattedMonth = (month < 10 ? "0" : "") + month;

  var formattedDate = formattedDay + "/" + formattedMonth + "/" + year;

  if (!visible) return null;

  return (
    <div
      id="container"
      ref={containerRef}
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white h-[660px] w-[400px] ml-[270px]">
        <div className="h-[60px] bg-orange-400">
          <h1 className="font-bold text-3xl text-white pt-2 ml-2">ParkVue</h1>
        </div>
        <div className=" p-2">
          <h1 className="text-3xl text-center font-bold ">E-receipt</h1>
        </div>
        <hr className=" border-gray-400" />
        <div className="container  pl-[40px] py-4  text-xl flex flex-col space-y-3 font-semibold">
          <img src={qr} height="100px" width="100px" className="ml-[95px]" />
          <h1>
            Trasaction Date : <span className="font-bold">{formattedDate}</span>
          </h1>
          <h1>
            Transaction Number :{" "}
            <span className="font-bold">
              {Math.floor(Math.random() * 100) + 1}
            </span>
          </h1>
          <h1>
            parking Location : <span className="font-bold">{loc}</span>
          </h1>
          <h1>
            Arrival On :{" "}
            <span className="font-bold">{start.toLocaleDateString()}</span>
          </h1>
          <h1>
            Leaving On :{" "}
            <span className="font-bold">{end.toLocaleDateString()}</span>
          </h1>
          <h1>
            Vehicle Type : <span className="font-bold">{veh}</span>
          </h1>
          <h1>
            Amount : <span className="font-bold">{paid}</span>
          </h1>
          <h1>
            status : <span className="text-green-400 font-bold">paid</span>
          </h1>
        </div>
        <hr className=" border-gray-400" />
        <div className="p-3">
          <p className="text-gray-500 ">Thanks for choosing parkvue</p>
          <p className="text-gray-500 ">Enjoy Your safe and Secure parking</p>
          <p className="text-gray-500 ">This receipt was issued by ParkVue©</p>
        </div>
      </div>
      <div className="mb-[570px]">
        <button
          onClick={handleDownloadPDF}
          className="download-button bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
        >
          Download PDF
        </button>
        <button
          onClick={handleDownloadPNG}
          className="download-button bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
        >
          Download PNG
        </button>
      </div>
    </div>
  );
};

export default ParkingReceipt;
