## Element Size

Given a window size, the width of an element in viewport width "vw" units, and the height of an element in viewport height "vh" units, determine the size of the element in pixels.

The given window size and returned element size are strings in the format "width x height", "1200 x 800" for example.

"vw" units are the percent of window width. "50vw" for example, is 50% of the width of the window.

"vh" units are the percent of window height. "50vh" for example, is 50% of the height of the window.

## HSL Validator

Given a string, determine whether it is a valid CSS hsl() color value.

A valid HSL value must be in the format "hsl(h, s%, l%)", where:

- h (hue) must be a number between 0 and 360 (inclusive).
- s (saturation) must be a percentage between 0% and 100%.
- l (lightness) must be a percentage between 0% and 100%.

Spaces are only allowed:

- After the opening parenthesis
- Before and/or after the commas
- Before and/or after closing parenthesis

Optionally, the value can end with a semi-colon (";").

For example, "hsl(240, 50%, 50%)" is a valid HSL value.

## Array Sum

Given an array of numbers, return the sum of all the numbers.
