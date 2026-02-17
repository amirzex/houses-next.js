export type Option = {
  label: string;
  value: string;
};

export type DropdwonProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};
