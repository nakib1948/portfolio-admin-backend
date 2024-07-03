import { TSkill } from './skills.interface';
import { Skill } from './skills.model';

const createSkill = async (skill: TSkill) => {
  return await Skill.create(skill);
};

const getAllSkill = async () => {
  return await Skill.find({});
};
const getSingleSkill = async (id:string) => {
  return await Skill.findById(id);
};

const updateSkillById = async (skillId: string, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate({ _id: skillId }, payload);
  return result;
};

const deleteSkillById = async (skillId: string) => {
  const result = await Skill.deleteOne({ _id: skillId });
  return result;
};

export const skillServices = {
  createSkill,
  getAllSkill,
  updateSkillById,
  deleteSkillById,
  getSingleSkill
};
