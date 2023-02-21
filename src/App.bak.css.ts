import { style } from '@vanilla-extract/css';
import { primitives } from '@siddharthkp/vanilla-extract-prototype';

export const container = style({
  height: '100vh',
  backgroundColor: primitives.colors.canvas.default,
  color: primitives.colors.fg.default
});
