import { useTranslation } from 'react-i18next';

interface ExperienceEntryProps {
  roleKey: string;
}

export default function ExperienceEntry({ roleKey }: ExperienceEntryProps) {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        {t(`sections.experience.${roleKey}.title`)}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {t(`sections.experience.${roleKey}.company`)} | {t(`sections.experience.${roleKey}.period`)}
      </p>
      <ul className="list-disc ml-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
        {(t(`sections.experience.${roleKey}.achievements`, { returnObjects: true }) as string[] ).map((achievement: string, index: number) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}