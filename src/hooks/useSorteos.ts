import { useQuery } from '@tanstack/react-query';
import { ConnectApi } from '../api/ConnectApi';
import { Posts } from '../interfaces/interfaces';

const getSorteos = async ():Promise<Array<Posts>> => {
    const request = await ConnectApi();
    const { data } = await request.get(`/posts`);
    return data;
  };
  
  export const useSorteos = () => {
    const querySorteos = useQuery({ queryKey: ['sorteos'], queryFn: getSorteos });
    return querySorteos;
  };