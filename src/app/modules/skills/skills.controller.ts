import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { skillServices } from './skills.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await skillServices.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill added succesfully',
    data: result,
  });
});
const getAllSkill = catchAsync(async (req, res) => {
  const result = await skillServices.getAllSkill();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill are retrieved successfully',
    data: result,
  });
});
const updateSkillById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillServices.updateSkillById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is updated successfully',
    data: result,
  });
});

const deleteSkillById = catchAsync(async (req, res) => {
  const id = req.body;
  const result = await skillServices.deleteSkillById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is deleted successfully',
    data: result && null,
  });
});

export const skillControllers = {
  createSkill,
  getAllSkill,
  updateSkillById,
  deleteSkillById,
};
