/**
 * Functions that create icons
 */

type IconProps = {
    fill?: string
}
export const defaultIconActiveFill = '#555'
export const defaultIconInactiveFill = '#ccc'

// replay icon: https://fonts.google.com/icons?icon.platform=web
export const ReplayIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path
            fill={fill}
            d="M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"
        />
    </svg>
)

// chevron right icon: https://fonts.google.com/icons?icon.platform=web
export const NextIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z" />
    </svg>
)

// chevron left icon: https://fonts.google.com/icons?icon.platform=web
export const PreviousIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
    </svg>
)

// first page icon: https://fonts.google.com/icons?icon.platform=web
export const FirstPageIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="M6 18V6h2v12Zm11 0-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
    </svg>
)

// last page icon: https://fonts.google.com/icons?icon.platform=web
export const LastPageIcon = ({ fill = defaultIconActiveFill }: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path fill={fill} d="m7 18-1.4-1.4 4.6-4.6-4.6-4.6L7 6l6 6Zm9 0V6h2v12Z" />
    </svg>
)
