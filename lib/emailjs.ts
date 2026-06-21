// EmailJS Configuration
// Keep this file for future use when you want to enable EmailJS

export const emailjsConfig = {
  serviceId: "service_kc91ibg",
  templateId: "template_bdfqz43",
  publicKey: "fVw5NraPaZYZ4lTZN",
};

// EmailJS send function (ready to use when needed)
export async function sendEmailViaEmailJS(templateParams: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}) {
  const { serviceId, templateId, publicKey } = emailjsConfig;
  
  // Dynamic import to avoid loading EmailJS if not needed
  const emailjs = (await import("@emailjs/browser")).default;
  
  // Initialize EmailJS with public key
  emailjs.init(publicKey);
  
  // Send email using EmailJS
  return await emailjs.send(serviceId, templateId, templateParams);
}


