import { TLink } from './links.interface';
import { Link } from './links.model';

const getAllLink = async () => {
  return await Link.find({});
};

const updateLinkById = async (linkId: string, payload: Partial<TLink>) => {
  const result = await Link.findByIdAndUpdate({ _id: linkId }, payload);
  return result;
};

export const linkServices = {
  getAllLink,
  updateLinkById,
};
