"use client";
import React from "react";
import Image from "next/image";
import { Chevron } from "@/assets";
import style from "./style.module.css";
import FloatingInput from "@/components/forms/floatinput";
import { useTranslations } from "next-intl";
import { API_CLIENT } from "@/services";

const ContactForm: React.FC<{}> = () => {
  const t = useTranslations("ContactPg");

  const handleFormSubmit = async (event: any) => {
    console.log(event);
    event?.preventDefault();
    const payload = new FormData(event?.target);
    await API_CLIENT.submiContactForm(payload)

  } 

  return (
    <form className={style.contactForm} onSubmit={handleFormSubmit}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
        <div className={style.radioBtn}>
          <label>
            <input
              type="radio"
              name="form_type"
              value="Enquiry"
              defaultChecked
            />
            {t("radio_enquiry")}
          </label>
          <label>
            <input type="radio" name="form_type" value="Feedback" />{" "}
            {t("radio_feedback")}
          </label>
        </div>
        <div className={style.formgrp}>
          <FloatingInput
            name="name"
            inputKey="enter_name"
            label={t("name_label")}
          />
        </div>
        <div className={style.formgrp}>
          <FloatingInput
            name="phone"
            inputKey="enter_phone"
            label={t("phone_inp_label")}
            type="tel"
          />
        </div>
        <div className="col-span-2">
          <FloatingInput
            name="email"
            inputKey="enter_phone"
            type="email"
            label={t("email_inp_label")}
          />
        </div>
        <div className="col-span-2">
          <FloatingInput
            name="message"
            inputKey="message"
            label={t("message")}
            inputType="text"
          />
        </div>
        <div className="flex md:gap-10 gap-4 col-span-2">
          <button
            title="Submit Message"
            className="app-btn btn-filled btn-left-icon"
            style={{ background: "#F5A604" }}
          >
            <div className="btn-content">
              Submi Message
              <span className="left-icon">
                <Image src={Chevron} alt="Submi Message" />
              </span>
            </div>
          </button>
          <button type="button" className="hidden-mob">
            Our Location Map
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
