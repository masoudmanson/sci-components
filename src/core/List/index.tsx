import { ListProps as RawListProps } from "@material-ui/core";
import React from "react";
import { ListExtraProps, StyledList } from "./style";

type ListProps = ListExtraProps & RawListProps;

const List = (props: ListProps): JSX.Element => {
  const { ordered } = props;

  return (
    <StyledList component={ordered ? "ol" : "ul"} disablePadding {...props} />
  );
};

export default List;