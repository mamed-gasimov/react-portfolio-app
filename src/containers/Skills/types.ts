export type SkillType = {
    name: string;
    icon: string;
    bgColor?: string;
}

export type ExperienceType = {
    year: number;
    works: ExperienceWorkType[];
}

type ExperienceWorkType = {
    name: string;
    company: string;
    desc: string;
}