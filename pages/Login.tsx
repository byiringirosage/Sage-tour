
import React, { useState } from 'react';

interface LoginProps {
  onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-slate-50 px-4 animate-in fade-in duration-500">
      <div className="max-w-md w-full">
        {/* Back button */}
        <button onClick={onBack} className="mb-6 text-slate-500 hover:text-emerald-600 flex items-center gap-2 font-medium">
          ← Back to Home
        </button>

        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-slate-100">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white font-bold text-3xl">S</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-slate-500">
              {isLogin ? 'Log in to manage your tours.' : 'Join Sage Tour and start exploring.'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                  placeholder="Enter your name"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">Password</label>
                {isLogin && <button type="button" className="text-xs text-emerald-600 font-bold hover:underline">Forgot?</button>}
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" 
                placeholder="••••••••"
              />
            </div>

            <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.01] mt-4">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-white px-4 text-slate-400 font-medium">Or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700">
                <span className="text-lg">G</span> Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm text-slate-700">
                <span className="text-lg">f</span> Facebook
              </button>
            </div>
          </div>

          <p className="text-center mt-10 text-slate-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-emerald-600 font-bold hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
