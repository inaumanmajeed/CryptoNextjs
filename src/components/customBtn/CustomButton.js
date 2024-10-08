"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import UpArrow from "../../../static/uparrow.svg";

const CustomButtonContainer = styled(Button)(
  ({
    theme,
    bg,
    hidden,
    radius,
    color,
    fontSize,
    hover,
    border,
    hoverColor,
    width,
    height,
    hoverBorder,
  }) => ({
    backgroundColor: bg ? bg : "transparent",
    borderRadius: radius ? radius : "0px",
    color: color ? color : "#697987",
    fontSize: fontSize ? fontSize : "16px",
    border: border ? border : "none",
    width: width ? width : "100%",
    height: height ? height : "100%",
    textTransform: "none",
    padding: "10px",
    fontWeight: 600,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: hidden ? "none" : "flex",
      width: "fit-content",
    },
    "&:hover": {
      backgroundColor: hover ? hover : bg,
      border: border ? `1px solid ${hoverBorder}` : "none",
      color: hoverColor ? hoverColor : "#fff",
    },
    "& span": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "5px",
      color: "rgb(99, 115, 129)",
      fontSize: "8px",
      fontWeight: 600,
    },
  })
);

const CustomButton = ({
  title,
  hidden,
  bg,
  height,
  radius,
  color,
  fontSize,
  hoverBorder,
  hover,
  border,
  width,
  subTitle,
  hoverColor,
  ...props
}) => {
  return (
    <CustomButtonContainer
      radius={radius}
      bg={bg}
      fontSize={fontSize}
      color={color}
      hover={hover}
      border={border}
      hidden={hidden}
      width={width}
      height={height}
      hoverBorder={hoverBorder}
      disableRipple
      hoverColor={hoverColor}
      {...props}
    >
      {title}
      {subTitle && (
        <span>
          {subTitle}
          <UpArrow />
        </span>
      )}
    </CustomButtonContainer>
  );
};

export default CustomButton;
