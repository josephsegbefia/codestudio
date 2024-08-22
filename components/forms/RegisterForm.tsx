'use client';
import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/lib/validations';
const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      phoneNumber: '',
      linkedin: '',
      github: '',
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    setIsSubmitting(true);
  }
  return (
    <section className='items-center justify-center flex mt-10'>
      <div className='w-[50%]'>
        <h1 className='mb-10'>Register an account</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex w-full flex-col gap-5'
          >
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    First Name <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' />
                  </FormControl>

                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    Last Name <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' />
                  </FormControl>

                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    Email <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' type='email' />
                  </FormControl>

                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    Password <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' type='password' />
                  </FormControl>
                  <FormDescription>
                    Should be at least 8 characters, have at least one capital
                    letter, one number and at least one special character
                  </FormDescription>
                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='passwordConfirm'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    Confirm Password{' '}
                    <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' type='password' />
                  </FormControl>
                  <FormDescription>
                    Should match the original password
                  </FormDescription>
                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='linkedin'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    LinkedIn
                    <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' />
                  </FormControl>
                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='github'
              render={({ field }) => (
                <FormItem className='flex w-full flex-col'>
                  <FormLabel className='paragragh-semibold text-primary'>
                    GitHub
                    <span className='text-primary-red'> * </span>
                  </FormLabel>
                  <FormControl className='mt-3.5'>
                    <Input className='no-focus' />
                  </FormControl>
                  <FormMessage className='text-primary-red' />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='bg-primary w-fit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Register;
