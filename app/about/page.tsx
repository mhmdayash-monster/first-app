export default function About() {
    return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{backgroundColor: "#0070f3", color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "100px"}}>
          <h1 style={{fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Water Monster</h1>
        </header>
        <main>
          <section style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p style={{fontFamily: "Arial, sans-serif", fontWeight: "bold"}}>About Us</p>
          </section>
        </main>
        <footer style={{ padding: "10px", backgroundColor: "#0070f3", color: "white", textAlign: "center" }}>
          <p>© 2025 My Website</p>
        </footer>
      </div>
    );
  }
  