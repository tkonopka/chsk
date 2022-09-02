/**
 * Functions that create icons
 */

type IconProps = {
    fill?: string
}
export const defaultIconActiveFill = '#777'
export const defaultIconInactiveFill = '#ccc'

// play icon: https://fonts.google.com/icons?icon.platform=web
export const PlayIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M8 19V5l11 7Zm2-7Zm0 3.35L15.25 12 10 8.65Z" />
    </svg>
)

// replay icon: https://fonts.google.com/icons?icon.platform=web
export const ReplayIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
            fill={fill}
            d="M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"
        />
    </svg>
)

// skip-next icon: https://fonts.google.com/icons?icon.platform=web
export const SkipNextIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M16.5 18V6h2v12Zm-11 0V6l9 6Zm2-6Zm0 2.25L10.9 12 7.5 9.75Z" />
    </svg>
)

// skip-previous icon: https://fonts.google.com/icons?icon.platform=web
export const SkipPreviousIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M5.5 18V6h2v12Zm13 0-9-6 9-6Zm-2-6Zm0 2.25v-4.5L13.1 12Z" />
    </svg>
)

// fast-rewind icon: https://fonts.google.com/icons?icon.platform=web
export const FastRewindIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
            fill={fill}
            d="m21.5 18-9-6 9-6Zm-10 0-9-6 9-6Zm-2-6Zm10 0Zm-10 2.25v-4.5L6.1 12Zm10 0v-4.5L16.1 12Z"
        />
    </svg>
)

// fast-forward icon: https://fonts.google.com/icons?icon.platform=web
export const FastForwardIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
            fill={fill}
            d="M2.5 18V6l9 6Zm10 0V6l9 6Zm-8-6Zm10 0Zm-10 2.25L7.9 12 4.5 9.75Zm10 0L17.9 12l-3.4-2.25Z"
        />
    </svg>
)
