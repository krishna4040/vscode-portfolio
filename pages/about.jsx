import Experience from "../components/Experience";

const AboutPage = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>About Me 🌟</h1>
        <p style={{ textAlign: "center", margin: "0 auto", maxWidth: "650px" }}>
          👨‍💻 Full Stack Developer | ⚡ Stack Independent (Specializing
          JavaScript)
          <br />
          🌐 RESTful Services | ☁️ Cloud Engineer (AWS, Docker, Kubernetes)
          <br />
          🎓 B.Tech in IT from Punjab University (2026, CGPA: 8.3)
        </p>
        <Experience />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
