import React from "react";
import { LuSendHorizontal } from "react-icons/lu";
import QR from "../../assets/qr.png";
import Download1 from "../../assets/play_store.png";
import Download2 from "../../assets/app_store.png";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white text-center py-12 px-12 md:px-16 lg:px-24">
      <div className="flex justify-between">
        <div className="flex flex-col items-start gap-2">
          <p className="font-mono font-semibold text-2xl">AlloraMart</p>
          <p className="font-semibold text-lg">Subscribe</p>
          <p className="text-sm text-neutral-300">
            Get 10% off on your first order
          </p>
          <div className="flex items-center gap-2 border rounded-sm px-2 py-1">
            <input
              className="placeholder:text-sm w-32"
              type="text"
              placeholder="Enter your email"
            />
            <LuSendHorizontal className="size-5" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-lg mb-2">Support</p>
          <p className="text-sm wrap-break-word">
            Suite 678 755 Leigha Light, Mabelberg, AZ 37784-9326
          </p>
          <p className="text-sm">alloramart@gmail.com</p>
          <p className="text-sm">+1 765 875 7582</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-lg mb-2">Account</p>
          <p className="text-sm">My Account</p>
          <p className="text-sm">Login / Register</p>
          <p className="text-sm">Cart</p>
          <p className="text-sm">Wishlist</p>
          <p className="text-sm">Shop</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-lg mb-2">Quick Link</p>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Terms Of Use</p>
          <p className="text-sm">FAQ</p>
          <p className="text-sm">Contact</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-lg mb-2">Download App</p>
          <p className="text-[0.7rem] text-neutral-400">
            Save $3 with App, New Users Only
          </p>
          <div className="flex gap-2 items-center">
            <img src={QR} alt="QR code to download app" className="w-16 h-16" />
            <div className="gap-2 flex flex-col">
              <img
                src={Download1}
                alt="Download from Play Store"
                className="w-20"
              />
              <img
                src={Download2}
                alt="Download from App Store"
                className="w-20 border rounded-md"
              />
            </div>
          </div>
          <div className=" w-full flex justify-start gap-5 text-xl p-2">
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaSquareInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="text-sm text-neutral-500 mt-12 -mb-6">
        copyright © 2024 AlloraMart. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
