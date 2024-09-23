import { semantic } from './semantic';

export const INTERACTION = {
  default: {
    normal: (background?: string) => `
      &:hover {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(38, 38, 38, 0.05), rgba(38, 38, 38, 0.05));
      }

      &:active {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(38, 38, 38, 0.08), rgba(38, 38, 38, 0.08));
      }

     &:focus-visible {
       outline: none;
       box-shadow: 0 0 0 2px ${semantic.light.interactive.solid.focused} inset;
     }
    `,
    subtle: (background?: string) => `
      &:hover {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(59, 59, 59, 0.05), rgba(59, 59, 59, 0.05));
      }

      &:active {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(59, 59, 59, 0.08), rgba(59, 59, 59, 0.08));        
      }

      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px ${semantic.light.interactive.solid.focused} inset;
      }
    `,
  },
  accent: {
    normal: (background?: string) => `
      &:hover {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(0, 137, 90, 0.05), rgba(0, 137, 90, 0.05));
      }

      &:active {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(0, 137, 90, 0.08), rgba(0, 137, 90, 0.08));  
      }

      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px ${semantic.light.interactive.solid.focused} inset;
      }
    `,
    subtle: (background?: string) => `
      &:hover {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(0, 166, 110, 0.05), rgba(0, 166, 110, 0.05));
      }

      &:active {
        background: ${
          background || ''
        } linear-gradient(to right, rgba(0, 166, 110, 0.08), rgba(0, 166, 110, 0.08));
      }

      &:focus-visible {
        box-shadow: 0 0 0 2px ${semantic.light.interactive.solid.focused} inset;
      }
    `,
  },
};
