export type SkillType = {
  name: string;
  icon: string;
  bgColor?: string;
};

export type ExperienceType = {
  year: string;
  works: ExperienceWorkType[];
};

type ExperienceWorkType = {
  name: string;
  company: string;
  desc: string;
};
