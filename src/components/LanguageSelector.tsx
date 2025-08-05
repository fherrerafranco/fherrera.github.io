import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('language', event.target.value);
  };

  return (
    <div className="relative">
      <select
        onChange={changeLanguage}
        value={i18n.language}
        className="pl-8 pr-2 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-200 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-all duration-200 appearance-none cursor-pointer shadow-md backdrop-blur-sm"
        aria-label={t('language.select')}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
      <svg 
        className="w-5 h-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-secondary-600 dark:text-secondary-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    </div>
  );
}