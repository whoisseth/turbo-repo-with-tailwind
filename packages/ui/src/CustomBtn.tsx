/** @format */
import classnames from "classnames";
import * as React from "react";

type Button = {
  string: string;
  className: string;
};

export function CustomBtn({ string, className }: Button) {
  return <div className={classnames("bg-red-400 max-w-xs", className)}>{string}</div>;
}
