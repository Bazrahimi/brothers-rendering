"use client";
import ActionButton from "@/app/_ui/button/ActionButton";
import FormErrorsMessage from "@/app/_ui/form/FormErrorsMessage";
import Input from "@/app/_ui/form/Input";
import Select from "@/app/_ui/form/Select";
import Textarea from "@/app/_ui/form/Textarea";
import { Header } from "@/app/_ui/typography/Header";
import { P } from "@/app/_ui/typography/paragraph";
import { useActionState } from "react";
import { CiUser } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { submitEnquiry } from "../_lib/action";
import { ENQUIRY_FIELDS as F, queryOptions } from "../_lib/constant";
import { ContactSuccessMessage } from "./ContactSuccess";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitEnquiry,
    undefined,
  );

  const isSuccess = state?.ok === true;

  if (isSuccess) {
    return <ContactSuccessMessage />;
  }

  return (
    <form className="space-y-4 relative" action={formAction} noValidate>
      <Header align="center" as="h3" size="sm">
        Quick Enquiry
      </Header>

      <P className="text-center text-sm text-gray-600">
        Use this form for enquiries, bookings, feedback, or anything else. A
        member of our team will review your message and respond as soon as
        possible.
      </P>

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
      />

      {/* <QueryTypeSelect state={state} /> */}
      <Select
        id={F.queryType}
        label="Select"
        placeholder="Select your enquiry type"
        error={state?.errors?.queryType}
        defaultValue={{
          value: String(state?.data?.queryType) ?? "",
          label: state?.data?.queryTypeLabel ?? "",
        }}
        options={queryOptions}
        required
      />

      <Textarea
        id={F.qMessage}
        label="Message | Query"
        placeholder="Tell us a little about your enquiry..."
        error={state?.errors?.qMessage}
        defaultValue={state?.data?.qMessage}
        required
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
  );
}
