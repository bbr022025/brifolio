import style from "../components/Btn.module.css";

export default function Btn() {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("cv");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href="#cv" onClick={handleClick} className={style.button}>
      <span className={style.fancy}>Ta kontakt</span>
    </a>
  );
}
