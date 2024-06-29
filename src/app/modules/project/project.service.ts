import { TProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (project: TProject) => {
  return await Project.create(project);
};

const getAllProject = async () => {
  return await Project.find({}) ;
};

// const updateBookById = async (bookId: string, payload: Partial<TBook>) => {
//   const result = await Product.findByIdAndUpdate({ _id: bookId }, payload);
//   return result;
// };

// const deleteBookById = async (BookId: string[]) => {
//   const result = await Product.deleteMany({ _id: { $in: BookId } });
//   return result;
// };

export const projectServices = {
  createProject,
  getAllProject,
  // deleteBookById,
  // updateBookById,
};
