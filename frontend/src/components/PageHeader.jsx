/**
 * PageHeader - Reusable header section for interior pages
 * Provides consistent styling with title and optional subtitle
 */

function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1 className="page-header__title">{title}</h1>
        {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
