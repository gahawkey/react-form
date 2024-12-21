import type { FormData } from '../types/Form';
import { API_CONFIG } from '../config/api';

export const submitForm = async (data: FormData): Promise<void> => {
  const response = await fetch(API_CONFIG.ZAPIER_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    console.error('Submission failed:', await response.text());
    throw new Error('Submission failed');
  }
};