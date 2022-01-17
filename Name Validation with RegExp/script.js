const validateName = (name) => {
  const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g;

  console.log(regex.test(name));
  if (regex.test(name)) return "The name is valid";
  else return "Invalid name";
};

// console.log(validateName("Marlon"));

const validateEmail = (email) => {
  const regex =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

  console.log(regex.test(email));
  if (regex.test(name)) return "The mail is valid";
  else return "Invalid mail";
};

validateEmail("marlon.morales@icloud.com");
validateEmail("Marlon.morales@iCloud.com");
validateEmail("marlon.moralesicloud.com");
validateEmail("marlon.morales@icloudcom");
validateEmail("marlon.morales@icloud");
