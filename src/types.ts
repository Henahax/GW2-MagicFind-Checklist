export interface Item {
  type: string;
  value: number;
  icons: string[];
  names: {
    name: string;
    link: string;
  }[];
  description: string;
}
