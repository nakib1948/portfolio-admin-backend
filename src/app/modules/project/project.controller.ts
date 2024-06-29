import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
  console.log("found")
  const result = await projectServices.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project added succesfully',
    data: result,
  });
});
const getAllProject = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProject();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects are retrieved successfully',
    data: result
  });
});


export const productControllers = {
  createProject,
  getAllProject,
};
