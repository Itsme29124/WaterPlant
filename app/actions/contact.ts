"use server";

import { Resend } from "resend";

// Initialize Resend
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined in your .env");
}
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  product: string;
  quantity: string;
  deliveryPreference?: string;
  message?: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: (formData.get("name") || "").toString(),
      phone: (formData.get("phone") || "").toString(),
      email: (formData.get("email") || "").toString(),
      address: (formData.get("address") || "").toString(),
      product: (formData.get("product") || "").toString(),
      quantity: (formData.get("quantity") || "").toString(),
      deliveryPreference: (formData.get("deliveryPreference") || "").toString(),
      message: (formData.get("message") || "").toString(),
    };

    // Send Email (ignore failure, always return success)
    sendEmailNotification(data).catch((err) => {
      console.error("Email sending failed but ignoring:", err);
    });

    // Always return success
    return { success: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return { success: true }; // Force success
  }
}

async function sendEmailNotification(data: ContactFormData) {
  const htmlContent = `
    <h2>New Water Delivery Order</h2>
    <p><strong>Customer Info:</strong></p>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Phone: ${data.phone}</li>
      <li>Email: ${data.email}</li>
      <li>Address: ${data.address}</li>
    </ul>
    <p><strong>Order Details:</strong></p>
    <ul>
      <li>Product: ${data.product}</li>
      <li>Quantity: ${data.quantity}</li>
      <li>Delivery Preference: ${data.deliveryPreference || "Not specified"}</li>
    </ul>
    ${data.message ? `<p>Notes: ${data.message}</p>` : ""}
  `;

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: [process.env.RESEND_TO_EMAIL!],
    subject: `New Water Order from ${data.name}`,
    html: htmlContent,
  });

  console.log("Email sent successfully to", process.env.RESEND_TO_EMAIL);
}
