import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

interface activeMenuProps {
  activeMenu?: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: Partial<activeMenuProps>) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            icon="menu-overview"
            active={activeMenu === 'overview'}
            href="/member"
          />
          <MenuItem
            title="Transactions"
            icon="menu-transactions"
            href="/member/transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem title="Messages" icon="menu-messages" href="/member" />
          <MenuItem title="Card" icon="menu-card" href="/member" />
          <MenuItem title="Rewards" icon="menu-rewards" href="/member" />
          <MenuItem
            title="Settings"
            icon="menu-settings"
            href="/member/edit-profile"
            active={activeMenu === 'settings'}
          />
          <MenuItem title="Log Out" icon="menu-logout" onClick={onLogout} />
        </div>
        <Footer />
      </div>
    </section>
  );
}
