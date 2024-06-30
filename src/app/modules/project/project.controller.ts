import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

const createProject = catchAsync(async (req, res) => {
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
const updateProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.updateProjectById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is updated successfully',
    data: result,
  });
});
const updateProjectImageById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectServices.updateProjectImageById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project image is updated successfully',
    data: result,
  });
});

const deleteProjectById = catchAsync(async (req, res) => {
  const id = req.body;
  const result = await projectServices.deleteProjectById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is deleted successfully',
    data: result && null,
  });
});

export const projectControllers = {
  createProject,
  getAllProject,
  updateProjectById,
  deleteProjectById,
  updateProjectImageById
};
