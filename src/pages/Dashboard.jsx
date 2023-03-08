import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { UserAuth } from "../context/Auth_context";
import { auth, db } from "../Firebase_config";
import { Html5Qrcode, Html5QrcodeScanner } from "html5-qrcode";
import { doc, setDoc } from "@firebase/firestore";

const Dashboard = () => {
  const { userdata } = UserAuth();
  const naviGate = useNavigate();
  const logOut = async () => {
    await signOut(auth).then(() => {
      naviGate("/Login");
    });
  };

  const scanbutton = () => {
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      stopscanning();
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
      stopscanning();
    }
    const html5QrCode = new Html5Qrcode("reader");
    const qrCodeSuccessCallback = async (decodedText, decodedResult) => {
      /* handle success */
      const qrcodedata = JSON.parse(decodedResult.decodedText)
      await setDoc(doc(db, `${qrcodedata.department}-${qrcodedata.year}-${qrcodedata.subname}`, "date-starttime-endtime-studentUID"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      });
      html5QrCode.stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log("object");
      })
      .catch((err) => {
        alert("stop scanning error");
      });
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    html5QrCode.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback
    );
    // let html5QrcodeScanner = new Html5QrcodeScanner(
    //   "reader",
    //   { fps: 10, qrbox: { width: 250, height: 250 } },
    //   /* verbose= */ false
    // );
    // html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  };
  const stopscanning = () => {
    Html5Qrcode.stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log("object");
      })
      .catch((err) => {
        alert("stop scanning error");
      });
  };

  return (
    <>
      <Layout>
        {userdata ? (
          <h1 className="font-bold text-xl absolute top-2">
            Account:{userdata.name}
          </h1>
        ) : (
          <h1 className="font-bold text-xl absolute top-2">Account</h1>
        )}

        <div className="h-[60vh] p-2 w-[90vw] md:w-[20vw] bg-white absolute rounded-lg flex flex-col  ">
          <div className="grid grid-cols-1 gap-3 text-center  ">
            <Link
              to="/Profile"
              className="mx-auto w-1/2 h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white"
            >
              Profile
            </Link>
            <button
              type="button"
              onClick={scanbutton}
              className="mx-auto w-1/2 h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white"
            >
              Scan
            </button>

            <div className="mx-auto w-1/2 h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-black text-white">
              Your Attendance
            </div>
            <button
              onClick={logOut}
              className="mx-auto w-1/2 h-[100%] cursor-pointer p-2 rounded-md font-semibold hover:scale-105 shadow hover:shadow-lg duration-200 bg-red-600 text-white"
            >
              Log Out
            </button>
            <div id="reader" width="600px"></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
