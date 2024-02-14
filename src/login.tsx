import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Eye } from 'lucide-react';
import { Card } from "./components/ui/card";
import { useNavigate } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";
import { GoogleLogin }  from "@react-oauth/google"
 

export function Login () {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/home');
      };

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//   const responseGoogle = (response) => {
//     console.log(response);
//   };

//   const responseFailure = (response) => {
//     console.log(response);
//   };
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex items-center justify-center h-screen">
        <script src="https://accounts.google.com/gsi/client" async></script>
    {/* <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      buttonText="Entrar com Google"
      onSuccess={responseGoogle}
      onFailure={responseFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    /> */}
  
    <Card className="px-5 py-5">
      <Tabs defaultValue="common" className="justify-center space-y-4">
        <TabsList>
          <TabsTrigger value="common">Common</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
        </TabsList>
  
        <TabsContent value="common" className="leading-relaxed">
          <div>
            <Input placeholder="Email"></Input>
            <div className="flex items-center">
              <Input placeholder="Password" type={showPassword ? "text" : "password"}></Input>
              <Eye className="" onClick={togglePasswordVisibility} />
            </div>
          </div>
  
          Forgot your password?

          <Button className="w-full" onClick={navigateHome}>Login</Button>
  
          <Separator orientation="horizontal">
            <span className="justify-center">or</span>
          </Separator>

          <div className="w-full">
            {!isLoggedIn ? (
                <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                    setIsLoggedIn(true);
                    navigateHome();
                }}
                onError={() => {
                    console.log("Login failed");
                }}
                />
            ) : (
                <h1 className="w-full">Google Login</h1>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  </div>
  
  );
};