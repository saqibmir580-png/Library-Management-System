export function generateVerificationOtpEmailTemplate(otpCode) {
  return `
   <div class="bg-gray-100 p-8">
    <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl font-semibold text-gray-800 text-center mb-4">Verify Your Email</h1>
        <p class="text-gray-700 text-lg mb-4">Dear User,</p>
        <p class="text-gray-600 text-base mb-4">
           To complete your registration or login please use the following verification code:
        </p>
        <div class="text-4xl font-bold text-green-600 text-center mb-6">
            <span>${otpCode}</span> 
        </div>
        <p class="text-gray-600 text-base mb-4">
            This OTP is valid for 15 minutes only. If you didn't request this verification, please ignore this email.
        </p>
        <div class="text-center">
            <p class="text-sm text-gray-500">Thank you for using our NC Library!</p>
        </div>
        <div class="text-center mt-6 text-xs text-gray-400">
            <p>For any issues, contact our NC Libray Management.</p>
            <h5>Phone:6005774525</h5>
            <p>Email:saqibmir580@gmail.com</p>
        </div>
    </div>
    </div> `;
}

export function generateForgotPasswordEmailTemplate(resetPasswordUrl) {
  return `
<div class="bg-gray-100 p-8">
<div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h1 class="text-2xl font-semibold text-gray-800 text-center mb-4">Reset Your Password</h1>
    <p class="text-gray-700 text-lg mb-4">Dear User,</p>
    <p class="text-gray-600 text-base mb-4">
      you requested to reset your password.please click the button below to proceed:
    </p>
    <div class="text-4xl font-bold text-green-600 text-center mb-6">
    <a href="${resetPasswordUrl}" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Reset Password
                </a>
    </div>
    <p class="text-gray-600 text-base mb-4">
        if you did not request this ,please ignore this email. this link will expire in 10 minutes.
    </p>
    <p class="text-gray-600 text-base mb-4">
       if the button above doesn't work .copy and paste the follwing URL into your browser.
    </p>
    <p class="text-gray-600 text-base mb-4">
    ${resetPasswordUrl}
    </p>
    <div class="text-center">
        <p class="text-sm text-gray-500">Thank you for using our NC Library!</p>
    </div>
    <div class="text-center mt-6 text-xs text-gray-400">
        <p>For any issues, contact our NC Libray Management.</p>
        <h5>Phone:6005774525</h5>
        <p>Email:saqibmir580@gmail.com</p>
    </div>
</div>
</div>
`;
}
