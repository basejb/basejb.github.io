import React from "react";
import styled from "styled-components";
// import style from "./default-layout.module.css";

interface IMenuBtnProps {
  isActive: boolean;
  setActive: (val: boolean) => void;
}

const Button = styled.button`
  border: none;
  background-color: white;
  padding: 10px;
`;

const MenuWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media (max-width: 640px) {
    width: 16px;
    height: 14px;
  }
  width: 32px;
  height: 28px;
`;

const MenuBar = styled.div`
  border: none;
  left: 0;
  position: absolute;
  width: 32px;
  height: 4px;
  background-color: #000;
  transition: top 0.25s, background-color 0.5s, transform 0.25s;
  @media (max-width: 640px) {
    width: 16px;
    height: 2px;
  }
  &.menu-top {
    top: 0;
    &.active {
      top: 12px;
      transform: translate(0) rotate(225deg);
    }
    @media (max-width: 640px) {
      &.active {
        top: 6px;
      }
    }
  }
  &.menu-middle {
    top: 12px;
    &.active {
      transform: translate(40px);
    }
    @media (max-width: 640px) {
      top: 6px;
    }
  }
  &.menu-bottom {
    top: 24px;
    &.active {
      top: 12px;
      transform: translate(0) rotate(135deg);
    }
    @media (max-width: 640px) {
      top: 12px;
      &.active {
        top: 6px;
      }
    }
  }
`;

const MenuBtn = ({ isActive, setActive }: IMenuBtnProps) => {
  return (
    <Button onClick={() => setActive(!isActive)}>
      <MenuWrapper>
        <MenuBar className={`menu-top ${isActive ? "active" : ""}`} />
        <MenuBar className={`menu-middle ${isActive ? "active" : ""}`} />
        <MenuBar className={`menu-bottom ${isActive ? "active" : ""}`} />
      </MenuWrapper>
    </Button>
  );
};

export default React.memo(MenuBtn);
