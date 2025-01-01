import { TinyColor } from '@ctrl/tinycolor';

export class ThemingUtil {
  constructor() {}

  static getThemeValue(themeColor: string, name: string) {
    return {
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(52),
        '50',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(37),
        '100',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(26),
        '200',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(12),
        '300',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(6),
        '400',
        name
      ),
      ...ThemingUtil.getColorObject(new TinyColor(themeColor), '500', name),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).darken(6),
        '600',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).darken(12),
        '700',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).darken(18),
        '800',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).darken(24),
        '900',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(50).saturate(30),
        'A100',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(30).saturate(30),
        'A200',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(10).saturate(15),
        'A400',
        name
      ),
      ...ThemingUtil.getColorObject(
        new TinyColor(themeColor).lighten(5).saturate(5),
        'A700',
        name
      ),
    };
  }

  static getColorObject(value: any, keyword: string, name: string) {
    let dict: any = {};
    dict[`--${name}-${keyword}`] = new TinyColor(
      value.toHexString()
    ).toHexString();
    dict[`--text-${name}-${keyword}`] = new TinyColor(
      value.toHexString()
    ).isLight()
      ? '#000000'
      : '#FFFFFF';
    return dict;
  }
}
