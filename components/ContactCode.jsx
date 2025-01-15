import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "krishnajain5050@gmail.com",
    href: "mailto:krishnjain5050@gmail.com",
  },
  {
    social: "github",
    link: "krishna4040",
    href: "https://github.com/krishna4040",
  },
  {
    social: "linkedin",
    link: "krishna-jain",
    href: "https://www.linkedin.com/in/krishna-jain-842539205/",
  },
  {
    social: "twitter",
    link: "krishna5048",
    href: "https://www.x.com/krishna5048",
  },
  {
    social: "instagram",
    link: "_its__krish_",
    href: "https://www.instagram.com/_is__krish_",
  },
  {
    social: "polywork",
    link: "krishna",
    href: "https://www.polywork.com/nitinranganath",
  },
  {
    social: "codepen",
    link: "krishna",
    href: "https://codepen.io/itsnitinr",
  },
  {
    social: "codesandbox",
    link: "krishna",
    href: "https://codesandbox.io/u/itsnitinr",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
