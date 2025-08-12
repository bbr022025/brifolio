import style from "./GridCard.module.css";

function GridCard() {
  return (
    <div className={style.grid}>
      <div className={style.grid1}>
        <h2>Branding</h2>
        <p>
          I create unique brand identities that tell your story and connect with
          your audience.
        </p>
        <p>
          From logo design to brand strategy, I craft cohesive visuals and
          messaging that make your brand stand out.
        </p>
      </div>
      <div className={style.grid2}>
        <h3>Webdesign</h3>
        <p>
          User-focused, aesthetically refined websites that balance
          functionality with visual appeal.{" "}
        </p>
        <p>
          I design intuitive digital experiences tailored to your brand and
          audience.
        </p>
      </div>
      <div className={style.grid3}>
        <h2>Print Design</h2>
        <p>
          Tangible brand experiences that leave a lasting impression. From
          editorial layouts to packaging, I create designs that translate
          seamlessly from screen to print.
        </p>
      </div>
      <div className={style.grid4}>
        <h2>Art Direction</h2>
        <p>
          Bringing creative visions to life through strategic and aesthetic
          direction. I guide projects from concept to execution, ensuring a
          consistent and impactful visual language.
        </p>
      </div>
    </div>
  );
}

export default GridCard;
