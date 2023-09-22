"use client";

import Link from "next/link";
import { useState } from "react";

const EmailButton = () => {
  const email = "hassan.trabelsi1999@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy email", err));
  };

  return (
    <div className="relative inline-block">
      <Link href={`mailto:${email}`}>
        <span className="flex items-center pr-10 pl-4 py-2 border-2 border-blue-500 bg-blue-500 bg-opacity-20 rounded-full">
          {email}
        </span>
      </Link>
      <button
        onClick={copyToClipboard}
        className={`absolute top-1/2 transform -translate-y-1/2 right-2 w-6 h-6 rounded-full transition focus:outline-none ${
          copied ? "bg-green-400" : "bg-blue-400 hover:bg-blue-500"
        }`}
      >
        <i
          className={`fa ${
            copied ? "fa-check" : "fa-copy"
          } text-xs flex items-center justify-center`}
        ></i>
      </button>
    </div>
  );
};

export default EmailButton;
