import { required } from "./server";
export const publicEnv = {
  allowIndexing: required(
    process.env.NEXT_PUBLIC_ALLOW_INDEXING,
    "NEXT_PUBLIC_ALLOW_INDEXING",
  ),
  // cloudinaryCloudName: required(
  //   process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  //   "NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME",
  // ),
  // cloudinaryApiKey: required(
  //   process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  //   "NEXT_PUBLIC_CLOUDINARY_API_KEY",
  // ),
  // add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY if you use Stripe.js
} as const;
