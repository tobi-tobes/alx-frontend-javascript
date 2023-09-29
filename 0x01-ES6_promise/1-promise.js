export default function getFullResponseFromAPI(success) {
  const newPromise = new Promise((resolve, reject) => {
    if (success) {
      const resolvedObj = {
        status: 200,
        body: 'Success',
      };
      resolve(resolvedObj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

  return newPromise;
}
