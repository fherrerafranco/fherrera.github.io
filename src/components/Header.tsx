import { useTranslation } from 'react-i18next';


import mailIcon from '../assets/icons/mail.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/github2.svg';
import locationIcon from '../assets/icons/location.svg';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">Fernando Herrera</h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-2">{t('header.role')}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
        <p>
          <a href="mailto:ferherrerafranco@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Email" className="inline w-5 h-5" /> {t('header.email')}
          </a>
        </p>
        <p> 
          <a href="https://www.linkedin.com/in/fernando-herrera-67a470236/" target="_blank" rel="noopener noreferrer"> 
            <img src={linkedinIcon} alt="Phone" className="inline w-5 h-5" /> fernando-herrera 
          </a>
        </p>
        <p>
          <a href="https://github.com/fherrerafranco" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Phone" className="inline w-5 h-5" /> fherrerafranco
          </a>
        </p>
        <p>
          <img src={locationIcon} alt="Location" className="inline w-5 h-5" /> {t('header.location')}
        </p>
      </div>
    </header>
  );
}