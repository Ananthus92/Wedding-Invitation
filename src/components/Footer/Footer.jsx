import FooterDivider from "./FooterDivider";
import FooterContent from "./FooterContent";

function Footer() {
  return (
    <footer
      className="
      
      py-16
      md:py-24
      "
    >
      <div className="max-w-6xl mx-auto select-none">

        <FooterDivider />

        <FooterContent />

      </div>
    </footer>
  );
}

export default Footer;