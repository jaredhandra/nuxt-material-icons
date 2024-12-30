import type * as IconString from "material-icons"

type IconVariants = ["", "outlined", "round", "sharp", "two-tone"]

export type MIconString = typeof IconString
export type MIconVariant = IconVariants[number]
