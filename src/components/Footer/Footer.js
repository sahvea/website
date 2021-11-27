import { currentYear } from '../../utils/utils';


function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {currentYear} sahvea</p>
    </footer>
  );
}

export default Footer;