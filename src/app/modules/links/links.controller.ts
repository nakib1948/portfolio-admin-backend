import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { linkServices } from './links.service';

const getAllLink = catchAsync(async (req, res) => {
  const result = await linkServices.getAllLink();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Links are retrieved successfully',
    data: result
  });
});
const updateLinkById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await linkServices.updateLinkById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Links are updated successfully',
    data: result,
  });
});


export const linkControllers = {
    getAllLink,
    updateLinkById
}
