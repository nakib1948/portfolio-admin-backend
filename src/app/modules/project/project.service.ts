import { TProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (project: TProject) => {
  return await Project.create(project);
};

const getAllProject = async () => {
  return await Project.find({});
};
const getSingleProject = async (id: string) => {
  return await Project.findById(id);
};

const updateProjectById = async (
  projectId: string,
  payload: Partial<TProject>,
) => {
  const { image, ...rest } = payload;

  const updatedProject = await Project.findByIdAndUpdate(
    projectId,
    {
      $addToSet: { image: image[0] },
      $set: { ...rest },
    },
    { new: true, runValidators: true },
  );
  return updatedProject;
};

const deleteProjectById = async (projectId: string) => {
  const result = await Project.deleteOne({ _id: projectId });
  return result;
};

export const projectServices = {
  createProject,
  getAllProject,
  updateProjectById,
  deleteProjectById,
  getSingleProject,
};
