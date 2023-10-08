import { FC, PropsWithChildren } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { selectLanguage } from "./features/language/languageSlice";
import { translations } from "./translations";

const CustomIntlProvider: FC<PropsWithChildren> = ({ children }) => {
  const locale = useSelector(selectLanguage);
  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      {children}
    </IntlProvider>
  );
};

export default CustomIntlProvider;
