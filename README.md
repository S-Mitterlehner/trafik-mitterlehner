# Website for Trafik Mitterlehner

## TODOs
- Cookie-warn -> remove mat-controls
- Contact form -> without api
- Rework Colors
- Semantic HTML
- SASS-Refactoring / Cleanup
- Accessibility (What exactly?)
    - low-movements
    - themes
- Performance


### Rework Colors
Remove color-util `@include color('prop', 'color')`.
Doesn't provide any benefit! 

Maybe there is a way to use sass-variables to generate sass-variables -> but this would prevent intellisense (maybe)