import "./index.scss";
import { FC, ReactNode } from "react";
import classNames from "classnames";

type Props = {
  children: ReactNode,
  className?: string,
};

export const Container:FC<Props> = ({children, className}) => (<div className={classNames("container", [className])}>{children}</div>)
