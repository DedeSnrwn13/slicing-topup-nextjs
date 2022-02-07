import Sidebar from './../../components/organisms/Sidebar/Index';
import OverviewContent from './../../components/organisms/OverviewContent/Index';

export default function Overview() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
