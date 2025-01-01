import { Component, Inject, Renderer2 } from '@angular/core';
import { BACKGROUND_COLOR, ERROR_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SUCCESS_COLOR, THEMING_TAGNAME, WARN_COLOR } from './theming.constant';
import { DOCUMENT } from '@angular/common';
import { ThemingUtil } from '@lib/utils/theming';

@Component({
  selector: 'app-theming',
  templateUrl: './theming.component.html',
  styleUrls: ['./theming.component.scss']
})
export class ThemingComponent {
  colors: any = {};
  // Custom colors
  defaultColor: any = {
    '--primary-100': '#C1DFFF',
    '--primary-bg-color': '#EDF6FF',
    '--secondary-darker-bg-color': '#FFEFD0',
    '--background-color': '#D1D1D1',
    '--dashboard-left-navigation-bar-bg-color': '#F9FBFC',
    '--secondary-bg-color': '#FCF8F0',
    '--success-bg-color': '#F0FCF9',
    '--warn-bg-color': '#FFFFED',
    '--error-bg-color': '#FFE1DD',
    '--course-menu-item-bg-color': '#FFEFD0',
  };

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Generate range of custom color
    this.colors = {
      ...ThemingUtil.getThemeValue(PRIMARY_COLOR, 'primary'),
      ...ThemingUtil.getThemeValue(SECONDARY_COLOR, 'secondary'),
      ...ThemingUtil.getThemeValue(BACKGROUND_COLOR, 'background'),
      ...ThemingUtil.getThemeValue(SUCCESS_COLOR, 'success'),
      ...ThemingUtil.getThemeValue(WARN_COLOR, 'warn'),
      ...ThemingUtil.getThemeValue(ERROR_COLOR, 'error'),
      ...this.defaultColor,
    };
  }
  ngOnInit(): void {
    // Mount color to DOM
    let colorContent: Array<String> = [];
    Object.keys(this.colors).forEach(item => {
      colorContent.push(`${item}:${this.colors[item]};`);
    });
    if (this.document.querySelector(`#${THEMING_TAGNAME}`)) {
      this.document.querySelector(`#${THEMING_TAGNAME}`)?.remove();
    }
    const style = this.renderer.createElement('style');
    const text = this.renderer.createText(`:root {${colorContent.join('\n')}}`);
    this.renderer.appendChild(style, text);
    style.id = THEMING_TAGNAME;
    this.renderer.appendChild(this.document.head, style);
  }
}
