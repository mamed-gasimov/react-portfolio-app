import { FC } from "react";

interface Props {
  active: string;
}

const NavigationDots: FC<Props> = ({ active }) => {
  const navLinks = ["home", "about", "work", "skills"];
  return (
    <div className="app__navigation">
      {navLinks.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
