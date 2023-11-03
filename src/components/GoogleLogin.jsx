import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { registerLoginWithGoogle } from "../redux/action/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const GoogleLogin = ({ buttonText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) =>
      dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <Button variant="danger" onClick={() => loginWithGoogle()}>
      {buttonText}
    </Button>
  );
};

export default GoogleLogin;
