

export const colors = {
  background: {
    DEFAULT: "#ffffff",
    80: "#F8FAFCCC", // 80%
    60: "#F8FAFC99", // 60%
    40: "#F8FAFC66", // 40%
    20: "#F8FAFC33", // 20%
  },
  foreground: {
    DEFAULT: "#1E293B",
    80: "#1E293BCC",
    60: "#1E293B99",
    40: "#1E293B66",
    20: "#1E293B33",
  },
  primary: {
    DEFAULT: "#2563EB",
    80: "#2563EBCC",
    60: "#2563EB99",
    40: "#2563EB66",
    20: "#2563EB33",
  },
  primary_foreground: {
    DEFAULT: "#e7eff8",
    80: "#e7eff8cc",
    60: "#e7eff899",
    40: "#e7eff866",
    20: "#e7eff833",
  },
  secondary: {
    DEFAULT: "#0D9488",
    80: "#0D9488CC",
    60: "#0D948899",
    40: "#0D948866",
    20: "#0D948833",
  },
  muted: {
    DEFAULT: "#f5f5f5",
    80: "#f5f5f5cc",
    60: "#f5f5f599",
    40: "#f5f5f566",
    20: "#f5f5f533",
  },
  muted_foreground: {
    DEFAULT: "#737373",
    80: "#737373cc",
    60: "#73737399",
    40: "#73737366",
    20: "#73737333",
  },
  accent: {
    DEFAULT: "#f5f5f5",
    80: "#f5f5f5cc",
    60: "#f5f5f599",
    40: "#f5f5f566",
    20: "#f5f5f533",
  },
  accent_foreground: {
    DEFAULT: "#171717",
    80: "#171717cc",
    60: "#17171799",
    40: "#17171766",
    20: "#17171733",
  },
  destructive: {
    DEFAULT: "#DC2626",
    80: "#DC2626CC",
    60: "#DC262699",
    40: "#DC262666",
    20: "#DC262633",
  },
  border: {
    DEFAULT: "#bdc2c9",
    80: "#E2E8F0CC",
    60: "#E2E8F099",
    40: "#E2E8F066",
    20: "#E2E8F033",
  },
  green_accent: {
    DEFAULT: "#16A34A",
    80: "#16A34ACC",
    60: "#16A34A99",
    40: "#16A34A66",
    20: "#16A34A33",
  },
  pending_accent: {
    DEFAULT: "#D97706",
    80: "#D97706CC",
    60: "#D9770699",
    40: "#D9770666",
    20: "#D9770633",
  },
  unavailable_accent: {
    DEFAULT: "#94A3B8",
    80: "#94A3B8CC",
    60: "#94A3B899",
    40: "#94A3B866",
    20: "#94A3B833",
  },
  
  
}

export const constants = {
  radius: 32,
}

export const fonts = { 
    sans: { 
        regular: 'DMSans_400Regular', 
        medium: 'DMSans_500Medium', 
        bold: 'DMSans_700Bold', 
    }, 
    heading: { 
        regular: 'Manrope_400Regular', 
        semiBold: 'Manrope_600SemiBold', 
        bold: 'Manrope_700Bold', 
        extraBold: 'Manrope_800ExtraBold', 
    }, 
} as const;


export const typography = {
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.foreground["DEFAULT"]
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.muted_foreground["DEFAULT"]
  },

  body: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.foreground["DEFAULT"]
  },

  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.muted_foreground["DEFAULT"]
  },

} as const;


export const assets = {
  logo: require("@/assets/nextserv/main-splash-screen-icon.svg"),
  map: require("@/assets/nextserv/gray-map.png"),
  mapBackground: require("@/assets/nextserv/map-background.svg")
} as const;