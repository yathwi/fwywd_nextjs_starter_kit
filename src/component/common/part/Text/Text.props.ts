import { TextProps } from '.';

const defaultProps: TextProps = {};

/**
 * const propObj への補足。
 * propObj の中身が3つ以上になる場合、以下のように書くと便利です。
 * 使わないときはこのコメントアウト部分は削除してください。
 */
/*interface PropObj {
  default: TextProps;
  pattern1(適宜名称を変えてください): TextProps;
  pattern2: TextProps;
  ...
}
export const propObj: PropObj = {
  default: defaultProps,
    pattern1(適宜名称を変えてください): pattern1Props;
  pattern2: pattern2Props;
  ...
}*/

export const propObj: { [key: string]: TextProps } = {
  default: defaultProps,
};
