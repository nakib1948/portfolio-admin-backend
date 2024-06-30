import { TProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (project: TProject) => {
  return await Project.create(project);
};

const getAllProject = async () => {
  return await Project.find({}) ;
};

const updateProjectById = async (projectId: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate({ _id: projectId }, payload);
  return result;
};
const updateProjectImageById = async (projectId: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate({ _id: projectId }, { $push: { image: [payload] } });
  return result;
};

const deleteProjectById = async (projectId: string[]) => {
  const result = await Project.deleteOne({ _id: projectId});
  return result;
};

export const projectServices = {
  createProject,
  getAllProject,
  updateProjectById,
  deleteProjectById,
  updateProjectImageById
};
