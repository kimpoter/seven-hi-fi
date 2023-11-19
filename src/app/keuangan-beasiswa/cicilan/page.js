"use client";
import PageTemplate from "@/components/PageTemplate";
import { FaCoins, FaCreditCard, FaMoneyBill } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export default function CicilanBPP() {
  /* eslint-disable react/jsx-key */
  const secNav = {
    "/keuangan-beasiswa/status": [
      <FaMoneyBill className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaMoneyBill className="" />,
      "Status Keuangan",
    ],
    "/keuangan-beasiswa/keringanan": [
      <FaCoins className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaCoins className="" />,
      "Pengajuan Keringanan BPP",
    ],
    "/keuangan-beasiswa/cicilan": [
      <FaCreditCard className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaCreditCard className="" />,
      "Pengajuan Cicilan BPP",
    ],
    "/keuangan-beasiswa/rekomendasi": [
      <FaUserGroup className="text-seven-hyperlink hover:text-seven-hyperlink-hover" />,
      <FaUserGroup className="" />,
      "Rekomendasi Teman",
    ],
  };
  return (
    <PageTemplate
      pageTitle={"Pengajuan Cicilan BPP"}
      breadCrumbs={[
        { href: "/keuangan-beasiswa/status", label: "Keuangan & Beasiswa" },
        { href: "/keuangan-beasiswa/cicilan", label: "Pengajuan Cicilan BPP" },
      ]}
      secondarynavbars={secNav}
    />
  );
}
