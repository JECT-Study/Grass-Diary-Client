export type HexColor = `#${string}`;
export type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;

export const semantic = {
  light: {
    accent: {
      solid: {
        hero: '#00895A' as HexColor,
        normal: '#029764' as HexColor,
        alternative: '#00A66E' as HexColor,
      },
      transparent: {
        hero: 'rgba(0, 137, 90, 0.20)' as RGBAColor,
        normal: 'rgba(2, 151, 100, 0.14)' as RGBAColor,
        alternative: 'rgba(0, 166, 110, 0.08)' as RGBAColor,
      },
    },

    object: {
      solid: {
        hero: '#262626' as HexColor,
        normal: '#3B3B3B' as HexColor,
      },
      transparent: {
        neutral: 'rgba(59, 59, 59, 0.80)' as RGBAColor,
        alternative: 'rgba(71, 71, 71, 0.63)' as RGBAColor,
        assistive: 'rgba(94, 94, 94, 0.46)' as RGBAColor,
        disabled: 'rgba(119, 119, 119, 0.22)' as RGBAColor,
      },
    },

    bg: {
      solid: {
        normal: '#FFF' as HexColor,
        subtlest: '#FAFAFA' as HexColor,
        subtler: '#F1F1F1' as HexColor,
        subtle: '#E2E2E2' as HexColor,
      },
      transparent: {
        dimmed: 'rgba(17, 17, 17, 0.63)' as RGBAColor,
      },
    },

    border: {
      solid: {
        normal: '#B9B9B9' as HexColor,
        neutral: '#C6C6C6' as HexColor,
        alternative: '#D4D4D4' as HexColor,
        assistive: '#E2E2E2' as HexColor,
      },
      transparent: {
        normal: 'rgba(145, 145, 145, 0.63)' as RGBAColor,
        neutral: 'rgba(145, 145, 145, 0.52)' as RGBAColor,
        alternative: 'rgba(145, 145, 145, 0.36)' as RGBAColor,
        assistive: 'rgba(145, 145, 145, 0.20)' as RGBAColor,
      },
    },

    fill: {
      solid: {
        hero: '#303030' as HexColor,
      },
      transparent: {
        normal: 'rgba(158, 158, 158, 0.53)' as RGBAColor,
        neutral: 'rgba(158, 158, 158, 0.42)' as RGBAColor,
        alternative: 'rgba(158, 158, 158, 0.26)' as RGBAColor,
        assistive: 'rgba(158, 158, 158, 0.15)' as RGBAColor,
      },
    },

    feedback: {
      solid: {
        positive: '#398712' as HexColor,
        caution: '#D8A100' as HexColor,
        negative: '#D93526' as HexColor,
        notification: '#D24317' as HexColor,
      },
      transparent: {
        positive: 'rgba(57, 135, 18, 0.20)' as RGBAColor,
        caution: 'rgba(216, 161, 0, 0.20)' as RGBAColor,
        negative: 'rgba(217, 53, 38, 0.20)' as RGBAColor,
        notification: 'rgba(210, 67, 23, 0.20)' as RGBAColor,
      },
    },

    interactive: {
      solid: {
        disabled: '#F1F1F1' as HexColor,
        focused: '#8999F9' as HexColor,
      },
    },

    base: {
      solid: {
        white: '#FFF' as HexColor,
        lightgray: '#B9B9B9' as HexColor,
        darkgray: '#303030' as HexColor,
        black: '#000' as HexColor,
      },
    },

    theme: {
      solid: {
        red: '#D93526' as HexColor,
        amber: '#E8AE01' as HexColor,
        blue: '#2060DF' as HexColor,
        purple: '#AA40BF' as HexColor,
        lightpink: '#F99EAE' as HexColor,
        lightpurple: '#E2A3EB' as HexColor,
        lightblue: '#AEB5FB' as HexColor,
        ruby: '#F42C6F' as HexColor,
        diamond: '#029AE8' as HexColor,
      },
    },
    inverse: {
      solid: {
        accent: '#00A66E' as HexColor,
        negative: '#F17961' as HexColor,
        hero: '#ffffff' as HexColor,
        normal: '#E2E2E2' as HexColor,
        bg: '#2B2B2B' as HexColor,
      },
    },
  },

  dark: {
    accent: {
      solid: {
        hero: '#00A66E' as HexColor,
        normal: '#00B478' as HexColor,
        alternative: '#00C482' as HexColor,
      },

      transparent: {
        hero: 'rgba(0, 166, 110, 0.26)' as RGBAColor,
        normal: 'rgba(0, 180, 120, 0.20)' as RGBAColor,
        alternative: 'rgba(0, 196, 130, 0.14)' as RGBAColor,
      },
    },

    object: {
      solid: {
        hero: '#FFF' as HexColor,
        normal: '#E2E2E2' as HexColor,
      },
      transparent: {
        neutral: 'rgba(226, 226, 226, 0.82)' as RGBAColor,
        alternative: 'rgba(212, 212, 212, 0.67)' as RGBAColor,
        assistive: 'rgba(185, 185, 185, 0.48)' as RGBAColor,
        disabled: 'rgba(158, 158, 158, 0.24)' as RGBAColor,
      },
    },

    bg: {
      solid: {
        normal: '#2B2B2B' as HexColor,
        subtlest: '#262626' as HexColor,
        subtler: '#212121' as HexColor,
        subtle: '#181818' as HexColor,
      },
      transparent: {
        dimmed: 'rgba(17, 17, 17, 0.63)' as RGBAColor,
      },
    },

    border: {
      solid: {
        normal: '#525252' as HexColor,
        neutral: '#474747' as HexColor,
        alternative: '#3B3B3B' as HexColor,
        assistive: '#303030' as HexColor,
      },
      transparent: {
        normal: 'rgba(106, 106, 106, 0.63)' as RGBAColor,
        neutral: 'rgba(106, 106, 106, 0.52)' as RGBAColor,
        alternative: 'rgba(106, 106, 106, 0.36)' as RGBAColor,
        assistive: 'rgba(106, 106, 106, 0.20)' as RGBAColor,
      },
    },

    fill: {
      solid: {
        hero: '#F1F1F1' as HexColor,
      },
      transparent: {
        normal: 'rgba(158, 158, 158, 0.36)' as RGBAColor,
        neutral: 'rgba(158, 158, 158, 0.24)' as RGBAColor,
        alternative: 'rgba(158, 158, 158, 0.16)' as RGBAColor,
        assistive: 'rgba(158, 158, 158, 0.10)' as RGBAColor,
      },
    },

    feedback: {
      solid: {
        positive: '#4EB31B' as HexColor,
        caution: '#E8AE01' as HexColor,
        negative: '#F17961' as HexColor,
        notification: '#F56B3D' as HexColor,
      },
      transparent: {
        positive: 'rgba(78, 179, 27, 0.26)' as RGBAColor,
        caution: 'rgba(232, 174, 1, 0.26)' as RGBAColor,
        negative: 'rgba(241, 121, 97, 0.26)' as RGBAColor,
        notification: 'rgba(245, 107, 61, 0.26)' as RGBAColor,
      },
    },

    interactive: {
      solid: {
        disabled: '#3B3B3B' as HexColor,
        focused: '#9CA7FA' as HexColor,
      },
    },

    base: {
      solid: {
        white: '#FFF' as HexColor,
        lightgray: '#B9B9B9' as HexColor,
        darkgray: '#303030' as HexColor,
        black: '#000' as HexColor,
      },
    },

    theme: {
      solid: {
        red: '#F17961' as HexColor,
        amber: '#FFBF00' as HexColor,
        blue: '#3C71F7' as HexColor,
        purple: '#B645CD' as HexColor,
        lightpink: '#F9B4BE' as HexColor,
        lightpurple: '#E7B6EE' as HexColor,
        lightblue: '#BFC3FA' as HexColor,
        ruby: '#F6547E' as HexColor,
        diamond: '#01AAFF' as HexColor,
      },
    },
    inverse: {
      solid: {
        accent: '#00895A' as HexColor,
        negative: '#D93526' as HexColor,
        hero: '#262626' as HexColor,
        normal: '#3B3B3B' as HexColor,
        bg: '#ffffff' as HexColor,
      },
    },
  },
};
