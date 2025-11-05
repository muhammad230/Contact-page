import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";

const Contactform = () => {
  return (
    <section className={styles.container}>
  <div className={styles.contact_form}>
    <div className={styles.form_area}>
      <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA CALL" icon={<MdLocalPhone fontSize="24px" />} />
      </div>

      <Button
        isnew={true}
        text="VIA EMAIL FORM"
        icon={<HiMail fontSize="24px" />}
      />

      <form>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8" />
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button text="Submit" icon={<HiMail fontSize="24px" />} />
        </div>
      </form>
    </div>

    <div className={styles.contact_image}>
      <img src="/images/img.svg" alt="" />
    </div>
  </div>
</section>

  );
};

export default Contactform;
