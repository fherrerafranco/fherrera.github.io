import { useTranslation } from 'react-i18next';
import Section from './Section';
import ExperienceEntry from './ExperienceEntry';

export default function Experience() {
  const { t } = useTranslation();
  const roles = ['role1'];

  return (
    <Section title={t('sections.experience.title')}>
      <div className="space-y-6">
        {roles.map((role) => (
          <ExperienceEntry key={role} roleKey={role} />
        ))}
      </div>
    </Section>
  );
}