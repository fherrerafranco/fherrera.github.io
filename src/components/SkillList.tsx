interface SkillListProps {
  skills: string[];
}

export default function SkillList({ skills }: SkillListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}