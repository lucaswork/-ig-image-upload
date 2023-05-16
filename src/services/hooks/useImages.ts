/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ImagesResponse } from '../../types';
import { api } from '../api';

export async function getImages({ pageParam = null }): Promise<ImagesResponse> {
  const { data } = await api('/api/images', {
    params: {
      after: pageParam,
    },
  });
  return data;
}
