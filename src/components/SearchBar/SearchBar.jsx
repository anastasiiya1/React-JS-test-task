import { CiSearch } from "react-icons/ci";
import helpCenter from "../../assets/Help_Center.svg";
import { IoChatbubbles } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import avatar from "../../assets/Avatar.png";
import avatar2 from "../../assets/Avatar@2x.png";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchInput}>
        <CiSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Search transactions, invoices or help"
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.iconsContainer}>
          <img src={helpCenter} width="16" className={styles.icon} />
          <IoChatbubbles className={styles.mirrored} />
          <div className={styles.bellWrapper}>
            <FaBell className={styles.bell} />
          </div>
        </div>
        <div className={styles.profileContainer}>
          <p>John Doe</p>
          <FaAngleDown className={styles.icon} />
          <picture>
            <source srcSet={avatar2} media="(min-resolution: 2dppx)" />
            <img src={avatar} alt="User Avatar" className={styles.avatar} />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
