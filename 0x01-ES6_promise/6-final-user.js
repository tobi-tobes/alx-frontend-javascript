import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, photoPromise]).then((values) => {
    const responseArr = values.map((value) => ({
      status: value.status,
      value: value.status === 'fulfilled' ? value.value : value.reason.toString(),
    }));

    // console.log(responseArr);

    return responseArr;
  });
}
