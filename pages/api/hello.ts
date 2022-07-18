// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export interface ResponseType {
  [key: string]: any;
}

async function hello(req: NextApiRequest, res: NextApiResponse<ResponseType>) {
  res.statusCode = 200;
  res.json({
    name: 'Hello',
  });
}

export default hello;
