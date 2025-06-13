import { Link, useNavigate } from 'react-router-dom';

interface PageHeaderProps {
  breadcrumbs: { label: string, path?: string }[];
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ breadcrumbs, title }) => (
  <div className="w-full max-w-5xl mx-auto mb-8">
    <nav className="text-sm text-gray-500 mb-2">
      {breadcrumbs.map((crumb, idx) =>
        crumb.path ? (
          <span key={crumb.label}>
            <Link
              to={crumb.path}
              className="hover:underline text-blue-700"
            >
              {crumb.label}
            </Link>
            {idx < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ) : (
          <span className="font-semibold text-gray-700" key={crumb.label}>
            {crumb.label}
            {idx < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        )
      )}
    </nav>
    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
      {title}
    </h1>
  </div>
);

export default PageHeader;
