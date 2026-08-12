import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Indonesian section locales
import idNav from "./locales/id/nav.json";
import idHero from "./locales/id/hero.json";
import idAbout from "./locales/id/about.json";
import idEducation from "./locales/id/education.json";
import idSkills from "./locales/id/skills.json";
import idPortfolio from "./locales/id/portfolio.json";
import idContact from "./locales/id/contact.json";
import idFooter from "./locales/id/footer.json";
import idWidget from "./locales/id/widget.json";

// English section locales
import enNav from "./locales/en/nav.json";
import enHero from "./locales/en/hero.json";
import enAbout from "./locales/en/about.json";
import enEducation from "./locales/en/education.json";
import enSkills from "./locales/en/skills.json";
import enPortfolio from "./locales/en/portfolio.json";
import enContact from "./locales/en/contact.json";
import enFooter from "./locales/en/footer.json";
import enWidget from "./locales/en/widget.json";

const resources = {
  id: {
    nav: idNav,
    hero: idHero,
    about: idAbout,
    education: idEducation,
    skills: idSkills,
    portfolio: idPortfolio,
    contact: idContact,
    footer: idFooter,
    widget: idWidget,
  },
  en: {
    nav: enNav,
    hero: enHero,
    about: enAbout,
    education: enEducation,
    skills: enSkills,
    portfolio: enPortfolio,
    contact: enContact,
    footer: enFooter,
    widget: enWidget,
  },
};

// Default language: Always Indonesian ("id") unless explicitly saved in localStorage
const initialLanguage = localStorage.getItem("portfolio_lang") || "id";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLanguage,
    fallbackLng: "id",
    supportedLngs: ["id", "en"],
    ns: ["nav", "hero", "about", "education", "skills", "portfolio", "contact", "footer", "widget"],
    defaultNS: "nav",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio_lang",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
