import { useTheme } from "next-themes";
export default function DarkModeToggleButton(){
    const { theme, setTheme } = useTheme();

    //theme : 현재 값 가져오기 getter
    //settheme : 현재 값 바꾸기 setter

    return(
        <>
            <button 
                className="
                    inline-flex 
                    items-center
                    bg-gray-100 border-0 py-1 px-3 
                    focus:outline-none 
                    hover:bg-gray-200 
                    hover:text-red-500 
                    rounded text-base mt-4 md:mt-0
                    dark:hover:text-yellow-500
                    "
                type="button"
                onClick={()=>setTheme(theme === 'dark'? 'light':'dark')}
                
            >
                {/* 라이트 모드 아이콘 */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5"
                >
                  <path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
                {/* 다크 모드 아이콘 */}
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0"
                >
                   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            </button>
        </>
    );
};