export type CharacteristicsBlockProps = {
  description: string;
  listBlock: listBlock[];
};

type listBlock = {
  title: string;
  items: CharacteristicProps[];
};

export type CharacteristicProps = {
  title: string;
  value: string | number;
};
