import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlog = async (blog: TBlog) => {
  return await Blog.create(blog);
};

const getAllBlog = async () => {
  return await Blog.find({});
};

const deleteBlogById = async (blogId: string) => {
  const result = await Blog.deleteOne({ _id: blogId });
  return result;
};

export const blogServices = {
  createBlog,
  getAllBlog,
  deleteBlogById,
};
