import { useTranslation } from 'react-i18next';
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import SkillList from './components/SkillList';
import ThemeToggle from './components/ThemeToggle';
import LanguageSelector from './components/LanguageSelector';
import Experience from './components/Experience';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n/config';

function App() {
  const { t } = useTranslation();

  const technicalSkills = [
    'Node.js', 'JavaScript', 'TypeScript', 'Express.js', 'NestJS', 'Node-RED', 'React', 'MongoDB', 'ArangoDB',
    'PostgreSQL', 'Redis', 'RESTful APIs', 'Microservices', 
    'Git', 'GitHub', 'Version Control', 'Jest', 'Mocha', 'End-to-end Testing', 'Unit Testing',
    'Jira', 'Agile Methodologies', 'Problem Solving', 'Team Collaboration', 'Critical Thinking'
  ];

  const cloudPlatforms = [
    'AWS', 'AWS EC2', 'AWS Lambda', 'AWS S3', 'AWS CloudWatch', 'AWS SQS', 
    'Azure', 'Azure AKS', 'Azure Storage', 'Azure Log Insights', 'Azure Functions', 
    'GCP','GCP GKE', 'GCP Log Analytics',
  ];

  const cicdTools = [
    'Kubernetes', 'Docker', 'GitHub Actions', 'ArgoCD'
  ];

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-primary-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
        <div className="absolute top-2 right-2 flex items-center gap-2 z-[100]">
          <ThemeToggle />
          <LanguageSelector />
        </div>
        <div className="relative max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl rounded-xl p-8 transition-colors duration-200 border border-primary-100 dark:border-primary-800">
          <Header />
          <main>
            <Section title={t('sections.summary.title')}>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                {t('sections.summary.content').split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Section>

            <Section title={t('sections.skills.title')}>
              <SkillList skills={technicalSkills} />
            </Section>

            <Section title={t('sections.skills.cloud')}>
              <SkillList skills={cloudPlatforms} />
            </Section>

            <Section title={t('sections.skills.cicd')}>
              <SkillList skills={cicdTools} />
            </Section>

            <Section title={t('sections.experience.title')}>
              <Experience />
            </Section>

            <Section title={t('sections.education.title')}>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {t('sections.education.degree')}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t('sections.education.university')} | {t('sections.education.year')}
                </p>
                {<p className="text-gray-700 dark:text-gray-300 mt-1">
                  {t('sections.education.focus')}
                </p>}
              </div>
            </Section>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );

}
export default App;