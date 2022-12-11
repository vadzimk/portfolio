// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {getHomepageData} from '@/services/cmsDataService';
import sendMail from '@/services/mailService/index.js'
type Data = {
    name: string
}

/*
    /api/contact
*/
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.body)
    const info = await sendMail(req.body);
    // res.status(info.statusCode).end();
    res.status(200).end();
}
