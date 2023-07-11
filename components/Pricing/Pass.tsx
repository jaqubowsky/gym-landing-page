"use client";

import { FC, useEffect, useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import { PlusCircle } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";
import { Tooltip } from "react-tooltip";

interface PassProps {
  isOptionOn?: boolean;
  passPrice: number;
  benefits: string[];
}

interface UserStatus {
  isStudent: boolean;
  isSenior: boolean;
}

const Pass: FC<PassProps> = ({ isOptionOn, passPrice, benefits }) => {
  const [userStatus, setUserStatus] = useState<UserStatus>({
    isStudent: false,
    isSenior: false,
  });
  const [price, setPrice] = useState(passPrice);

  useEffect(() => {
    let calculatedPrice = passPrice - (isOptionOn ? 10 : 0);

    if (userStatus.isStudent || userStatus.isSenior) {
      calculatedPrice -= calculatedPrice * 0.1;
    }

    setPrice(calculatedPrice);
  }, [isOptionOn, userStatus, passPrice]);

  const handleToggle = (toggleType: keyof UserStatus) => {
    setUserStatus((prevStatus) => ({
      ...prevStatus,
      [toggleType]: !prevStatus[toggleType],
      ...(toggleType === "isStudent" && { isSenior: false }),
      ...(toggleType === "isSenior" && { isStudent: false }),
    }));
  };

  const benefitsEl = benefits.map((benefit) => {
    return (
      <li className="flex gap-6 text-left" key={benefit}>
        <span>
          <PlusCircle />
        </span>
        <span>{benefit}</span>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
      <div>
        <h3 className="text-2xl font-bold">Karnet</h3>
        <span>Płatny co miesiąc</span>
      </div>
      <AnimatePresence>
        <motion.div className="text-4xl font-bold my-6">
          <motion.span
            key={price}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {price} zł
          </motion.span>
        </motion.div>
      </AnimatePresence>
      <ul className="flex flex-col gap-2">{benefitsEl}</ul>
      <div className="flex justify-between w-full mt-6">
        <span
          className="cursor-pointer"
          data-tooltip-id="student-tooltip"
          data-tooltip-content="za okazaniem legitymacji"
        >
          Jestem STUDENTEM
        </span>
        <Tooltip id="student-tooltip" />
        <ToggleSwitch
          isOn={userStatus.isStudent}
          handleToggle={() => handleToggle("isStudent")}
        />
      </div>
      <div className="flex justify-between w-full mt-6">
        <span
          className="cursor-pointer"
          data-tooltip-id="senior-tooltip"
          data-tooltip-content="powyżej 55 roku życia"
          data-tooltip-place="bottom"
        >
          Jestem SENIOREM
        </span>
        <Tooltip id="senior-tooltip" />
        <ToggleSwitch
          isOn={userStatus.isSenior}
          handleToggle={() => handleToggle("isSenior")}
        />
      </div>
    </div>
  );
};

export default Pass;
