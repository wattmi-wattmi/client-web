'use client';
import React from 'react'
import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
    const { pending } = useFormStatus();
  return (
    <button type='submit' disabled={pending} className='bg-blue-300 p-2 disabled:bg-gray-500 disabled:cursor-not-allowed'></button>
  )
}
