import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const profile = createUser();
  Promise.all([photo, profile]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  });
}
