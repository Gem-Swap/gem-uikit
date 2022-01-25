import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image href="/gemswap-logo-light.png" width="32"></image>
    </Svg>
  );
};

export default Icon;
