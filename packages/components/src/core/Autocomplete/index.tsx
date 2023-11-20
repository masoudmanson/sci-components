import {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteValue,
} from "@mui/base";
import { PopperProps } from "@mui/material";
import React, { ReactElement } from "react";
import { IconNameToSizes } from "../Icon";
import AutocompleteBase, {
  AutocompleteBaseProps,
  AutocompleteOptionBasic,
  AutocompleteOptionComponent,
  DefaultAutocompleteOption,
} from "./components/AutocompleteBase";
import AutocompleteMultiColumn, {
  AutocompleteMultiColumnProps,
} from "./components/AutocompleteMultiColumn";
import { StyledPopper } from "./components/AutocompleteMultiColumn/style";

export type {
  AutocompleteBaseProps,
  AutocompleteMultiColumnProps,
  AutocompleteOptionBasic,
  AutocompleteOptionComponent,
  DefaultAutocompleteOption,
};

export type AutocompleteSingleColumnOption<T> = T;

export type AutocompleteMultiColumnOption<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = {
  options: T[];
  props?: Partial<
    AutocompleteBaseProps<T, Multiple, DisableClearable, FreeSolo>
  >;
  style?: React.CSSProperties;
  value?: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
  columnWidth?: number;
  columnName: string;
  sdsIcon?: keyof IconNameToSizes;
};

export type SDSAutocompleteOptions<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> =
  | AutocompleteSingleColumnOption<T>[]
  | AutocompleteMultiColumnOption<T, Multiple, DisableClearable, FreeSolo>[];

export type AutocompleteMultiColumnValue<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> =
  | Record<
      string | number | symbol,
      AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>
    >
  | undefined;

export type AutocompleteSingleColumnValue<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;

export type SDSAutocompleteValue<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> =
  | AutocompleteSingleColumnValue<T, Multiple, DisableClearable, FreeSolo>
  | AutocompleteMultiColumnValue<T, Multiple, DisableClearable, FreeSolo>;

export type AutocompleteSingleColumnOnChange<
  T,
  Multiple,
  DisableClearable,
  FreeSolo
> = (
  event: React.SyntheticEvent,
  value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
  reason: AutocompleteChangeReason,
  details?: AutocompleteChangeDetails<T>
) => void;

export type AutocompleteMultiColumnOnChange<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = (
  event: React.SyntheticEvent,
  value: AutocompleteMultiColumnValue<T, Multiple, DisableClearable, FreeSolo>,
  reason: AutocompleteChangeReason,
  details?: AutocompleteChangeDetails<T>
) => void;

export type SDSAutocompleteOnChange<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> =
  | AutocompleteSingleColumnOnChange<T, Multiple, DisableClearable, FreeSolo>
  | AutocompleteMultiColumnOnChange<T, Multiple, DisableClearable, FreeSolo>;

interface ExtraAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> {
  options: SDSAutocompleteOptions<T, Multiple, DisableClearable, FreeSolo>;
  PopperBaseProps?: Partial<PopperProps>;
  value?: SDSAutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
  onClickAway?: (event: MouseEvent | TouchEvent) => void;
  onChange?: SDSAutocompleteOnChange<T, Multiple, DisableClearable, FreeSolo>;
  count?: number;
  icon?: ReactElement;
  search?: boolean;
}

export type AutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Omit<
  AutocompleteBaseProps<T, Multiple, DisableClearable, FreeSolo>,
  "options" | "value" | "onChange"
> &
  ExtraAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>;

export { StyledPopper as AutocompleteMultiColumnStyledPopper };

const Autocomplete = <
  T extends DefaultAutocompleteOption,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
): JSX.Element => {
  const { options, value, onChange, ...rest } = props;

  // Multi-column options
  if (options && !!options[0] && "options" in options[0]) {
    if (options.length > 1) {
      return (
        <AutocompleteMultiColumn
          options={
            options as AutocompleteMultiColumnOption<
              T,
              Multiple,
              DisableClearable,
              FreeSolo
            >[]
          }
          value={
            value as AutocompleteMultiColumnValue<
              T,
              Multiple,
              DisableClearable,
              FreeSolo
            >
          }
          onChange={
            onChange as AutocompleteMultiColumnOnChange<
              T,
              Multiple,
              DisableClearable,
              FreeSolo
            >
          }
          {...rest}
          // (masoudmanson): groupBy option is disabled on MultiColumn dropdowns
          groupBy={undefined}
          open
        />
      );
    } else {
      return (
        <AutocompleteBase
          options={options[0].options as AutocompleteSingleColumnOption<T>[]}
          value={
            value as AutocompleteSingleColumnValue<
              T,
              Multiple,
              DisableClearable,
              FreeSolo
            >
          }
          onChange={
            onChange as AutocompleteSingleColumnOnChange<
              T,
              Multiple,
              DisableClearable,
              FreeSolo
            >
          }
          {...rest}
        />
      );
    }
  } else {
    return (
      <AutocompleteBase
        options={options as AutocompleteSingleColumnOption<T>[]}
        onChange={
          onChange as AutocompleteSingleColumnOnChange<
            T,
            Multiple,
            DisableClearable,
            FreeSolo
          >
        }
        value={
          value as AutocompleteSingleColumnValue<
            T,
            Multiple,
            DisableClearable,
            FreeSolo
          >
        }
        {...rest}
      />
    );
  }
};

export default Autocomplete;
