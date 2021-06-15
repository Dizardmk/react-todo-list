import Container from '../Container';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import './AppBar.scss';

export default function AppBar() {
  return (
    <header className="header">
      <Container>
        <Logo />
        <Navigation />
        {false ? <UserMenu /> : <AuthNav />}
      </Container>
    </header>
  );
}
