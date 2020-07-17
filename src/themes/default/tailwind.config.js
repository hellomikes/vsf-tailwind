/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/themes/default/pages/*.vue',
      './src/themes/default/templates/*.html',
      './src/themes/default/components/*.vue',
      './src/themes/default/components/**/*.vue',
      './src/themes/default/components/**/**/*.vue',
      './src/themes/default/css/*.scss',
      './src/themes/default/css/tailwind.css',
      './src/themes/default/css/**/*.scss',
      './src/themes/default/layouts/*.vue',
      './src/themes/default/mixins/*.js',
    ],
  },
  
  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */
  prefix: '',
  important: false,
  separator: ':',

  theme: {
    /*
    |-----------------------------------------------------------------------------
    | Colors                                  https://tailwindcss.com/docs/colors
    |-----------------------------------------------------------------------------
    |
    | The color palette defined above is also assigned to the "colors" key of
    | your Tailwind config. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: theme('colors.red') }
    |
    */

    colors: {
      transparent: 'transparent',
      /**
       * Brand colours, and any variations
       */
      brand: {
        dark: '#373A3E',
        medium: '#0E315A',
        light: '#a3ac84',
        'ultra-light': '#F1F3F5'
      },
      /**
       * Colors for body text
       */
      text: {
        primary: '#373A3E',
        secondary: '#72746E'
      },
      /**
       * Any alert message colours
       */
      alert: {
        error: '#cf2500',
        success: '#768F1C'
      },
      /**
       * Any validation message colours
       */
      validation: {
        error: '#FCF4F3',
        success: '#F3F3F3'
      },
      /**
       * Any colours for specific categories
       */
      category: {
        alpha: '#7B5901',
        beta: '#768F1C',
        gamma: '#B86A22',
        delta: '#006054',
        epsilon: '#0080A8',
        zeta: '#771325'
      },
      /**
       * Treatments
       */
      treatment: {
        brown: '#907c75',
        'brown-dark': '#7a6b58',
        'brown-light': '#be9f71',
        orange: '#c88a4d',
        'summer-tan': '#c48343'
      },
      breadcrumbs: {
        link: '#373A3E',
        active: '#627C9B'
      },
      /**
       * Any grey and variations
       */
      grey: {
        dark: '#999999',
        medium: '#E7E7E7',
        'medium-tint': '#BCBCBC',
        light: '#F3F3F3',
        lighter: '#E3E3E3',
        lightest: '#EAEAEA'
      },
      /**
       * Anything for ui.  Project-specific
       */
      ui: {
        star: '#C0A40E',
        'star-tint': '#7a6809', // TODO: This should really be nested
        facebook: '#3B5998',
        twitter: '#1DA1F2',
        usp: '#EEF0E7'
      },
      /**
       * Things that can be colours
       */
      white: 'rgba(255,255,255,1)',
      'white-hex': '#FFFFFF',
      black: '#000000',
      'white-transparent': 'rgba(255,255,255,0)' // for iOS gradients
    },

    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By default Tailwind takes a
    | "mobile first" approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    | CSS property: font-family
    |
    */

    fontFamily: {
      body: [
        'Lato',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ],
      header: [
        'Lato',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif'
      ]
    },

    /*
    |-----------------------------------------------------------------------------
    | Text sizes                         https://tailwindcss.com/docs/text-sizing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text sizes. Name these in whatever way
    | makes the most sense to you. We use size names by default, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By default Tailwind uses the "rem" unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    | CSS property: font-size
    |
    */

    fontSize: {
      // mobile first plz - 1rem = 16px

      h1: '1.6875rem', // 27px
      h2: '1.625rem', // 26px
      h3: '1.4375rem', // 23px
      h4: '1.125rem', // 18px
      h5: '0.8125rem', // 13px
      base: '0.9375rem', // 15px
      small: '0.8rem', // 12px
      tiny: '0.5rem', // 8px
      button: '0.75rem', // 12px
      'button-sm': '0.6875rem', // 11px
      xs: '0.625rem', // 10px
      // desktop sizes
      'lg-h1': '2.75rem', // 44px
      'lg-h2': '2.3125rem', // 37px
      'lg-h3': '1.875rem', // 30px
      'lg-h4': '1.5rem', // 24px
      'lg-h5': '1.25rem', // 20px
      'lg-base': '1.125rem', // 18px
      'lg-small': '0.9375rem', // 15px
      'lg-button': '0.8125rem', // 13px
      sm: '0.8125rem', // 13px
      h6: '0.75rem' // 12px
    },

    /*
    |-----------------------------------------------------------------------------
    | Font weights                       https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    | CSS property: font-weight
    |
    */

    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900
    },

    /*
    |-----------------------------------------------------------------------------
    | lineHeight (line height)              https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, lineHeights.
    |
    | Class name: .leading-{size}
    | CSS property: line-height
    |
    */

    lineHeight: {
      none: 1,
      h1: '100%',
      h2: '100%',
      h3: '100%',
      h4: '26px',
      h5: '100%',
      base: '26px',
      small: '18px',
      large: '114%',
      '20': '20px',
      '13': '13px',
      // desktop sizes
      'lg-h1': '150%',
      'lg-h2': '100%',
      'lg-h3': '100%',
      'lg-h4': '100%',
      'lg-h5': '100%',
      'lg-base': '100%',
      'lg-small': '100%',
      'desktop-small': '165%',

      // vuetique settings - to remove
      tight: 1.25,
      sm: '1.125rem',
      '4': '1rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    | CSS property: letter-spacing
    |
    */

    letterSpacing: {
      normal: '0',
      sm: '0.125rem', // 2px
      md: '0.1em'
    },

    /*
    |-----------------------------------------------------------------------------
    | Text colors                         https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    | CSS property: color
    |
    */

    textColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background colors             https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By default these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    | CSS property: background-color
    |
    */

    backgroundColor: theme => ({
      default: 'white',
      ...theme('colors')
    }),

    /*
    |-----------------------------------------------------------------------------
    | Background sizes               https://tailwindcss.com/docs/background-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background sizes. We provide some common
    | values that are useful in most projects, but feel free to add other sizes
    | that are specific to your project here as well.
    |
    | Class name: .bg-{size}
    | CSS property: background-size
    |
    */

    // backgroundSize: {
    //   auto: 'auto',
    //   cover: 'cover',
    //   contain: 'contain'
    // },

    /*
    |-----------------------------------------------------------------------------
    | Border widths                     https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special "default" value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    | CSS property: border-width
    |
    */

    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '8': '8px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Border colors                     https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border colors. By default these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Take note that border colors require a special "default" value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    | CSS property: border-color
    |
    */

    borderColor: theme => ({
      default: theme('colors.grey-light'),
      ...theme('colors')
    }),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `default` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    | CSS property: border-radius
    |
    */

    borderRadius: {
      none: '0',
      sm: '3px',
      full: '9999px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your width utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale, a percentage
    | based fraction scale, plus some other common use-cases. You
    | can, of course, modify these values as needed.
    |
    |
    | It's also worth mentioning that Tailwind automatically escapes
    | invalid CSS class name characters, which allows you to have
    | awesome classes like .w-2/3.
    |
    | Class name: .w-{size}
    | CSS property: width
    |
    */

    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      results: '428px',
      card: '200px',
      'card-sm': '147px',
      full: '100%',
      screen: '100vw',
      button: '44px',
      'button-lg': '54px',
      'logo-sm': '116px',
      'logo-lg': '289px'
    }),

    spacing: {
      px: '1px',
      'px-10': '10px',
      'px-13': '13px',
      '0': '0',
      '0-5': '0.1875rem', // 3px
      '1': '0.25rem', // 4px
      '2': '0.5rem', // 8px
      '3': '0.75rem', // 12px
      '4': '1rem', // 16px
      '5': '1.25rem', // 20px
      '6': '1.5rem', // 24px
      '8': '2rem', // 28px
      '10': '2.5rem', // 32px
      '12': '3rem', // 48px
      '16': '4rem', // 64px
      '20': '5rem', // 80px
      '24': '6rem', // 96px
      '32': '8rem', // 128px
      '40': '10rem', // 160px
      '48': '12rem', // 192px
      '56': '14rem', // 224px
      '64': '16rem', // 256px
      '100': '30rem' // 480px
    },

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    | CSS property: height
    |
    */

    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      half: '50%',
      // third: '33%',
      screen: '100vh',
      button: '44px',
      'button-lg': '54px',
      'logo-sm': '14px',
      'logo-lg': '34px'
    }),

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    | CSS property: min-width
    |
    */

    minWidth: {
      '0': '0',
      '75': '75px',
      full: '100%',
      auto: 'auto'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by default. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    | CSS property: min-height
    |
    */

    minHeight: {
      // '0': '0',
      // '75': '75px',
      // full: '100%',
      // screen: '100vh',
      auto: 'auto'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By default
    | we provide a sensible rem based scale and a "full width" size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    | CSS property: max-width
    |
    */

    maxWidth: {
      // xs: '20rem',
      // sm: '30rem',
      // md: '40rem',
      // lg: '50rem',
      full: '100%',
      screen: '100vw'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by default. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    | CSS property: max-height
    |
    */

    maxHeight: {
      '0': '0',
      // '75': '75px',
      '100': '100px',
      full: '100%',
      screen: '100vh'
    },

    /* 
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    | CSS property: padding
    |
    */

    padding: {
      px: '1px',
      '0': '0',
      '1': '0.375rem', // 6px
      '2': '0.75rem', // 12px
      '3': '1rem', // 16px
      '4': '1.125rem', // 18px
      '5': '1.5rem', // 24px
      '6': '1.875rem', // 30px
      '7': '2rem', // 32px
      '8': '2.25rem', // 36px
      '9': '2.5rem', // 40px
      '10': '2.625rem', // 42px
      '12': '3rem', // 48px
      '16': '4rem', // 64px
      '20': '5rem', // 80px
      '24': '6rem', // 96px
      '32': '8rem', // 128px
      xs: '0.3125rem', // 5px
      sm: '0.625rem', // 10px
      md: '0.9375rem', // 15px
      '2xl': '1.875rem', // 30px
      card: '0.875rem' // 14px
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By default we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like "1px". You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    | CSS property: margin
    |
    */

    margin: {
      auto: 'auto',
      px: '1px',
      '3px': '3px',
      '0': '0',
      '1': '0.375rem', // 6px
      '2': '0.75rem', // 12px
      '3': '1rem', // 16px
      '4': '1.125rem', // 18px
      '5': '1.5rem', // 24px
      '6': '1.875rem', // 30px
      '7': '2rem', // 32px
      '8': '2.25rem', // 36px
      '9': '2.5rem', // 40px
      '10': '2.625rem', // 42px
      '12': '3rem', // 48px
      '13': '3.125rem', // 50px
      '14': '3.5rem', // 56px
      '16': '4rem', // 64px
      '20': '5rem', // 80px
      '24': '6rem', // 96px
      '32': '8rem', // 128px
      xs: '0.3125rem', // 5px
      sm: '0.625rem', // 10px
      md: '0.9375rem', // 15px
      card: '0.875rem', // 14px
      'card-dbl': '1.75rem', // 14px
      '25p':'25%',
      // Negative Margin
      '-px': '-1px',
      '-0': '-0',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-16': '-4rem',
      '-20': '-5rem',
      '-24': '-6rem',
      '-32': '-8rem',
      '-xs': '-0.3125rem', // 5px
      '-sm': '-0.625rem', // 10px
      '-md': '-0.9375rem', // 15px
      '-card': '-0.875rem' // 14px
    },

    /*
    |-----------------------------------------------------------------------------
    | Shadows                                https://tailwindcss.com/docs/shadows
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the defaults we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `default` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    | CSS property: box-shadow
    |
    */

    boxShadow: {
      default: '0 2px 14px 0 rgba(0,0,0,0.18)',
      md: '0 2px 9px 0 rgba(0,0,0,0.13)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'inner-md': 'inset 0 0 7px rgba(0,0,0,0.08)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      'inner-lg': 'inset 0 9px 9px rgba(0,0,0,0.13)',
      none: 'none'
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    | CSS property: z-index
    |
    */

    zIndex: {
      auto: 'auto',
      // '0': 0,
      '1': 1,
      '2': 2,
      '10': 10,
      '20': 20,
      // '30': 30,
      // '40': 40,
      '50': 50,
      overlay: 4,
      modal: 10,
      // header: 100,
      // notification: 1000,
      loader: 1001
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By default we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    | CSS property: opacity
    |
    */

    opacity: {
      '0': '0',
      // '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1'
    },

    /*
    |-----------------------------------------------------------------------------
    | SVG fill                                   https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By default we just provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    | CSS property: fill
    |
    */

    fill: theme => ({
      current: 'currentColor',
      ...theme('colors')
    }),

    /*
    |-----------------------------------------------------------------------------
    | SVG stroke                                 https://tailwindcss.com/docs/svg
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By default we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    | CSS property: stroke
    |
    */

    stroke: theme => ({
      current: 'currentColor',
      ...theme('colors')
    }),

    container: {
      center: true,
      padding: '0.625rem'
    },

    placeholderColor: theme => ({
      ...theme('colors')
    }),
    backgroundPosition: {
      'right-1': 'calc(100% - 0.5rem) center'
    },

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
      help: 'help'
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '-100': '-100vw',
      '-20': '-20%',
      '-50': '-50%',
      '-80': '-80%'
    },

    // transitions - https://github.com/benface/tailwindcss-transitions
    // transitionProperty: {
    //   // defaults to these values
    //   none: 'none',
    //   all: 'all',
    //   color: 'color',
    //   bg: 'background-color',
    //   border: 'border-color',
    //   colors: ['color', 'background-color', 'border-color'],
    //   opacity: 'opacity',
    //   transform: 'transform'
    // },
    // transitionDuration: {
    //   // defaults to these values
    //   default: '250ms',
    //   '0': '0ms',
    //   '100': '100ms',
    //   '250': '250ms',
    //   '500': '500ms',
    //   '750': '750ms',
    //   '1000': '1000ms'
    // },
    // transitionTimingFunction: {
    //   // defaults to these values
    //   default: 'ease',
    //   linear: 'linear',
    //   ease: 'ease',
    //   'ease-in': 'ease-in',
    //   'ease-out': 'ease-out',
    //   'ease-in-out': 'ease-in-out'
    // },
    // transitionDelay: {
    //   // defaults to these values
    //   default: '0ms',
    //   '0': '0ms',
    //   '100': '100ms',
    //   '250': '250ms',
    //   '500': '500ms',
    //   '750': '750ms',
    //   '1000': '1000ms'
    // },
    // willChange: {
    //   // defaults to these values
    //   auto: 'auto',
    //   scroll: 'scroll-position',
    //   contents: 'contents',
    //   opacity: 'opacity',
    //   transform: 'transform'
    // }
  },

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  variants: {
    appearance: false,
    backgroundAttachment: false,
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'hover'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['hover'],
    outline: ['focus'],
    overflow: ['responsive'],
    padding: ['responsive', 'hover'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: false,
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['hover'],
    stroke: ['hover'],
    placeholderColor: ['responsive', 'focus', 'hover', 'active'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive', 'hover', 'focus'],
    fontSmoothing: [],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive', 'hover', 'focus'],
    letterSpacing: ['responsive'],
    userSelect: [],
    verticalAlign: [],
    visibility: ['responsive'],
    whitespace: [],
    wordBreak: [],
    width: ['responsive'],
    zIndex: ['responsive'],
    // transitionProperty: ['responsive'],
    // transitionDuration: ['responsive'],
    // transitionTimingFunction: ['responsive'],
    // transitionDelay: ['responsive'],
    willChange: ['responsive']
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */
  experiments: {
    shadowLookup: true
  }
}
