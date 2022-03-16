import { FC, useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrappers';
import { urlFor, client } from '../../services/client';
import { ExperienceType, SkillType } from './types';
import './Skills.scss';

const Skills: FC = () => {
    const [experiences, setExperiences] = useState<ExperienceType[]>([]);
    const [skills, setSkills] = useState<SkillType[]>([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query)
            .then((data) => {
                setExperiences(data as ExperienceType[]);
            })
            .catch(e => console.log('Error in Experiences container', e));

        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data as SkillType[]);
            })
            .catch(e => console.log('Error in Skills container', e));
    }, []);

    const renderSkills = (
        <motion.div className='app__skills-list'>
            {skills.map((skill) => (
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-item app__flex'
                    key={skill.name}
                >
                    <div
                        className='app__flex'
                        style={{ backgroundColor: skill.bgColor }}
                    >
                        <img src={String(urlFor(skill.icon))} alt={skill.name} />
                    </div>
                    <p className='p-text'>{skill.name}</p>
                </motion.div>
            ))}
        </motion.div>
    );

    const renderExperience = (
        <div className='app__skills-exp'>
            {experiences.map((experience) => (
                <motion.div
                    className='app__skills-exp-item'
                    key={experience.year}
                >
                    <div className='app__skills-exp-year'>
                        <p className='bold-text'>{experience.year}</p>
                    </div>
                    <motion.div className='app__skills-exp-works'>
                        {experience.works.map((work) => (
                            <Fragment key={work.company}>
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className='app__skills-exp-work'
                                    data-tip
                                    data-for={work.company}
                                >
                                    <h4 className='bold-text'>{work.name}</h4>
                                    <p className='p-text'>{work.company}</p>
                                </motion.div>
                                <ReactTooltip
                                    id={work.company}
                                    effect='solid'
                                    arrowColor='#fff'
                                    className='skills-tooltip'
                                >
                                    {work.desc}
                                </ReactTooltip>
                            </Fragment>
                        ))}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );

    return (
        <>
            <h2 className='head-text'>Skills & Experiences</h2>
            <div className='app__skills-container'>
                {renderSkills}
                {renderExperience}
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);