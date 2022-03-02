import CX from 'classnames';

interface ButtonTabProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active, onClick } = props;
  const buttonClass = CX({
    'btn btn-status rounded-pill text-sm  me-3': true,
    'btn-active': active,
  });

  return (
    <button type="button" onClick={onClick} className={buttonClass}>
      {title}
    </button>
  );
}
