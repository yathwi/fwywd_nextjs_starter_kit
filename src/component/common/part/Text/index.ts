export interface TextProps {
  name: string;
}

export const baseId = 'part-text';

export const Text: React.FC<TextProps> = ({ name }) => <p>{name}</p>;
