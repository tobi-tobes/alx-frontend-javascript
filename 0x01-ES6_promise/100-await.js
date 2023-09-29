import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    const photoPromise = await uploadPhoto();
    photo = photoPromise;
  } catch (err) {
    photo = null;
  }

  try {
    const userPromise = await createUser();
    user = userPromise;
  } catch (err) {
    user = null;
  }

  if (photo === null || user === null) {
    return {};
  }

  return {
    photo,
    user,
  };
}
