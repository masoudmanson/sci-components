import styled from "@emotion/styled";
import { Switch, SwitchProps } from "@material-ui/core";
import {
  CommonThemeProps,
  fontBodyXs,
  getBorders,
  getColors,
  getCorners,
  getSpaces,
} from "../styles";

export interface ExtraProps extends SwitchProps, CommonThemeProps {
  offLabel?: string;
  onChange?(e: React.ChangeEvent): void;
  onLabel?: string;
}

const toggle = (props: ExtraProps) => {
  const { disabled } = props;
  const corners = getCorners(props);
  const spaces = getSpaces(props);
  const TOGGLE_HEIGHT = 18;

  return `
    cursor: ${disabled ? "default" : "pointer"};
    border-radius: ${corners?.l}px;
    height: 26px;
    width: 62px;
    line-height: 18px;
    margin-bottom: ${spaces?.m}px;
    padding: 0;

    .MuiSwitch-switchBase {
      font: inherit;
      margin: ${spaces?.xxs}px;
      padding: 0;

      &:hover {
        background-color: white;
      }
    }

    .MuiSwitch-thumb {
      height: ${TOGGLE_HEIGHT}px;
      width: ${TOGGLE_HEIGHT}px;
      box-shadow: none;
    }

    && .MuiSwitch-track {
      background-color: white;
      width: unset;
    }
  `;
};

const toggleOn = (props: ExtraProps) => {
  const { disabled, value } = props;
  const borders = getBorders(props);
  const colors = getColors(props);
  const spaces = getSpaces(props);

  return `
    outline: ${disabled ? borders?.primary[300] : borders?.primary[400]};

    .MuiSwitch-thumb {
      color: ${disabled ? colors?.primary[300] : colors?.primary[400]};
    }

    .MuiSwitch-switchBase {
      left: unset;
      right: 0;
      transform: unset;

      .MuiIconButton-label {
        margin-left: ${spaces?.s}px;
      }

      &:before {
        color: ${disabled ? colors?.gray[300] : "black"};
        content: "${value}";
        font: inherit;
        font-family: 'Open sans';
      }
    }

    ${
      !disabled &&
      `&:hover {
        outline: ${borders?.primary[500]};

        .MuiSwitch-thumb {
          color: ${colors?.primary[500]};
        }
      }`
    }
  `;
};

const toggleOff = (props: ExtraProps) => {
  const { disabled, value } = props;
  const borders = getBorders(props);
  const colors = getColors(props);
  const spaces = getSpaces(props);

  return `
    & {
      outline: ${disabled ? borders?.gray[300] : borders?.gray[400]};
    }

    .MuiSwitch-thumb {
      color: ${disabled ? colors?.gray[300] : colors?.gray[400]};
    }

    .MuiSwitch-switchBase {
      right: unset;
      left: 0;
      transform: unset;

      .MuiIconButton-label {
        margin-right: ${spaces?.s}px;
      }

      &:after {
        color: ${disabled ? colors?.gray[300] : colors?.gray[500]};
        content: "${value}";
        font: inherit;
        font-family: 'Open sans';
      }
    }

    ${
      !disabled &&
      `&:hover {
        outline: ${borders?.gray[500]};

        .MuiSwitch-thumb {
          color: ${colors?.gray[500]};
        }
      }`
    }
  `;
};

export const Toggle = styled(Switch)`
  ${fontBodyXs}
  ${(props: ExtraProps) => {
    const { checked } = props;

    return `
      ${toggle(props)}
      ${checked ? toggleOn(props) : toggleOff(props)}
    `;
  }}
`;