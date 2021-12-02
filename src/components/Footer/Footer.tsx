import { currentYear } from '../../utils/utils';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {currentYear} sahvea</p>
    </footer>
  );
}

export default Footer;