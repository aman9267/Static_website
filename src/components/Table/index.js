import React from "react";
import { IoCalculator } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import "./tablemenu.css";

const TableMenu = () => {
  return (
    <div className="table_menu">
      <div className="item_one">
        <IoCalculator />
        <p> Favorable Price</p>
      </div>
      <div className="item_two">
        <IoMdTimer />
        <p>Quick Sell</p>
      </div>
      <div className="item_three">
        <FaLock />
        <p>Secure</p>
      </div>
      <div className="item_four">
        <MdPayments /> <p>Instant payment</p>
      </div>
    </div>
  );
};

export default TableMenu;
