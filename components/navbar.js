import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faExpandAlt,
  faMinus,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const Routes = [
  {
    text: "About",
    href: "#about"
  },
  {
    text: "Experience",
    href: "#experience"
  },
  {
    text: "Code",
    href: "#code"
  },
  {
    text: "Contact",
    href: "#contact"
  }
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(214, 214, 214);
  box-sizing: inherit;
  max-width: inherit;
  width: inherit;
  opacity: ${props => props.fixed && "0.9"};
  padding: ${props => (props.fixed ? "0.125rem 0" : "0.25rem 0")};
  position: ${props => (props.fixed ? "fixed" : "absolute")};
  top: ${props => props.fixed && 0};
  border-radius: ${props => (props.fixed ? "0px" : "8px 8px 0 0")};
  transition: border-top-left-radius 0.25s ease,
    border-top-right-radius 0.25s ease, padding 0.25s ease;
  z-index: 10;
`;

const LinksContainer = styled.div`
  display: flex;
  background-color: inherit;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    position: absolute;
    top: 3rem;
    right: 0;
    float: right;
    flex-direction: column;
  }
`;

const Anchor = styled.a`
  display: inline-block;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: inherit;
  background-color: inherit;
  font-size: 18px;
  line-height: 1;
  font-family: inherit;
  font-weight: inherit;
  border-radius: 4px;
  transition: background-color 0.25s;
  &:hover {
    background-color: #f6f7f9;
  }
  @media (max-width: 768px) {
    display: ${props => (props.visible ? "block" : "none")};
    white-space: nowrap;
  }
`;

const Bars = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 1rem;
  bottom: 0.75rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

function NavLink(props) {
  const { href, visible, children } = props;

  return (
    <Link href={href}>
      <Anchor visible={visible}>{children}</Anchor>
    </Link>
  );
}

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const WindowButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 1.5rem;
  bottom: 0.75rem;
  & > div:not(:last-child) {
    margin-right: 0.75rem;
  }
  svg {
    visibility: hidden;
  }

  &:hover {
    svg {
      visibility: visible;
    }
  }
`;

function WindowButtons() {
  return (
    <WindowButtonContainer>
      <Link href="/">
        <Circle color="rgb(255,59,48)">
          <FontAwesomeIcon icon={faTimes} color="rgba(0,0,0,0.3)" />
        </Circle>
      </Link>
      <Link href="/">
        <Circle color="#ffbc00">
          <FontAwesomeIcon icon={faMinus} color="rgba(0,0,0,0.3)" />
        </Circle>
      </Link>
      <Link href={Routes[0].href}>
        <Circle color="rgb(40, 205, 65)">
          <FontAwesomeIcon icon={faExpandAlt} color="rgba(0,0,0,0.3)" />
        </Circle>
      </Link>
    </WindowButtonContainer>
  );
}

export default function Navbar(props) {
  const { links, ...rest } = props;

  const [fixed, setFixed] = useState(false);
  const [height, setHeight] = useState(0);
  const [showLinks, toggleShowLinks] = useState(false); // For the responsive tool bar

  useEffect(() => {
    const header = document.getElementById("navbar");
    const sticky = header.offsetTop;

    const resizeCallBack = window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });

    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      window.removeEventListener("resize", resizeCallBack);
    };
  }, [height]);

  const handleBarsClick = () => {
    toggleShowLinks(!showLinks);
  };

  const handleNavClick = () => {
    toggleShowLinks(false);
  };

  return (
    <Container id="navbar" fixed={fixed}>
      <WindowButtons />
      {/* TODO: fix hacky div */}
      <div style={{ padding: "1.25rem" }}></div>
      <LinksContainer onClick={handleNavClick} visible={showLinks}>
        {Routes.map((route, index) => {
          return (
            <NavLink
              visible={showLinks}
              className="nav-link"
              href={route.href}
              key={index}
            >
              {route.text}
            </NavLink>
          );
        })}
      </LinksContainer>
      <Bars size="lg" icon={faBars} onClick={handleBarsClick} />
    </Container>
  );
}
