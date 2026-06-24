tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "ink": {
                    "950": "#070707",
                    "900": "#111111",
                    "800": "#1c1c1c",
                    "700": "#2b2b2b"
                },
                "gold": {
                    "300": "#f0d98a",
                    "400": "#d9b95f",
                    "500": "#b89235",
                    "600": "#8d6e22"
                },
                "smoke": {
                    "50": "#f8f7f4",
                    "100": "#ece9e1",
                    "300": "#c9c4b6",
                    "500": "#777064"
                },
                "tertiary-fixed": "#f0d98a",
                "on-secondary-fixed": "#111111",
                "primary": "#111111",
                "primary-container": "#070707",
                "on-surface": "#111111",
                "primary-fixed": "#f0d98a",
                "tertiary-container": "#b89235",
                "surface-dim": "#ece9e1",
                "error": "#8d6e22",
                "surface-variant": "#ece9e1",
                "surface-container-highest": "#c9c4b6",
                "tertiary-fixed-dim": "#d9b95f",
                "on-secondary-fixed-variant": "#2b2b2b",
                "primary-fixed-dim": "#d9b95f",
                "error-container": "#f0d98a",
                "tertiary": "#d9b95f",
                "on-primary-container": "#f0d98a",
                "surface-container-high": "#ece9e1",
                "secondary-fixed-dim": "#c9c4b6",
                "on-primary": "#ffffff",
                "secondary": "#ece9e1",
                "on-tertiary-fixed-variant": "#8d6e22",
                "background": "#f8f7f4",
                "on-secondary": "#ffffff",
                "on-error": "#ffffff",
                "on-primary-fixed": "#111111",
                "on-tertiary-fixed": "#111111",
                "outline-variant": "#c9c4b6",
                "on-primary-fixed-variant": "#8d6e22",
                "surface-container": "#ece9e1",
                "on-background": "#111111",
                "surface-container-low": "#f8f7f4",
                "on-tertiary": "#111111",
                "surface-tint": "#d9b95f",
                "on-tertiary-container": "#111111",
                "on-error-container": "#111111",
                "surface": "#f8f7f4",
                "surface-bright": "#ffffff",
                "inverse-on-surface": "#f0d98a",
                "outline": "#c9c4b6",
                "on-surface-variant": "#777064",
                "secondary-fixed": "#ece9e1",
                "inverse-primary": "#f0d98a",
                "secondary-container": "#c9c4b6",
                "inverse-surface": "#111111",
                "surface-container-lowest": "#ffffff",
                "on-secondary-container": "#2b2b2b"
            },
            "borderRadius": {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            "spacing": {
                "container-max": "1200px",
                "gutter": "24px",
                "section-padding": "80px",
                "margin-mobile": "20px",
                "unit": "8px"
            },
            "fontFamily": {
                "label-md": ["Manrope"],
                "display-lg-mobile": ["Playfair Display"],
                "display-lg": ["Playfair Display"],
                "headline-md": ["Playfair Display"],
                "body-lg": ["Manrope"],
                "headline-sm": ["Playfair Display"],
                "body-md": ["Manrope"]
            },
            "fontSize": {
                "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "display-lg-mobile": ["36px", { "lineHeight": "1.2", "fontWeight": "700" }],
                "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "0", "fontWeight": "700" }],
                "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
            }
        }
    }
};
