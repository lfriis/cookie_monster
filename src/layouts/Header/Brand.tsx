import Link from "next/link";

export const Brand: React.FC = () => {
  return (
    <div className="flex-1">
      <Link href="/">
        <p className="btn-ghost btn text-xl normal-case">Crumbs Cookie Co.</p>
      </Link>
    </div>
  );
};
