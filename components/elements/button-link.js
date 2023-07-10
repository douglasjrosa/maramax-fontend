import classNames from "classnames";
import CustomLink from "./custom-link";

const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "block w-full lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md",
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "px-6 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "bg-blue-600 text-white border-blue-600 hover:bg-blue-800": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "bg-transparent text-blue-800 border-blue-800 hover:bg-blue-100": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "bg-white text-blue-800 border-white hover:bg-blue-100": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "bg-transparent text-white border-white hover:bg-blue-100": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  );
};

const ButtonLink = ({ button, appearance, compact = false }) => {
  return (
    <CustomLink link={button}>
      <ButtonContent button={button} appearance={appearance} compact={compact} />
    </CustomLink>
  );
};

export default ButtonLink;
