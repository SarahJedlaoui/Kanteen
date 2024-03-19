"use client"
import { useSearchParams } from 'next/navigation';
import Restaurant from "@/components/Persona/persona";
import ScrollUp from "@/components/Common/ScrollUp";

export default function RestaurantPage({ params }) {
  const id = params.id
  if (!id || typeof id !== 'string' || !/^[a-z0-9]+$/i.test(id)) {
    console.error('Invalid or unexpected id:', id);
    return <div>Invalid ID</div>;
  };
  return (
    <>
      <ScrollUp />
      <Restaurant id={id} />
    </>
  );
}

