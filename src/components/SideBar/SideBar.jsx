import { Link, useLocation } from "react-router-dom";
import home from "../../assets/Home.svg";
import inbox from "../../assets/Inbox.svg";
import helpCenter from "../../assets/Help_Center.svg";
import invoices from "../../assets/Invoices.svg";
import { IoMdChatboxes } from "react-icons/io";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { PiCalendarDots } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

import styles from "./SideBar.module.css";
import { CustomIcon } from "../../utils/CustomIcon";
import clsx from "clsx";

export const SideBar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <p>Impekable</p>
      </div>
      <div className={styles.pagesContainer}>
        <ul className={styles.pagesList}>
          <li>
            <Link
              to="/home"
              className={clsx(styles.link, {
                [styles.active]: isActive("/home"),
              })}
            >
              <img src={home} alt="Home" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={clsx(styles.link, {
                [styles.active]: isActive("/dashboard"),
              })}
            >
              <BiSolidBarChartAlt2 className={styles.icon} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/inbox"
              className={clsx(styles.link, {
                [styles.active]: isActive("/inbox"),
              })}
            >
              <img src={inbox} alt="Inbox" />
              Inbox
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={clsx(styles.link, {
                [styles.active]: isActive("/products"),
              })}
            >
              <CustomIcon className={styles.icon} />
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/invoices"
              className={clsx(styles.link, {
                [styles.active]: isActive("/invoices"),
              })}
            >
              <img src={invoices} alt="Invoices" />
              Invoices
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className={clsx(styles.link, {
                [styles.active]: isActive("/customers"),
              })}
            >
              <IoPersonOutline className={styles.icon} />
              Customers
            </Link>
          </li>
          <li>
            <Link
              to="/chatroom"
              className={clsx(styles.link, {
                [styles.active]: isActive("/chatroom"),
              })}
            >
              <IoMdChatboxes className={styles.icon} />
              Chat Room
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={clsx(styles.link, {
                [styles.active]: isActive("/"),
              })}
            >
              <PiCalendarDots className={styles.icon} />
              Calendar
            </Link>
          </li>
          <li>
            <Link
              to="/helpcenter"
              className={clsx(styles.link, {
                [styles.active]: isActive("/helpcenter"),
              })}
            >
              <img src={helpCenter} alt="Help Center" />
              Help Center
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={clsx(styles.link, {
                [styles.active]: isActive("/settings"),
              })}
            >
              <FaGear className={styles.icon} />
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
