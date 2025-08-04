interface SkillListProps {
  skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-lg text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}