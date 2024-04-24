
import pt from "./assets/pt.png"
import en from './assets/en.png'
import de from './assets/de.png'
import { useTranslation } from "react-i18next"


const languageOptions = [
  {
    name: "Port",
    value: "pt",
    flag: pt

  },


  {
    name: "English",
    value: "en",
    flag: en

  },

  {
    name: "German",
    value: "de",
    flag: de

  },

]

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <div >
      <span>{t("selectYourLanguage")}</span>
      {languageOptions.map((languageOption) => (
        <button
        key={languageOption.value}
        onClick={() => {
          i18n.changeLanguage(languageOption.value)
        }}>
          <img src={languageOption.flag} alt={languageOption.name} />
          <span>{languageOption.name}</span>
        </button>
      ))}

    </div>
  )
}
