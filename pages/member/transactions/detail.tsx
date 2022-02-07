import TransactionDetailContent from './../../../components/organisms/TransactionDetailContent/Index';
import Sidebar from './../../../components/organisms/Sidebar/Index';

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar />
      <TransactionDetailContent />
    </section>
  );
}
