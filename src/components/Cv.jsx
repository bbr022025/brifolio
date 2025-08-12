import style from "./Cv.module.css";

export default function Cv() {
  return (
    <div id="cv" className={style.grid}>
      <div className={style.grid1}>
        <h2>Frontend Developer | UX Design</h2>
        <ul>
          <li>
            <p>
              Versatile <strong>frontend developer</strong> with a background in
              design systems and responsive web applications using{" "}
              <strong>React, HTML, CSS and JavaScript</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong>UX design</strong> using <strong>Figma</strong> for
              creating design systems, components/variants and prototypes.
            </p>
          </li>
          <li>
            <p>
              Knowledge of <strong>Bash, Vite, NPM, Powershell</strong>, as well
              as Linux, mainly <strong>Ubuntu</strong>, but also{" "}
              <strong>nixOS</strong>.
            </p>
          </li>
          <li>
            <p>
              Basic knowledge of building React Apps using APIs as well as
              components and hooks.
            </p>
          </li>
        </ul>
      </div>
      <div className={style.grid2}>
        <h2>Brian Blomlie</h2>
        <p>📧 blomlie@proton.me</p>
        <p>📱 +47 904 28 336</p>
        <p>🌍 Oslo, Norway</p>
        <p>
          <a href="https://linkedin.com/in/blomlie">LinkedIn</a>
        </p>
      </div>
      <div className={style.grid3}>
        <h3>Frontend skills</h3>
        <p>HTML5, CSS3, JavaScript(ES6+), React, Git, GitHub -</p>
        <h5>UX & Design</h5>
        <p>Figma, Design Thinking, Wireframing, Prototyping</p>
      </div>
      <div className={style.grid4}>
        <h2>Tools</h2>
        <p> Bash · PowerShell · NixOS · Obsidian</p>
      </div>
    </div>
  );
}
