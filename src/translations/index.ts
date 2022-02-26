import en from "./en";
import hr from "./hr";
import it from "./it";

const translations = {
  en,
  hr,
  it,
};

type Languages = keyof typeof translations;

export { translations };
export type { Languages };
