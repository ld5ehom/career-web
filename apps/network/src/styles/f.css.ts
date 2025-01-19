const prefix = "network--";

/**
 * TailwindCSS
 * Applies a prefix to an array of class names and concatenates them into a single string.
 * 클래스 이름 배열에 접두사를 추가하고 이를 하나의 문자열로 연결합니다.
 *
 * @param {string[]} classNames - Array of class names to be prefixed (접두사가 추가될 클래스 이름 배열)
 * @returns {string} - A single string of prefixed class names joined with spaces
 *                     (공백으로 연결된 접두사가 추가된 클래스 이름 문자열)
 */
export const style = (classNames: string[] = []): string => {
    if (!Array.isArray(classNames)) {
        console.error("Invalid input: classNames must be an array");
        return "";
    }
    return classNames
        .filter((className) => className.trim() !== "") // 빈 문자열 제거
        .map((className) => `${prefix}${className}`) // 접두사 추가
        .join(" "); // 공백으로 연결
};
