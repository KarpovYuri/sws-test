import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rowsApi = createApi({
  reducerPath: 'rowsApi',
  tagTypes: ['Rows'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://185.244.172.108:8081/v1/outlay-rows/entity/114565/row/'
  }),
  endpoints: (build) => ({
    getRows: build.query({
      query: () => 'list',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: { id: string }) => ({ type: 'Rows', id })),
              { type: 'Rows', id: 'LIST' }
            ]
          : [{ type: 'Rows', id: 'LIST' }]
    }),
    deleteRow: build.mutation({
      query: (rId) => ({
        url: `${rId}/delete`,
        method: 'DELETE'
      }),
      invalidatesTags: [{ type: 'Rows', id: 'LIST' }]
    })
  })
});

export const { useGetRowsQuery, useDeleteRowMutation } = rowsApi;
