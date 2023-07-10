import { MdClose, MdChevronRight } from "react-icons/md";
import Image from "./image";
import ButtonLink from "./button-link";
import { useLockBodyScroll } from "utils/hooks";
import { getButtonAppearance } from "utils/button";
import CustomLink from "./custom-link";

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  return (
    <div className="fixed top-0 right-4 rounded-2xl overflow-y-scroll bg-black bg-opacity-90 border-yellow-500 border-4 text-white z-10 pb-6 px-6">
      <div className="container flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between py-2 items-center">
          {/* Company logo */}
          <Image
            media={navbar.logo}
            className="h-8 w-auto object-contain"
            width="146"
            height="38"
          />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul
            className="flex flex-col list-none gap-6 items-baseline text-xl mb-10"
            onClick={closeSelf}
          >
            {navbar.links.map((navLink, index) => (
              <li key={`navLinkKey${index}`} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="hover:text-gray-200 py-6 flex flex-row justify-between items-center">
                    <span>{navLink.text}</span>
                    <MdChevronRight className="h-8 w-auto" />
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>
          {navbar.button && <ButtonLink
            button={navbar.button}
            appearance={getButtonAppearance(navbar.button.type, "light")}
          />}
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
