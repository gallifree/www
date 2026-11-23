export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <meta property="og:title" content="Gallifree" />
      <meta property="og:description" content="Free & open-source software, mostly in Rust." />
      <meta property="og:image" content="https://gallifree.app/logo.svg" />
      <meta property="og:url" content="https://gallifree.app/" />
      {/* Apply the saved theme before first paint to avoid a flash. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
        }}
      />
    </>
  );
}
