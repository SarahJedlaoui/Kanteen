"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export default function Welcome() {
  const { data: session, status } = useSession();
  const router = useRouter();



 useEffect(() => {
    if (status === 'authenticated' && session?.user?.link) {
      router.push(session.user.link);
    }
  }, [status, session, router]);



  
  if (!session) {
    return (
      <>
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Not authenticated
                  </h3>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  const user = (session as Session).user;
  if (!session.user) {
    return (
      <>
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Loading user data...
                  </h3>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <section className="relative mt-10 z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Welcome, {session.user.name}
                </h3>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

