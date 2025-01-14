import Link from 'next/link'; // Import Link from next/link

export default function HomePage() {
  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{backgroundColor: "#0070f3", color: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "100px"}}>
        <h1 style={{fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>Water Monster</h1>
      </header>
      <main style={{display: "flex"}}>
        <section style={{flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
          <p style={{fontFamily: "Arial, sans-serif", fontWeight: "bold", marginBottom: "20px"}}>Water Management Made Easy</p>
          <Link href="/about">
          <button style={{padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px"}}> About </button> </Link>
        </section>
        <section style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src="/images/Iphone.png" alt="My Image" style={{width: "50%", height: "auto",}}/>
        </section>
      </main>
      <footer style={{ padding: "10px", backgroundColor: "#0070f3", color: "white", textAlign: "center" }}>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
}
