export interface MenuProps {
  isOpen: boolean;
  onClose: (e) => void;
  options: Options[];
}

export interface Options {
  label: string;
  value: string | number;
}
