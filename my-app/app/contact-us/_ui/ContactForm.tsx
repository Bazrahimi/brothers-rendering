"use client";
import ActionButton from "@/app/_ui/button/ActionButton";
import FormErrorsMessage from "@/app/_ui/form/FormErrorsMessage";
import Input from "@/app/_ui/form/Input";
import Textarea from "@/app/_ui/form/Textarea";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { motion } from "motion/react";
import { useActionState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { submitEnquiry } from "../_lib/action";
import { ENQUIRY_FIELDS as F } from "../_lib/constant";
import { ContactSuccessMessage } from "./ContactSuccess";

type Props = {
  showMotion?: boolean;
  header?: string;
  subHeader?: string;
  message?: string;
};

const ContactForm = ({
  showMotion = false,
  header,
  subHeader,

  message,
}: Props) => {
  const content = (
    <Form header={header} subHeader={subHeader} message={message} />
  );

  if (!showMotion) return content;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // start lower
      whileInView={{ opacity: 1, y: 0 }} // move to natural position
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // smooth professional easing
      }}
      viewport={{ once: true, amount: 0.25 }} // trigger when 25% visible
    >
      {content}
    </motion.div>
  );
};

export default ContactForm;

const Form = ({ header, subHeader, message }: Props) => {
  const [state, formAction, isPending] = useActionState(
    submitEnquiry,
    undefined,
  );

  const isSuccess = state?.ok === true;

  if (isSuccess) {
    return <ContactSuccessMessage />;
  }

  return (
    <div className="max-w-lg mx-auto rounded-2xl bg-gray-100 p-6 shadow-lg">
      <form className="space-y-2 relative" action={formAction} noValidate>
        {header && (
          <Header  as="h3" size="sm">
            {header}
          </Header>
        )}

        {subHeader && <P size="sm">{subHeader}</P>}

        {/* Name */}
        <Input
          id={F.fullName}
          label="Full Name"
          placeholder="Enter your full name"
          error={state?.errors?.fullName}
          defaultValue={state?.data?.fullName}
          type="text"
          Icon={CiUser}
          required
          className="bg-white"
        />

        {/* Email */}

        <Input
          id={F.email}
          label="Email"
          placeholder="Enter your Email"
          error={state?.errors?.email}
          defaultValue={state?.data?.email}
          type="email"
          Icon={MdEmail}
          required
          className="bg-white"
        />

        {/* Phone (optional) */}
        <Input
          id={F.contactNumber}
          label="Contact Number"
          placeholder="Enter your contact Number"
          error={state?.errors?.contactNumber}
          defaultValue={state?.data?.contactNumber}
          type="text"
          Icon={IoIosPhonePortrait}
          className="bg-white"
        />

        <Textarea
          id={F.qMessage}
          label="Message | Query"
          placeholder="Tell us a little about your enquiry..."
          error={state?.errors?.qMessage}
          defaultValue={state?.data?.qMessage || message}
          required
          className="bg-white"
        />
        <FormErrorsMessage message={state?.message} />

        {/* Submit */}
        <ActionButton
          type="submit"
          isLoading={isPending}
          loadingText="Sending..."
          overlay
          fullWidth
        >
          Send Message
        </ActionButton>

        <P className="text-center text-xs text-gray-500">
          By contacting us, you agree to our community guidelines and privacy
          policy.
        </P>
      </form>
    </div>
  );
};
