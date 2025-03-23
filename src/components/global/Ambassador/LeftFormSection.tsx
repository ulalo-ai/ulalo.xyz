"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  website: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
}

const LeftFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    error: { x: [-10, 10, -10, 10, 0], transition: { duration: 0.4 } }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

  
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.website.trim()) newErrors.website = 'Website URL is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
     
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form Data Submitted:', formData);
   
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full border px-3 md:px-4 py-2 md:py-4 rounded-xl text-[#71A5BA] font-openSans_Regular text-base leading-[100%] focus:outline-none focus:ring-2 focus:ring-[#364655] transition-all duration-200";
  const errorInputClasses = "border-red-500 focus:ring-red-500";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col w-full gap-5 md:gap-8 self-stretch'
    >
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-end gap-8 self-stretch'>
          <div className='flex flex-col items-start md:flex-row justify-between gap-8 self-stretch'>
            <motion.div 
              className='flex flex-col w-full'
              variants={inputVariants}
              whileFocus="focus"
              animate={errors.name ? "error" : undefined}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${inputClasses} ${errors.name ? errorInputClasses : 'border-[rgba(223,233,238,0.80)]'}`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            <motion.div 
              className='flex flex-col w-full'
              variants={inputVariants}
              whileFocus="focus"
              animate={errors.email ? "error" : undefined}
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputClasses} ${errors.email ? errorInputClasses : 'border-[rgba(223,233,238,0.80)]'}`}
                placeholder="Enter your Email Address"
              />
              {errors.email && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>
          </div>

          <motion.div 
            className='flex flex-col w-full'
            variants={inputVariants}
            whileFocus="focus"
            animate={errors.website ? "error" : undefined}
          >
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className={`${inputClasses} ${errors.website ? errorInputClasses : 'border-[rgba(223,233,238,0.80)]'}`}
              placeholder="Enter your Website URL"
            />
            {errors.website && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.website}
              </motion.p>
            )}
          </motion.div>

          <motion.div 
            className='flex flex-col w-full'
            variants={inputVariants}
            whileFocus="focus"
            animate={errors.message ? "error" : undefined}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} ${errors.message ? errorInputClasses : 'border-[rgba(223,233,238,0.80)]'}`}
              placeholder="Write a message"
            />
            {errors.message && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </motion.div>
        </div>

        <div className='flex justify-end mt-5 md:mt-8 lg:mt-10'>
          <motion.button
            type="submit"
            variants={buttonVariants}
            initial="initial"
            whileHover={!isSubmitting ? "hover" : "initial"}
            whileTap={!isSubmitting ? "tap" : "initial"}
            disabled={isSubmitting}
            className="flex items-center justify-center bg-[#364655] pl-[46.31px] pr-[46.33px] py-[18px] rounded-[48px] text-white text-[14px] font-medium leading-[16.8px] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Post a comment
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default LeftFormSection;
