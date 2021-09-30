import SignIn from "components/SignIn";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { logIn } from "actions/user";

export default function SignInContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      logIn({ ...inputs }, () => {
        router.push("/");
      })
    );
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  return <SignIn inputs={inputs} onChange={onChange} onSubmit={onSubmit} />;
}
