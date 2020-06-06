export class ThemeValues {
    constructor(
        public primaryColor: string,
        public primaryColorDarker: string,
        public accentColor: string,
        public backgroundColor: string,
        public textColor: string,
        public brightBlue: string,
    ) { }
}


const ThemeLight = new ThemeValues(
    "#ADD8E6",
    "#7D9CA6",
    "#CF0048",
    "#FFFFFF",
    "#212121",
    "#1D60EA",
);

const ThemeDark = new ThemeValues(
    "#ADD8E6",
    "#7D9CA6",
    "#CF0048",
    "#272822",
    "#212121",
    "#1D60EA",
);


export const Theme: ThemeValues = ThemeLight;

// namespace ThemeNamespace {
//     export const Light = new ThemeValues(
        // "#ADD8E6",
        // "#7D9CA6",
        // "#CF0048",
        // "#212121",
        // "#1D60EA",
//     );
//     export const Dark = new ThemeValues(
//         "#ADD8E6",
//         "#7D9CA6",
//         "#CF0048",
//         "#212121",
//         "#1D60EA",
//     );
// }

// export enum Themes {
//     Light,
//     Dark
// }

// export const ThemeContext: React.Context<string> = React.createContext("ddd");

// const Theme = (props) => {
//     const [theme, setTheme] = useState("hello world");
//     return (
//         <div>
//             {/* 
//             //@ts-ignore */}
//             <ThemeContext.Provider value={[theme, setTheme]}>
//                 {props.children}
//             </ThemeContext.Provider>
//         </div>
//     );
// }

// export default Theme;

