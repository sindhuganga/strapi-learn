import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  // This will find out the pageid when we are hovering over
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const handleMouseLeave = (e) => {
    setPageId(null);
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      {/* We use optional chaining as the pageid might be null initially 
      as we are not hovering over anything */}
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        // we are doing the inline style as if we have more than 3 elements in the submenu
        // then we need have grid columns
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <a href={url} key={id}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
