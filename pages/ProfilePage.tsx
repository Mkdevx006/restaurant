
import React from 'react';
import { User } from '../types';
import { Link } from 'react-router-dom';

interface ProfilePageProps {
  user: User | null;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">Please login to view your profile</h2>
          <Link to="/login" className="mt-4 inline-block text-orange-600 font-bold hover:underline">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  const detailItems = [
    { label: 'Full Name', value: `${user.firstName} ${user.lastName}`, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> },
    { label: 'Email Address', value: user.email, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { label: 'Mobile Number', value: user.mobile, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
    { label: 'Date of Birth', value: user.dob, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> },
    { label: 'Address', value: user.address, icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">My Profile</h1>
            <p className="text-slate-500 mt-1">Manage your account details and travel preferences</p>
          </div>
          <Link to="/" className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="h-24 w-24 rounded-full bg-white p-1.5 shadow-lg">
                <div className="h-full w-full rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold text-orange-600 border border-slate-200">
                  {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-8 px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-lg font-semibold text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end gap-4">
              <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                Edit Details
              </button>
              <button className="px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-100">
                Change Password
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-bold text-slate-900">0</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">Total Bookings</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-bold text-slate-900">0</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">Reviews Given</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className="text-2xl font-bold text-orange-600">Gold</p>
            <p className="text-xs text-slate-500 font-bold uppercase mt-1">Travel Tier</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
