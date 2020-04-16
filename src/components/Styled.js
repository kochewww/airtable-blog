import styled from "styled-components";
import { Link } from "gatsby";
import { Chip } from "@material-ui/core";
export const BlockWrapper = styled.div`
  margin-bottom: 1rem;
`;
export const Wrapper = styled.div`
  margin-right: 1rem;
  display: inline;
`;
export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const Picture = styled.div`
  background-image: url(${(props) => props.url});
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 15rem;
  margin-top: 1rem;
`;
export const DateWrapper = styled.div`
  margin-top: -25px;
  display: block;
  text-align: right;
`;
export const StyledChip = styled(Chip)`
  margin-right: 1rem;
`;
