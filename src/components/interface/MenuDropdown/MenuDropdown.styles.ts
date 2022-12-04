import styled from "styled-components";

export const Container = styled.main`
/* reset */
button,
p {
  all: unset;
}

.NavigationMenuRoot {
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
}

.NavigationMenuList {
  padding: 4px;
  list-style: none;
  margin: 0;
}
.NavigationMenuListUnLogged{
  display: flex;
  justify-content: center;
  background: rgba(255, 174, 3, 0.1);
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  box-shadow: 0 2px 10px ${props => props.theme.colors.boxShadow};
  margin: 0;
}
.NavigationMenuUnLogged{
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: rgba(255, 174, 3, 1);
  text-decoration: none;
}
.NavigationMenuTrigger,
.NavigationMenuLink {
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: ${props => props.theme.colors.titleDark};
}
.NavigationMenuTrigger:focus,
.NavigationMenuLink:focus {
  box-shadow: 0 0 0 2px var${props => props.theme.colors.titleLight};
}
.NavigationMenuTrigger:hover,
.NavigationMenuLink:hover {
  background-color: ${props => props.theme.colors.background};
}

.NavigationMenuTrigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
}

.avatar{
  border-radius: 50%;
  box-shadow: 0 2px 10px ${props => props.theme.colors.boxShadow};
}

.NavigationMenuLink {
  display: block;
  text-decoration: none;
  font-size: 15px;
  line-height: 1;
}

.NavigationMenuContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;
}
.NavigationMenuContent[data-motion='from-start'] {
  animation-name: enterFromLeft;
}
.NavigationMenuContent[data-motion='from-end'] {
  animation-name: enterFromRight;
}
.NavigationMenuContent[data-motion='to-start'] {
  animation-name: exitToLeft;
}
.NavigationMenuContent[data-motion='to-end'] {
  animation-name: exitToRight;
}
@media only screen and (min-width: 600px) {
  .NavigationMenuContent {
    width: auto;
  }
}

.NavigationMenuIndicator {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 10px;
  top: 100%;
  overflow: hidden;
  z-index: 1;
  transition: width, transform 250ms ease;
}
.NavigationMenuIndicator[data-state='visible'] {
  animation: fadeIn 200ms ease;
}
.NavigationMenuIndicator[data-state='hidden'] {
  animation: fadeOut 200ms ease;
}

.NavigationMenuViewport {
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;
}
.NavigationMenuViewport[data-state='open'] {
  animation: scaleIn 200ms ease;
}
.NavigationMenuViewport[data-state='closed'] {
  animation: scaleOut 200ms ease;
}
@media only screen and (min-width: 600px) {
  .NavigationMenuViewport {
    width: var(--radix-navigation-menu-viewport-width);
  }
}

.List {
  display: flex;
  flex-direction: column;
  padding: 22px;
  margin: 0;
  column-gap: 10px;
  list-style: none;
}

.CalloutBanner {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgb(2,0,36);
  background: linear-gradient(162deg, rgba(2,0,36,1) 0%, rgba(87,98,213,1) 69%, rgba(0,212,255,1) 100%);
  border-radius: 6px;
  padding: 25px;
  text-decoration: none;
  outline: none;
  user-select: none;
  cursor: pointer;
}
.CalloutBanner:focus {
  box-shadow: 0 0 0 2px #5762d5;
}

.CalloutHeading {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 16px;
  margin-bottom: 7px;
}

.CalloutText {
  color: #fff;
  font-size: 14px;
  line-height: 1.3;
}

.navigationMenuItem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  gap: 1rem;
  border-radius: 6px;
  :hover{
    background: ${props => props.theme.colors.primary};;
  }
}

.pointer{
  cursor: pointer;
}

.ViewportPosition {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 100%;
  perspective: 2000px;
}

.CaretDown {
  position: relative;
  color: var(--violet10);
  top: 1px;
  transition: transform 250ms ease;
}
[data-state='open'] > .CaretDown {
  transform: rotate(-180deg);
}

.Arrow {
  position: relative;
  top: 70%;
  background-color: ${props => props.theme.colors.background};
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  border-top-left-radius: 2px;
}

@keyframes enterFromRight {
  from {
    opacity: 0;
    transform: translateX(200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes enterFromLeft {
  from {
    opacity: 0;
    transform: translateX(-200px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes exitToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(200px);
  }
}

@keyframes exitToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-200px);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: rotateX(-30deg) scale(0.9);
  }
  to {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
}

@keyframes scaleOut {
  from {
    opacity: 1;
    transform: rotateX(0deg) scale(1);
  }
  to {
    opacity: 0;
    transform: rotateX(-10deg) scale(0.95);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`;