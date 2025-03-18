import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [AuthPageOpen, setAuthPageOpen] = useState(false);

  const toggleAuthMode = () => setIsLogin(!isLogin);
  const authenticationPage = () => setAuthPageOpen(!AuthPageOpen);
  const closeModal = (e) => {
    if (e.target.id === "modalBackdrop") {
      setAuthPageOpen(false);
    }
  };

  return (
    <div className="relative">
      <button onClick={authenticationPage} className='text-white hover:rounded-full hover:bg-[#AFDBF5] hover:text-black p-2 text-2xl'>
        <RiAccountCircleFill />
      </button>
      {AuthPageOpen && (
        <div
          id="modalBackdrop"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-96 shadow-lg rounded-2xl bg-white">
              <CardHeader className="text-center text-xl font-semibold py-4">
                {isLogin ? 'Login' : 'Register'}
              </CardHeader>
              <CardContent className="p-6">
                {!isLogin && (
                  <div className="mb-4">
                    <Input type="text" placeholder="Name" className="w-full" />
                  </div>
                )}
                <div className="mb-4">
                  <Input type="email" placeholder="Email" className="w-full" />
                </div>
                <div className="mb-4">
                  <Input type="password" placeholder="Password" className="w-full" />
                </div>
                <Link to="/home">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    {isLogin ? 'Login' : 'Register'}
                  </Button>
                </Link>
                <div className="text-center mt-4 text-sm text-gray-600">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                  <button
                    onClick={toggleAuthMode}
                    className="text-blue-600 ml-2 hover:underline"
                  >
                    {isLogin ? 'Register' : 'Login'}
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
