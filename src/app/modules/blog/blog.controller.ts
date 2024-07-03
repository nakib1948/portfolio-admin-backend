import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await blogServices.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog added succesfully',
    data: result,
  });
});
const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlog();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs are retrieved successfully',
    data: result,
  });
});

const deleteBlogById = catchAsync(async (req, res) => {
  const result = await blogServices.deleteBlogById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is deleted successfully',
    data: result && null,
  });
});

export const blogControllers = {
  createBlog,
  getAllBlog,
  deleteBlogById,
};
