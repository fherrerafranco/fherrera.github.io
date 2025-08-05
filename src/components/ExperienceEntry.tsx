import { useTranslation } from 'react-i18next';

interface ExperienceEntryProps {
  roleKey: string;
}

export default function ExperienceEntry({ roleKey }: ExperienceEntryProps) {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-primary-700 dark:text-primary-300">
        {t(`sections.experience.${roleKey}.title`)}
      </h3>
      <p className="text-secondary-600 dark:text-secondary-400 font-medium mt-1">
        {t(`sections.experience.${roleKey}.company`)} | {t(`sections.experience.${roleKey}.period`)}
      </p>
      <ul className="list-none ml-0 mt-4 text-gray-700 dark:text-gray-300 space-y-2">
        {(t(`sections.experience.${roleKey}.achievements`, { returnObjects: true }) as string[]).map((achievement: string, index: number) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-500 mr-2 pt-1">•</span>
            <span className="text-justify">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}