function generatePassword(length) {  // Declare a function to generate a password
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="; // Declare a variable to store the characters to be used in the password
  let password = ""; // Declare a variable to store the password
  for (let i = 0; i < length; i++) { // Loop through the length of the password
    const randomIndex = Math.floor(Math.random() * charset.length); // Generate a random index
    password += charset[randomIndex]; // Add the character at the random index to the password
  } // End of for loop
  return password; // Return the password
} // End of generatePassword function
const password = generatePassword(12); // Generate a 12-character password
document.write('Random password: ' + password); // Write the password to the document