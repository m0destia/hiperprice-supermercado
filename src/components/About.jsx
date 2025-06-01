export default function About() {
  return (
    <footer
      id="about"
      className="bg-violet-600 text-white p-20 mt-20 flex flex-col items-center justify-center"
    >
      <span role="img">&lt;M/&gt;</span>
      <span data-i18n="copy-reservation">
        &copy;m0destia 2025 - All rights reserved
      </span>
      <a
        href="../../index.html"
        target="_blank"
        className="text-yellow-300 underline"
      >
        portfolio
      </a>
    </footer>
  );
}
