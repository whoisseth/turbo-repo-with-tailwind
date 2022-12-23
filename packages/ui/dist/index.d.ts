/** @format */
type Button$1 = {
    string: string;
};
declare const Button$1: ({ string }: Button$1) => JSX.Element;

type Button = {
    string: string;
    className: string;
};
declare function CustomBtn({ string, className }: Button): JSX.Element;

export { Button$1 as Button, CustomBtn };
