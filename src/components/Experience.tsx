import { useTranslation } from 'react-i18next';
import ExperienceEntry from './ExperienceEntry';

export default function Experience() {
  useTranslation();
  const roles = ['role1'];

  return (
    <div className="space-y-6">
      {roles.map((role) => (
        <ExperienceEntry key={role} roleKey={role} />
      ))}
    </div>
  );
}